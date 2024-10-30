import React, { Component } from "react";
import * as styles from "./styles.module.scss";

export interface AnimatedBounceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  delayMS?: number;
  delayInterval?: number;
}

const DEFAULT_DELAY = 500;
const DEFAULT_DELAY_INTERVAL = 50;

export class AnimatedBounce extends Component<AnimatedBounceProps> {
  renderChild(child: any, index: number, classes: string[]) {
    const { visible, className, style, delayMS, delayInterval, children, ...rest } =
      this.props;

    const mstyle = style || {};
    const delay = delayMS || DEFAULT_DELAY;
    const interval = delayInterval || DEFAULT_DELAY_INTERVAL;
    mstyle.transitionDelay = `${delay + interval * index}ms`;

    return (
      <div key={index.toString()} className={classes.join(" ")} style={mstyle} {...rest}>
        {child}
      </div>
    );
  }

  render() {
    const { visible, className, children } = this.props;

    const classes = [styles.base];
    if (visible) {
      classes.push(styles.visible);
    }
    if (className) {
      classes.push(className);
    }

    if (Array.isArray(children)) {
      return children.map((child, index) => this.renderChild(child, index, [...classes]));
    }

    return this.renderChild(children, 0, classes);
  }
}
