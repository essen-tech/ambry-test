import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { IImage, ILink } from "~models";

import * as s from "./styles.module.scss";

export interface CardProps {
  title?: string;
  description?: string;
  image?: IImage;
  bottomText?: string;
  link?: ILink;
}

export class Card extends Component<CardProps> {
  render() {
    const { title, description, image, bottomText, link } = this.props;
    return (
      <figure className={s.card}>
        <div className={s.imageHolder}>
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.caption || ""}
            className={s.image}
          />
        </div>
        <figcaption className={s.content}>
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
          {bottomText ? <small>{bottomText}</small> : null}
          {link?.url ? (
            <>
              <Link to={link.url}></Link>
              <i className="icon-arrow-right"></i>
            </>
          ) : null}
        </figcaption>
      </figure>
    );
  }
}
