import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "~components";
import { Icons } from "~libs/assets";

import * as style from "./Header.module.scss";

interface Props {}

export const Header = ({}: Props) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const openSidebar = () => {
    document.body.style.overflow = "hidden";
    setSidebar(true);
  };

  const closeSidebar = () => {
    document.body.style.overflow = "unset";
    setSidebar(false);
  };

  const listenToScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if (scrollUp) {
        setScrollUp(false);
      }
    } else {
      if (!scrollUp) {
        setScrollUp(true);
      }
    }
    setLastScrollTop(st <= 0 ? 0 : st);
  };

  const navigation = [
    { title: "Start", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Recipes", link: "/recipes" },
    { title: "About", link: "/about" },
    { title: "Sustainability", link: "/sustainability" },
    { title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`${style.header} ${
        lastScrollTop !== 0 && !scrollUp ? style.hideHeader : ""
      }`}
    >
      <div className={style.headerHolder}>
        <Container>
          <Row>
            <Col>
              <nav className={style.navigation}>
                <ul className={style.linkList}>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/recipes">Recipes</Link>
                  </li>
                </ul>
                <div className={style.logo}>
                  <Link to="/">
                    <img src={Icons.ambry_farms_logo} alt="Ambry Farms" />
                    <i className="icon-ambry-farms-logo"></i>
                  </Link>
                </div>
                <ul className={style.linkList}>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/sustainability">Sustainability</Link>
                  </li>
                </ul>
                <div className={style.hamburger} onClick={openSidebar}>
                  <img src={Icons.menu} />
                </div>
              </nav>
              <div className={`${style.sidebar} ${sidebar ? style.sidebarActive : ""}`}>
                <Container>
                  <Row>
                    <Col>
                      <div className={style.sidebarContentHolder}>
                        <div className={style.sidebarHeader}>
                          <img src={Icons.ambry_farms_logo_reversed} alt="Ambry Farms" />
                          <i className="icon-cross" onClick={closeSidebar}></i>
                        </div>
                        <div className={style.sidebarContent}>
                          <ul>
                            {navigation.map((item, index) => (
                              <li key={index}>
                                <Link to={item.link} onClick={closeSidebar}>
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={style.sidebarFooter}>
                          <address>
                            18 Dufferin Street <br />
                            London EC1Y 8NA
                          </address>
                          <a href="mailto:eathappy@ambryfarms.com">
                            eathappy@ambryfarms.com
                          </a>{" "}
                          <br />
                          <a href="tel:+4402074328022">+44 (0)20 7432 8022 </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};
