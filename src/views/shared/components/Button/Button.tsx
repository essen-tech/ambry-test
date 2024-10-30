import React, { Component } from "react";
import * as styles from "./styles.module.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  styleKey?: string;
  disabled?: boolean;
  big?: boolean;
  reversed?: boolean;
  blockInMobile?: boolean;
  icon?: "icon-arrow-right" | "icon-check" | "icon-cross";
}

export class Button extends Component<ButtonProps> {
  render() {
    const {
      styleKey,
      disabled,
      big,
      reversed,
      icon,
      onClick,
      className,
      blockInMobile,
      ...rest
    } = this.props;
    const classes = [styles.button];
    if (className) {
      classes.push(className);
    }

    if (styleKey) {
      classes.push(styles[styleKey]);
    }

    if (disabled) {
      classes.push(styles.disabled);
    }

    if (reversed) {
      classes.push(styles.reversed);
    }

    if (big) {
      classes.push(styles.bigger);
    }

    if (blockInMobile) {
      classes.push(styles.blockInMobile);
    }

    return (
      <button
        onClick={disabled ? undefined : onClick}
        className={classes.join(" ")}
        {...rest}
      >
        {this.props.children}
        {icon ? <i className={icon}></i> : null}
      </button>
    );
  }
}
