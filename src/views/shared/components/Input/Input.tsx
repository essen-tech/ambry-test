import React, { Component, ChangeEvent, InputHTMLAttributes } from "react";
import { FormatterProps } from "~libs/formatters";
import { Icons } from "~libs/assets";
import * as styles from "./styles.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type:
    | "text"
    | "textarea"
    | "url"
    | "email"
    | "tel"
    | "radio"
    | "select"
    | "password"
    | "number"
    | "checkbox";
  label: string;
  value?: string;
  values?: string[]; // radio, select
  placeholder?: string;
  formatter?: FormatterProps;
  onChange?: (string) => void;
  onEnter?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  focus?: boolean;
  blur?: boolean;
  error?: string;
}

export class Input extends Component<InputProps> {
  inputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();

  selectionStart?: number;
  selectionEnd?: number;

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.init();
  }

  init = () => {
    const { blur, focus } = this.props;
    let current = this.getCurrentInput();

    if (current && (blur || focus)) {
      setTimeout(() => {
        blur && current && current.blur();
        focus && current && current.focus();
      }, 10);
    }

    if (current && !isNaN(this.selectionStart) && !isNaN(this.selectionEnd)) {
      this.preserveSelection(current as HTMLInputElement);
    }
  };

  preserveSelection = (input: HTMLInputElement) => {
    const type = this.props.type || "text";
    if (type === "text") {
      input.setSelectionRange(this.selectionStart, this.selectionEnd);
    }
    this.selectionStart = null;
    this.selectionEnd = null;
  };

  onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.format(e.target.value));
    }
  };

  onPreserveSelectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    const value = this.format(e.target.value);
    const diff = value.length - e.target.value.length;

    this.selectionStart = e.target.selectionStart + diff;
    this.selectionEnd = e.target.selectionEnd + diff;

    onChange && onChange(value);
  };

  format = (value: string) => {
    const { formatter, type } = this.props;

    if (type === "number" && !isNaN(parseInt(value, 10))) {
      const min = this.props.min as number;
      const max = this.props.max as number;

      const v = parseInt(value, 10);
      if (!isNaN(min) && v < min) {
        value = min.toString();
      } else if (!isNaN(max) && v > max) {
        value = max.toString();
      }
    }
    if (formatter) {
      return formatter(value) as string;
    }

    return value;
  };

  getCurrentInput = () => {
    if (this.inputRef.current) {
      return this.inputRef.current;
    } else if (this.selectRef.current) {
      return this.selectRef.current;
    }
  };

  focus = () => {
    const current = this.getCurrentInput();
    current && current.focus();
  };

  blur = () => {
    const current = this.getCurrentInput();
    current && current.blur();
  };

  onKeyPress = (e: React.KeyboardEvent) => {
    const { onEnter } = this.props;
    switch (e.key) {
      case "Enter":
        onEnter && onEnter();
        break;
    }
  };

  renderSelect = () => {
    const { value, values, placeholder, onFocus, onBlur } = this.props;

    const options = values.map((val) => (
      <option key={val} value={val}>
        {val}
      </option>
    ));

    return (
      <div className={styles.select_wrapper}>
        <select
          ref={this.selectRef}
          value={value}
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <option value="" disabled>
            {placeholder || "Välj"}
          </option>
          {options}
        </select>
        <img src={Icons.arrow_down} className={styles.arrow_down} />
      </div>
    );
  };

  renderType = () => {
    const { type, value, values, placeholder, onFocus, onBlur } = this.props;
    switch (type) {
      case "textarea":
        return (
          <textarea
            className={styles.textarea}
            value={value || ""}
            onChange={this.onChange}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        );

      case "radio":
        return (
          <div className={styles.radio_wrapper}>
            {values.map((val) => (
              <label>
                <input
                  type="radio"
                  value={val}
                  checked={value === val}
                  onChange={this.onChange}
                />
                <span>
                  <span className={styles.mark} />
                  {val}
                </span>
              </label>
            ))}
          </div>
        );

      case "select":
        return this.renderSelect();

      default:
        return (
          <input
            ref={this.inputRef}
            className={styles.input}
            value={value || ""}
            onChange={this.onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        );
    }
  };
  render() {
    const { label, error } = this.props;
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        {this.renderType()}
        {!!error && (
          <p className={["error", "input_error", styles.error].join(" ")}>
            <span>{error}</span>
            <img src={Icons.error} />
          </p>
        )}
      </div>
    );
  }
}
