import React from "react";
import { motion } from "framer-motion";

import { Container, Row, Col, Card } from "~components";
import { ICardsRow } from "~models";

import * as style from "./CardsRow.module.scss";

interface Props {
  section: ICardsRow;
}

export const CardsRow = ({ section }: Props) => {
  const { title, cards } = section;

  return (
    <section data-sectionname="CardsRow" className={style.cardsRow}>
      <Container>
        <Row>
          <Col>{title && <h1 className={style.title}>{title}</h1>}</Col>
        </Row>
        <Row>
          {cards.map((item, index) => (
            <Col xl={3} lg={4} md={6} key={index}>
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 4) * 0.2 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
              >
                <Card
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  bottomText={item?.bottomText}
                  link={item?.link}
                />
              </motion.figure>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
