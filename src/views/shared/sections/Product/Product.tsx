import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import { Container, Row, Col, Button } from "~components";
import { IProduct } from "~models";

import * as style from "./Product.module.scss";

interface Props {
  section: IProduct;
}

export const Product = ({ section }: Props) => {
  const { backgroundImage, styleKey, description, link, smallTitle, title } = section;

  return (
    <section
      data-sectionname="Product"
      className={`
        ${style.product}
        ${styleKey === "full-height" ? style.bigger : null}`}
    >
      <Container fluid={true}>
        <Row className={`${style.sectionImage}`}>
          {link && link.url && <Link to={link.url}></Link>}
          <div>
            <GatsbyImage
              image={backgroundImage.localFile.childImageSharp.gatsbyImageData}
              alt={backgroundImage?.caption || ""}
              className={style.image}
            />
          </div>
          <Container>
            <Row className={style.contentRow}>
              <Col>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  variants={{
                    hidden: { y: "60px", opacity: 0 },
                    visible: { y: "0", opacity: 1 },
                  }}
                  className={style.content}
                >
                  {smallTitle && <h2>{smallTitle}</h2>}
                  {title && <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>}
                  {description && (
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                  )}
                  {link.url && (
                    <div>
                      <Link to={link.url}>
                        <Button icon="icon-arrow-right">
                          {link.title && link.title}
                        </Button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </section>
  );
};
