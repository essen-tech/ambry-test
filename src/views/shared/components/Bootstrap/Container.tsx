import React, { Component } from "react";
import { Div, DivProps } from "../Div";
import * as styles from "./styles.module.scss";

export interface ContainerProps extends DivProps {
  centered?: boolean;
  fluid?: boolean;
}

export class Container extends Component<ContainerProps> {
  render() {
    const { className, centered, fluid, ...rest } = this.props;
    const classes = [fluid ? "container-fluid" : "container"];

    if (className) {
      classes.push(className);
    }
    if (centered) {
      classes.push(styles.centered);
    }
    return <Div className={classes.join(" ")} {...rest} />;
  }
}
