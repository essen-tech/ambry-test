import React from "react";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { IQuote } from "~models";

import * as style from "./Quote.module.scss";

interface Props {
  section: IQuote;
}

export const Quote = ({ section }: Props) => {
  const { backgroundColor } = section;

  return (
    <section
      data-sectionname="Quote"
      className={style.quote}
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <Row>
          <Col>
            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
              className={style.content}
            >
              <h2 className="h1" dangerouslySetInnerHTML={{ __html: section.text }} />
            </motion.blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
