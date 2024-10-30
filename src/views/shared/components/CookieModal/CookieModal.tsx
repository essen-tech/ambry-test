import React, { Component } from "react";

import { Button } from "~components/Button";
import { Container, Row, Col } from "~views/shared/components";
import { Link } from "gatsby";
import * as style from "./styles.module.scss";

export class CookieModal extends Component<any> {
  keyName = "ambry_farms_cookie_accepted";

  state = {
    showModal: false,
    accepted: false,
  };

  acceptCookies = () => {
    window.localStorage.setItem(this.keyName, "true");
    this.setState({
      accepted: true,
    });
  };

  rejectCookies = () => {
    this.setState({
      showModal: false,
      accepted: false,
    });
  };

  componentDidMount() {
    if (window.localStorage) {
      let cookieStatus = window.localStorage.getItem(this.keyName);
      JSON.parse(cookieStatus)
        ? this.setState({
            showModal: false,
            accepted: true,
          })
        : this.setState({
            showModal: true,
            accepted: false,
          });
    }
  }

  render() {
    return !this.state.accepted && this.state.showModal ? (
      <div className={style.cookieModal}>
        <Container>
          <Row>
            <Col>
              <div className={style.cookieModalInner}>
                <div>
                  <h3>This website uses cookies</h3>
                  <p>
                    Fermentum cursus risus scelerisque convallis eu faucibus mollis.
                    Imperdiet purus faucibus adipiscing vitae massa feugiat vitae. Non
                    vitae id tellus pharetra. Laoreet rhoncus, amet et a morbi cursus
                    vehicula tristique eget. Varius nunc egestas tincidunt dolo
                  </p>
                  <Link to="/privacy-policy">
                    See our Privacy Policy <i className="icon-arrow-right"></i>
                  </Link>
                </div>
                <aside>
                  <Button
                    reversed={true}
                    icon={"icon-cross"}
                    onClick={this.rejectCookies}
                  >
                    Reject Cookies
                  </Button>
                  <Button
                    reversed={true}
                    icon={"icon-check"}
                    onClick={this.acceptCookies}
                  >
                    Accept Cookies
                  </Button>
                </aside>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ) : null;
  }
}
