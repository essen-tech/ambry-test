import React, { CSSProperties } from "react";
import { isKeyValuesEqual, isNextObjectTrue, isNextObjectFalse } from "~libs/utils";
import * as styles from "./styles.module.scss";

export interface AnimatedHeightProps {
  visible?: boolean;
  msDuration?: number;
  children?: any;
  className?: string;
  onHidden?: () => void;
  maxHeight?: string;
}

export interface AnimatedHeightStates {
  shouldRender?: boolean;
  mounted?: boolean;
}

const DEFAULT_DURATION_MS = 400;

export class AnimatedHeight extends React.Component<
  AnimatedHeightProps,
  AnimatedHeightStates
> {
  state = {
    shouldRender: this.props.visible,
    animate: false,
    mounted: false,
  };
  timeout: NodeJS.Timeout;

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !isKeyValuesEqual(
        ["visible", "children", "msDuration", "onHidden", "maxHeight", "className"],
        this.props,
        nextProps
      ) || !isKeyValuesEqual(["shouldRender", "mounted"], this.state, nextState)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { msDuration: duration, onHidden } = this.props;
    const { mounted, shouldRender } = this.state;

    this.timeout && clearTimeout(this.timeout);

    // If we just changed from visible to not being visible
    if (isNextObjectFalse("visible", prevProps, this.props)) {
      this.timeout = setTimeout(() => {
        this.setState({ shouldRender: false, mounted: false }, onHidden);
      }, duration || DEFAULT_DURATION_MS);
    }

    const newState: AnimatedHeightStates = {};

    // If we just changed from not visible to visible
    if (isNextObjectTrue("visible", prevProps, this.props) && !shouldRender) {
      newState.shouldRender = true;
    }

    // If we just changed from not shouldRender to shouldRender
    if (isNextObjectTrue("shouldRender", prevState, this.state) && !mounted) {
      setTimeout(() => this.setState({ mounted: true }), 1);
    }

    if (Object.keys(newState).length) {
      this.setState(newState);
    }
  }

  componentDidMount() {
    const { visible } = this.props;

    if (visible) {
      setTimeout(() => this.setState({ mounted: true }), 1);
    }
  }

  render() {
    const { className, msDuration, children, visible, maxHeight } = this.props;
    const { shouldRender, mounted } = this.state;

    const classes = [styles.base];
    const divStyles: CSSProperties = {
      transitionDuration: `${msDuration || DEFAULT_DURATION_MS}ms`,
    };

    if (mounted && visible) {
      classes.push(styles.show);
      if (maxHeight) {
        divStyles.maxHeight = maxHeight;
      }
    }
    if (className) {
      classes.push(className);
    }

    return shouldRender ? (
      <div className={classes.join(" ")} style={divStyles}>
        {children}
      </div>
    ) : null;
  }
}
