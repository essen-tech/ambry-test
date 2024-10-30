import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { IImage, ILink } from "~models";

import * as styles from "./styles.module.scss";

interface Props extends React.HTMLProps<HTMLDivElement> {
  image: IImage;
  title: string;
  description: string;
  bottomText: string;
  link: ILink;
  rightAligned?: boolean;
  isLastItem?: boolean;
}

export const RecipeListItem = ({ ...props }: Props) => {
  const {
    image,
    title,
    description,
    bottomText,
    link,
    className,
    rightAligned,
    isLastItem,
    ...rest
  } = props;
  const classes = [
    rightAligned ? styles.alignRight : null,
    isLastItem ? styles.lastItem : null,
  ];
  if (className) {
    classes.push(className);
  }

  return (
    <figure className={`${classes.join(" ")} ${styles.figure}`} {...rest}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { y: "60px", opacity: 0 },
          visible: { y: "0", opacity: 1 },
        }}
      >
        <Link to={link?.url}>
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image?.caption || ""}
            className={styles.image}
          />
        </Link>
      </motion.div>
      <motion.figcaption
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { y: "60px", opacity: 0 },
          visible: { y: "0", opacity: 1 },
        }}
      >
        <Link to={link?.url}>
          <h2>{title}</h2>
          <p>{description}</p>
          <small>{bottomText}</small>
          <i className="icon-arrow-right" />
        </Link>
      </motion.figcaption>
    </figure>
  );
};
