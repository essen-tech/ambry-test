import React, { Component } from "react";
import * as styles from "./styles.module.scss";
import { Icons } from "~libs/assets";

export interface CheckboxProps {
  selected?: boolean;
  onChange?: (boolean) => void;
}

export class Checkbox extends Component<CheckboxProps> {
  onChange = () => {
    const { selected, onChange } = this.props;
    if (onChange) {
      onChange(!selected);
    }
  };

  render() {
    const { selected } = this.props;
    return (
      <label className={styles.wrapper}>
        <input type="checkbox" checked={selected} onChange={this.onChange} />
        <span>
          <img src={Icons.check_mark} />
        </span>
      </label>
    );
  }
}
