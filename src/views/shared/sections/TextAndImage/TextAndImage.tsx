import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { ITextAndImage } from "~models";

import * as style from "./TextAndImage.module.scss";

interface Props {
  section: ITextAndImage;
}

export const TextAndImage = ({ section }: Props) => {
  const { backgroundColor, textAndImageGroups } = section;
  console.log("ccc", textAndImageGroups);

  return (
    <section
      data-sectionname="TextAndImage"
      className={style.textAndImage}
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        {textAndImageGroups.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Row
                key={index}
                className={`
                  ${style.textAndImageRow} 
                  ${item.textAndImage.alignImage === "right" ? style.imageLeftAlign : ""} 
                  ${
                    item.textAndImage.styleKeys.includes("image-overflows-top")
                      ? style.imageOverflowsTop
                      : ""
                  }
                  ${
                    item.textAndImage.styleKeys.includes("section-push-top")
                      ? style.sectionPushTop
                      : ""
                  }
                  ${item.textAndImage.extraImages ? style.sectionWithExtraImages : ""}`}
              >
                <Col
                  xs={item.textAndImage.extraImages ? 8 : 12}
                  md={6}
                  lg={
                    item.textAndImage.alignImage === "right"
                      ? item.textAndImage.styleKeys.includes("image-bigger")
                        ? 6
                        : item.textAndImage.styleKeys.includes("image-smaller")
                        ? 3
                        : 5
                      : 4
                  }
                  className={`${
                    item.textAndImage.styleKeys.includes("text-bigger")
                      ? ""
                      : item.textAndImage.styleKeys.includes("image-smaller")
                      ? "offset-lg-3"
                      : "offset-lg-1"
                  }`}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { y: "60px", opacity: 0 },
                      visible: { y: "0", opacity: 1 },
                    }}
                    className={`${style.normalImage} ${
                      item.textAndImage.extraImages ? style.exception : ""
                    }`}
                  >
                    <GatsbyImage
                      image={
                        item.textAndImage.image.localFile.childImageSharp.gatsbyImageData
                      }
                      alt={item.textAndImage.image?.caption || ""}
                      className={style.image}
                    />
                  </motion.div>
                </Col>
                <Col
                  md={6}
                  lg={`${
                    item.textAndImage.styleKeys.includes("text-overflows-left") ||
                    item.textAndImage.styleKeys.includes("text-bigger")
                      ? 6
                      : 4
                  }`}
                  className={`${
                    item.textAndImage.styleKeys.includes("text-overflows-left")
                      ? style.textOverflowsLeft
                      : "offset-lg-1"
                  } ${
                    item.textAndImage.styleKeys.includes("image-smaller")
                      ? style.imageSmaller
                      : ""
                  }`}
                >
                  {item.textAndImage.title && (
                    <motion.h2
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      variants={{
                        hidden: { y: "60px", opacity: 0 },
                        visible: { y: "0", opacity: 1 },
                      }}
                      dangerouslySetInnerHTML={{ __html: item.textAndImage.title }}
                      className={`h1 ${style.title}`}
                    />
                  )}
                  {item.textAndImage.subtitle && (
                    <motion.h3
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      variants={{
                        hidden: { y: "60px", opacity: 0 },
                        visible: { y: "0", opacity: 1 },
                      }}
                      dangerouslySetInnerHTML={{ __html: item.textAndImage.subtitle }}
                      className={style.subtitle}
                    ></motion.h3>
                  )}
                  {item.textAndImage.description && (
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
                        __html: item.textAndImage.description,
                      }}
                      className={style.description}
                    ></motion.p>
                  )}
                </Col>
              </Row>
              {item.textAndImage.extraImages && (
                <Row className={style.extraImages}>
                  {item.textAndImage.extraImages.map((image, index) => (
                    <Col
                      xs={8}
                      md={4}
                      key={index}
                      className={`${index === 0 ? "offset-lg-1" : ""}`}
                    >
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { y: "60px", opacity: 0 },
                          visible: { y: "0", opacity: 1 },
                        }}
                        className={style.imageHolder}
                      >
                        <GatsbyImage
                          image={image.image.localFile.childImageSharp.gatsbyImageData}
                          alt={image.image?.caption || ""}
                          className={style.image}
                        />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              )}
            </React.Fragment>
          );
        })}
      </Container>
    </section>
  );
};
