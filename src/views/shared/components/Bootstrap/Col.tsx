import React, { Component } from 'react'

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number | string
  sm?: number | string
  md?: number | string
  lg?: number | string
  xl?: number | string
}

export class Col extends Component<ColProps> {
  render() {
    const { className, xs, sm, md, lg, xl, ...rest } = this.props
    const classes = ['col', `col-${xs || 12}`]
    if (sm) {
      classes.push(`col-sm-${sm}`)
    }
    if (md) {
      classes.push(`col-md-${md}`)
    }
    if (lg) {
      classes.push(`col-lg-${lg}`)
    }
    if (xl) {
      classes.push(`col-xl-${xl}`)
    }
    if (className) {
      classes.push(className)
    }

    return <div className={classes.join(' ')} {...rest} />
  }
}
