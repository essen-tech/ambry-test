import React from "react";

import { Container, Row, Col, VideoElement } from "~components";
import { IVideo } from "~models";

import * as style from "./Video.module.scss";

interface Props {
  section: IVideo;
}

export const Video = ({ section }: Props) => {
  const { backgroundImage, videoFile } = section;

  return (
    <section data-sectionname="Video">
      <Container fluid={true}>
        <Row>
          <Col>
            <div className={style.videoHolder}>
              <VideoElement
                poster={backgroundImage}
                url={videoFile.mediaItemUrl}
                buttonColor={"light-salmon"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
