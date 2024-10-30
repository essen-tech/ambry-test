import React from "react";
import { motion } from "framer-motion";

import { Container, Row, Col, VideoElement } from "~components";
import { IRecipe } from "~models";

import * as style from "./Recipe.module.scss";

interface Props {
  section: IRecipe;
}

export const Recipe = ({ section }: Props) => {
  const {
    description,
    ingredientLists,
    ingredientListsTitle,
    instructions,
    instructionsTitle,
    notes,
    recipeVideo,
    servings,
    time,
  } = section;

  return (
    <section data-sectionname="Recipe" className={style.recipe}>
      <Container>
        <Row className={style.generalInformation}>
          <Col md={7} lg={5} xl={4} className={`offset-xl-2 offset-lg-1`}>
            {description && (
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                dangerouslySetInnerHTML={{ __html: description }}
              ></motion.h3>
            )}
          </Col>
          <Col md={4} lg={3} className={`${"offset-md-1"} ${style.properties}`}>
            {time && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
              >
                <p>Time</p>
                <h3>{time}</h3>
              </motion.div>
            )}
            {servings && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
              >
                <p>Servings</p>
                <h3>{servings}</h3>
              </motion.div>
            )}
          </Col>
        </Row>
      </Container>
      {recipeVideo && (
        <Container fluid={true}>
          <Row>
            <Col>
              <div className={style.videoHolder}>
                <VideoElement
                  poster={recipeVideo.backgroundImage}
                  url={recipeVideo.videoFile.mediaItemUrl}
                  buttonColor={"light-salmon"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <Container>
        <Row className={style.content}>
          <Col md={6} lg={5} className={`${"offset-lg-1"} ${style.ingredients}`}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              {ingredientListsTitle.title}
              {ingredientListsTitle.titleNote && (
                <small>{ingredientListsTitle.titleNote}</small>
              )}
            </motion.h2>
            {ingredientLists &&
              ingredientLists.map((ingredientListItem, index) => (
                <div key={index} className={style.ingredientList}>
                  {ingredientListItem.listTitle && (
                    <h4>{ingredientListItem.listTitle}:</h4>
                  )}
                  {ingredientListItem.list && (
                    <ul>
                      {ingredientListItem.list.map((ingredient, ingredientIndex) => (
                        <li
                          key={ingredientIndex}
                          dangerouslySetInnerHTML={{ __html: ingredient.ingredient }}
                        ></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            {notes &&
              notes.map((note, index) => (
                <blockquote key={index}>
                  <h3 dangerouslySetInnerHTML={{ __html: note.note }}></h3>
                </blockquote>
              ))}
          </Col>
          <Col md={6} lg={5} xl={4} className={`offset-xl-1`}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { y: "60px", opacity: 0 },
                visible: { y: "0", opacity: 1 },
              }}
            >
              {instructionsTitle.title}
            </motion.h2>
            {instructions && (
              <ul className={style.instructionList}>
                {instructions.map((instruction, index) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { y: "60px", opacity: 0 },
                      visible: { y: "0", opacity: 1 },
                    }}
                    key={index}
                  >
                    <small>{index + 1}</small>
                    <p dangerouslySetInnerHTML={{ __html: instruction.instruction }}></p>
                  </motion.li>
                ))}
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
