import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IStatement } from "~models";

import * as style from "./Statement.module.scss";

interface Props {
  section: IStatement;
}

export const Statement = ({ section }: Props) => {
  const { backgroundColor, statementText, subsections } = section;
  const { styleKey } = statementText;
  const isSmallText = styleKey === "small-text";
  return (
    <section
      data-sectionname="Statement"
      style={{ backgroundColor: backgroundColor }}
      className={`
        ${style.statement}
        ${isSmallText ? style.smaller : ""} 
        ${subsections ? "" : style.withSubsection}
      `}
    >
      <Container>
        <Row>
          <Col
            lg={isSmallText ? 8 : 10}
            className={`${isSmallText ? "offset-lg-2" : "offset-lg-1"} ${style.content}`}
          >
            {isSmallText ? (
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                dangerouslySetInnerHTML={{ __html: statementText.text }}
              ></motion.h2>
            ) : (
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                dangerouslySetInnerHTML={{ __html: statementText.text }}
              ></motion.h1>
            )}
          </Col>
        </Row>
        {subsections &&
          subsections.map((subsection, index) => (
            <Row key={index} className={style.subsection}>
              <Col md={5} className={`offset-lg-1`}>
                <Row>
                  <Col>
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      variants={{
                        hidden: { y: "60px", opacity: 0 },
                        visible: { y: "0", opacity: 1 },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: subsection.textAndImage.title,
                      }}
                    ></motion.h1>
                    {subsection.textAndImage.bottomText && (
                      <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { y: "60px", opacity: 0 },
                          visible: { y: "0", opacity: 1 },
                        }}
                        dangerouslySetInnerHTML={{
                          __html: subsection.textAndImage.bottomText,
                        }}
                        className={style.bottomTextException}
                      ></motion.p>
                    )}
                  </Col>
                </Row>

                {subsection.textAndImage.bottomImage && (
                  <Row>
                    <Col xs={12} lg={10}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { y: "60px", opacity: 0 },
                          visible: { y: "0", opacity: 1 },
                        }}
                        className={style.subsectionBottomImage}
                      >
                        <GatsbyImage
                          image={
                            subsection.textAndImage.bottomImage.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={subsection.textAndImage.bottomImage.caption || ""}
                          className={style.image}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                )}
              </Col>
              <Col lg={5} md={6} className={`offset-md-1`}>
                {subsection.textAndImage.image && (
                  <Row>
                    <Col>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { y: "60px", opacity: 0 },
                          visible: { y: "0", opacity: 1 },
                        }}
                        className={style.subsectionImage}
                      >
                        <GatsbyImage
                          image={
                            subsection.textAndImage.image.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={subsection.textAndImage.image.caption || ""}
                          className={style.image}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                )}
                {subsection.textAndImage.bottomText && (
                  <Row>
                    <Col xs={10}>
                      <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { y: "60px", opacity: 0 },
                          visible: { y: "0", opacity: 1 },
                        }}
                        dangerouslySetInnerHTML={{
                          __html: subsection.textAndImage.bottomText,
                        }}
                        className={style.bottomText}
                      ></motion.p>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          ))}
      </Container>
    </section>
  );
};
