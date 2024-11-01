import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col, CookieModal, Button } from "~components";

import * as style from "./Footer.module.scss";

interface Props {}

export const Footer = ({}: Props) => {
  const navigation = [
    { title: "Products", link: "/products" },
    { title: "Recipes", link: "/recipes" },
    { title: "About", link: "/about" },
    { title: "Sustainability", link: "/sustainability" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <footer className={style.footer}>
      <Container className={style.extra}>
        <Row>
          <Col md={6}>
            <figure>
              <img
                src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/FC_SEPT19_SHOT_05_0346_R_web-1.png"
                alt=""
              />
            </figure>
          </Col>
          <Col md={6}>
            <h3>Want to become a reseller?</h3>
            <p>Get in touch and we will tell you more about us.</p>
            <Link to="mailto:info@ambryfoods.com" className={style.linkHolder}>
              <Button reversed={true}>info@ambryfoods.com</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={style.footerBottom}>
          <Col lg={4} className={style.logo}>
            <Link to="/">
              <img
                src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/Ambry-logo.png"
                alt=""
              />
            </Link>
          </Col>
          <Col lg={4} className={style.socialMedia}>
            <ul>
              <li>
                <a href="https://www.instagram.com/ambry_foods/" target="_blank">
                  <i className="icon-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <div className={style.contact}>
              <address>
                Hall Farm, Black Horse Road
                <br /> Skeyton, NR10 5DJ
              </address>
              <a href="mailto:info@ambryfoods.com" className={style.linkAnimation}>
                info@ambryfoods.com
              </a>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <CookieModal />
    </footer>
  );
};
