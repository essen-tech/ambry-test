import React from "react";

import { Col, Row, Container, Button } from "~views/shared/components";
import { StaticQuery, graphql, Link } from "gatsby";
import { ISettings } from "~models";
import { withStore } from "~libs/mobx";
import { Header } from "~views/layouts";

import * as s from "./404.module.scss";

interface Props {
  settings?: ISettings;
}
class NotFoundPageComponent extends React.Component<Props> {
  render() {
    return (
      <>
        <Header />
        <section data-sectionname="404">
          <Container>
            <Row>
              <Col md="10" className={"offset-md-1"}>
                <div className={s.notFound}>
                  {/* <div className={s.notFound} onMouseMove={this._onMouseMove.bind(this)} ref={this.setHolderElement}> */}
                  <div className={s.notFoundContent}>
                    <h1>404</h1>
                    <h3>Something is wrong</h3>
                    <p>
                      Fermentum cursus risus scelerisque convallis eu faucibus mollis.
                      Imperdiet purus faucibus adipiscing vitae massa
                    </p>
                    <Link to={"/"}>
                      <Button icon="icon-arrow-right" reversed={true} big={true}>
                        Go Back
                      </Button>
                    </Link>
                  </div>
                  {Array.apply(null, { length: 7 }).map((element, index) => (
                    <i
                      key={index}
                      // ref={ref => (this.squareList[index] = ref)}
                      // style={{ transform: 'translateX(24px)'}}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

const NotFoundPage = (props: ISettings) => (
  <StaticQuery
    query={query}
    render={(data) => <NotFoundPageComponent {...props} settings={data.siteSettings} />}
  />
);

const query = graphql`
  query {
    ...siteSettingsFragment
  }
`;

export default withStore(NotFoundPage);
