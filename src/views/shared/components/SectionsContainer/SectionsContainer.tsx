import React, { Component } from "react";
import * as s from "./SectionsContainer.module.scss";
import { inject, observer } from "mobx-react";
import { SectionsContainerStore } from "~stores";
import { withStore } from "~libs/mobx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  template?: "page_builder";
  sectionsContainerStore?: SectionsContainerStore;
}

@inject("sectionsContainerStore")
@observer
export class SectionsContainer extends Component<Props> {
  render() {
    const { template, sectionsContainerStore, children } = this.props;

    const { hasOpenOverlay } = sectionsContainerStore;

    let classes = [s.sectionsContainer];

    switch (template) {
      case "page_builder":
        classes.push(s.pageTemplate);
        break;
    }

    if (hasOpenOverlay) classes.push("hasOpenOverlay");

    return <div className={classes.join(" ")}>{children}</div>;
  }
}

export default withStore(SectionsContainer);
