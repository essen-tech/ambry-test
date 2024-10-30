import React, { Component, CSSProperties } from "react";
import * as styles from "./styles.module.scss";

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  square?: boolean;
  background?: string;
}

export class Div extends Component<DivProps> {
  render() {
    const { square, background, style, className, ...rest } = this.props;

    const mstyle: CSSProperties = {
      whiteSpace: "pre-wrap",
      ...(style || {}),
    };

    const classes = [];
    if (square) {
      classes.push(styles.square);
    }

    if (!!background) {
      classes.push(styles.background_image);
      mstyle.backgroundImage = `url(${background})`;
    }

    if (className) {
      classes.push(className);
    }

    return <div {...rest} className={classes.join(" ")} style={mstyle} />;
  }
}
