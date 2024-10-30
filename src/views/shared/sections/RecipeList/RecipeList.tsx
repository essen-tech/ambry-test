import React from "react";

import { Container, Row, Col, RecipeListItem } from "~components";
import { IRecipeList } from "~models";

import * as style from "./RecipeList.module.scss";

interface Props {
  section: IRecipeList;
}

export const RecipeList = ({ section }: Props) => {
  const { backgroundColor, sectionTitle, textsWithImage } = section;
  return (
    <section data-sectionname="RecipeList" style={{ backgroundColor }}>
      <Container className={style.section}>
        <Row>
          <Col>
            <h1 className={style.title}>{sectionTitle}</h1>
          </Col>
        </Row>
        {textsWithImage.map((e, index) => (
          <Row key={index}>
            <Col lg={9} className={`${index % 2 !== 0 ? "offset-lg-2" : "offset-lg-1"}`}>
              <div>
                <RecipeListItem
                  key={index}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                  link={e.link}
                  bottomText={e.bottomText}
                  rightAligned={index % 2 !== 0}
                  isLastItem={index + 1 === textsWithImage.length}
                ></RecipeListItem>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};
