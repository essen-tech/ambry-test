import React, { Component } from "react";
import * as styles from "./styles.module.scss";
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  color: "green" | "yellow";
}

export class Spinner extends Component<SpinnerProps> {
  render() {
    const { color, className, ...rest } = this.props;
    const classes = [styles.spinner, styles[color]];

    if (className) {
      classes.push(className);
    }
    return <div className={classes.join(" ")} {...rest} />;
  }
}
