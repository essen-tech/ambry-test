import React from "react";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IPrivacyPolicy } from "~models";

import * as style from "./PrivacyPolicy.module.scss";

interface Props {
  section: IPrivacyPolicy;
}

export const PrivacyPolicy = ({ section }: Props) => {
  const { textSectionGroups } = section;

  return (
    <section data-sectionname="PrivacyPolicy" className={style.privacyPolicy}>
      <Container>
        {textSectionGroups &&
          textSectionGroups.map((textSection, index) => (
            <Row key={index}>
              {textSection.textSection.title && (
                <Col lg={10} xl={8} className={`offset-lg-1 offset-xl-2`}>
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { y: "60px", opacity: 0 },
                      visible: { y: "0", opacity: 1 },
                    }}
                    className={style.title}
                    dangerouslySetInnerHTML={{
                      __html: textSection.textSection.title,
                    }}
                  ></motion.h3>
                </Col>
              )}
              {textSection.textSection.bodyText && (
                <Col lg={9} xl={7} xs={11} className={`offset-1 offset-lg-2 offset-xl-3`}>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { y: "60px", opacity: 0 },
                      visible: { y: "0", opacity: 1 },
                    }}
                    className={style.content}
                    dangerouslySetInnerHTML={{
                      __html: textSection.textSection.bodyText,
                    }}
                  ></motion.p>
                </Col>
              )}
            </Row>
          ))}
      </Container>
    </section>
  );
};
