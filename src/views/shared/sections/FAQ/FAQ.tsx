import React, { useState } from "react";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IFAQ } from "~models";

import * as style from "./FAQ.module.scss";

interface Props {
  section: IFAQ;
}

export const FAQ = ({ section }: Props) => {
  const { title, questions } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => setActiveIndex(index);

  return (
    <section data-sectionname="FAQ" className={style.faq}>
      <Container>
        <Row>
          <Col lg={3} md={4}>
            {title && (
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                className={style.title}
              >
                {title}
              </motion.h2>
            )}
          </Col>
          <Col lg={8} md={12} className={`offset-lg-1`}>
            {questions.map((question, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                key={index}
                className={`${style.accordionPanel} ${
                  activeIndex === index ? style.accordionPanelActive : ""
                }`}
              >
                <button
                  onClick={() => handleClick(index)}
                  className={style.accordionTitle}
                >
                  <span>{index + 1}</span>
                  <h4>{question.question}</h4>
                  <i className={`icon-arrow-down`}></i>
                </button>
                <div className={style.accordionContent}>
                  <p dangerouslySetInnerHTML={{ __html: question.answer }}></p>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
