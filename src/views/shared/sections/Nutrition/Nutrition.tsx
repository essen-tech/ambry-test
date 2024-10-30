import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col } from "~components";
import { INutrition } from "~models";

import * as style from "./Nutrition.module.scss";

interface Props {
  section: INutrition;
}

export const Nutrition = ({ section }: Props) => {
  const { description, image, ingredients, nutritionTable, tags } = section;
  return (
    <section data-sectionname="Nutrition" className={style.nutrition}>
      <Container>
        <Row>
          <Col xl={10} className={`${style.title} offset-xl-1`}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              Nutritional
            </motion.h1>
          </Col>
        </Row>
        <Row>
          <Col xl={4} lg={6} className={`${style.content} offset-xl-1`}>
            {tags && <p dangerouslySetInnerHTML={{ __html: tags }}></p>}
            {ingredients ? (
              <>
                <strong>Ingredients</strong>
                <p dangerouslySetInnerHTML={{ __html: ingredients }}></p>
              </>
            ) : null}
            {description ? <p>{description}</p> : null}
            <div className={style.image}>
              <GatsbyImage
                image={image?.localFile.childImageSharp.gatsbyImageData}
                alt={image?.caption || ""}
              />
            </div>
          </Col>
          <Col xl={5} lg={5} className={`${style.tableHolder} offset-lg-1`}>
            <motion.table
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              <tbody>
                <tr>
                  {nutritionTable?.headerRow.map((item, index) => (
                    <th key={index}>{item.columnName}</th>
                  ))}
                </tr>
                {nutritionTable?.rows.map((item, index) => (
                  <tr key={index}>
                    <td key={"1" + index}>{item.nutritionName}</td>
                    <td key={"2" + index}>{item.amount}</td>
                    <td key={"3" + index}>{item.dailyValue}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
            {nutritionTable?.bottomText && <small>{nutritionTable.bottomText}</small>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
