import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IHero } from "~models";
import { Icons } from "~libs/assets";

import * as style from "./Hero.module.scss";

interface Props {
  section: IHero;
}

const VerticalText = ({ text }: { text: string }) => (
  <motion.small
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.2 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
    className={`${style.verticalText}`}
  >
    {text}
  </motion.small>
);

const ScrollButton = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1 }}
    variants={{
      hidden: { y: "60px", opacity: 0 },
      visible: { y: "0", opacity: 1 },
    }}
    className={style.scrollButton}
  >
    <span className={style.scrollButtonInner}>
      <img src={Icons.arrow_down_bigger_reversed} alt="arrow" />
    </span>
  </motion.div>
);

export const Hero = ({ section }: Props) => {
  const { backgroundColor, heroImage, heroText } = section;

  const isImageAlignedRight = heroImage.styleKey === "align-right";
  const { styleKey } = heroText;
  const isPromoBanner = styleKey.includes("promo");

  console.log("hero", section);

  return (
    <section
      data-sectionname="Hero"
      style={{ backgroundColor }}
      className={`
      ${style.hero}
      ${isPromoBanner ? style.promo : ""} 
      ${isImageAlignedRight ? style.imageAlignedRight : style.imageAlignedLeft} 
      ${styleKey.includes("description-overflows") ? style.descriptionOverflows : ""}
      ${styleKey.includes("description-inner") ? style.descriptionInner : ""}
      ${styleKey.includes("title-inner") ? style.titleInner : ""}
      ${styleKey.includes("center-left") ? style.centerLeft : ""}
      ${styleKey.includes("small-title") ? style.smallTitle : ""}
      ${styleKey.includes("title-overflows") ? style.titleOverflows : ""}
      ${styleKey.includes("light-text") ? style.lightText : ""}`}
    >
      <Container fluid={true}>
        <Row>
          <Col
            lg={12}
            className={`${isImageAlignedRight ? "offset-lg-1" : ""} ${
              style.heroImageColumn
            }`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { y: "20%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <img
                src={
                  "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/Group-695-scaled.jpg"
                }
                alt={heroImage.image?.caption || ""}
                className={style.heroImage}
              />
            </motion.div>
            {(heroText.leftText || heroText.rightText) && (
              <VerticalText text={heroText.leftText || heroText.rightText} />
            )}
            <Row className={style.contentRow} style={{ backgroundColor }}>
              <Col
                xs={11}
                lg={12}
                className={style.contentCol}
                style={{ backgroundColor }}
              >
                {/* <div className={style.contentHolder}>
                  {isPromoBanner ? null : heroText.smallTitle ? (
                    <motion.h2
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                      variants={{
                        hidden: { y: "60px", opacity: 0 },
                        visible: { y: "0", opacity: 1 },
                      }}
                      dangerouslySetInnerHTML={{ __html: heroText.smallTitle }}
                    ></motion.h2>
                  ) : null}
                  <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    variants={{
                      hidden: { y: "60px", opacity: 0 },
                      visible: { y: "0", opacity: 1 },
                    }}
                    dangerouslySetInnerHTML={{ __html: heroText.title }}
                  ></motion.h1>
                  {isPromoBanner ? (
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                      variants={{
                        hidden: { y: "60px", opacity: 0 },
                        visible: { y: "0", opacity: 1 },
                      }}
                      className={style.promoTitleException}
                      dangerouslySetInnerHTML={{ __html: heroText.smallTitle }}
                    ></motion.h1>
                  ) : null}
                  {isPromoBanner && <ScrollButton />}
                  {heroText.description ? (
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                      variants={{
                        hidden: { y: "60px", opacity: 0 },
                        visible: { y: "0", opacity: 1 },
                      }}
                      dangerouslySetInnerHTML={{ __html: heroText.description }}
                      className={style.textContent}
                    ></motion.p>
                  ) : null}
                </div> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
