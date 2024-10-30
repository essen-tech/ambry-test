import React, { Component } from "react";
import { Container } from "~components";
import * as styles from "./TemplateSection.module.scss";

export interface TemplateSectionProps {}

export class TemplateSection extends Component<TemplateSectionProps> {
  render() {
    return (
      <section>
        <Container />
      </section>
    );
  }
}
