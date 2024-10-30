import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IProductOrigin } from "~models";

import * as style from "./ProductOrigin.module.scss";

interface Props {
  section: IProductOrigin;
}

export const ProductOrigin = ({ section }: Props) => {
  const { description, images, subtitle, title } = section;

  return (
    <section data-sectionname="ProductOrigin" className={style.productOrigin}>
      <Container>
        <Row>
          <Col xl={10} className={"offset-xl-1"}>
            <figure className={style.mainFigure}>
              <motion.figcaption
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
              >
                {title ? <h1>{title}</h1> : null}
                {subtitle ? <h2>{subtitle}</h2> : null}
              </motion.figcaption>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                className={style.mainImage}
              >
                <GatsbyImage
                  image={images[0]?.image.localFile.childImageSharp.gatsbyImageData}
                  alt={images[0]?.image?.caption || ""}
                  className={style.image}
                />
              </motion.div>
            </figure>
          </Col>
        </Row>
        <Row>
          <Col xl={10} className={"offset-xl-1"}>
            <figure className={style.secondaryFigure}>
              <figcaption>
                {description && (
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { y: "60px", opacity: 0 },
                      visible: { y: "0", opacity: 1 },
                    }}
                  >
                    {description}
                  </motion.p>
                )}
              </figcaption>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                className={style.secondaryImage}
              >
                <GatsbyImage
                  image={images[1]?.image.localFile.childImageSharp.gatsbyImageData}
                  alt={images[1]?.image?.caption || ""}
                  className={style.image}
                />
              </motion.div>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
