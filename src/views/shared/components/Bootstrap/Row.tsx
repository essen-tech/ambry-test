import React, { Component } from 'react'

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {}

export class Row extends Component<RowProps> {
  render() {
    const { className, ...rest } = this.props
    const classes = ['row']
    if (className) {
      classes.push(className)
    }
    return <div className={classes.join(' ')} {...rest} />
  }
}
