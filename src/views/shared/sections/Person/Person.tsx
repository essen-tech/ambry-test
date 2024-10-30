import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IPerson } from "~models";

import * as style from "./Person.module.scss";

interface Props {
  section: IPerson;
}
export const Person = ({ section }: Props) => {
  const { backgroundColor, image, personTitle, personName, description } = section;

  return (
    <section
      data-sectionname="Person"
      className={style.person}
      style={{ backgroundColor }}
    >
      <Container className={style.container}>
        <Row>
          <Col lg={6}>
            <motion.figure
              className={style.figure}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              <GatsbyImage
                image={image.localFile.childImageSharp.gatsbyImageData}
                alt={image.caption || ""}
                class={style.image}
              />
            </motion.figure>
          </Col>
          <Col lg={6} className={style.content}>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              {personTitle}
            </motion.h3>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              {personName}{" "}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              {description}
            </motion.p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
