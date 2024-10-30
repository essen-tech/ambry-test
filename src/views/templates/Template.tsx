import React, { Component } from "react";
import { ISections } from "~models";
import { Sections } from "~views/Sections";
import { SectionsContainer } from "~views/shared/components";

export interface TemplateProps {
  template: string;
  sections: ISections;
}

export class Template extends Component<TemplateProps> {
  render() {
    const { template, sections } = this.props;
    switch (template) {
      case "page_builder":
        return (
          <SectionsContainer template="page_builder">
            <Sections sections={sections} />
          </SectionsContainer>
        );
      default:
        return null;
    }
  }
}
