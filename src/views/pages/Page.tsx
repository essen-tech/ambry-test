import React, { Component } from "react";
import { graphql } from "gatsby";
import { ILocation, ISingleWordpressPage } from "~models";
import { withStore } from "~libs/mobx";
import { Template } from "~views/templates";
import "~libs/graphql";
import { inject } from "mobx-react";
import { ContextStore } from "~stores/ContextStore";
import { Seo } from "~views/shared/components";
import { Footer, Header } from "~views/layouts";
import { NavigationStore } from "~stores";

interface Props {
  pageContext: any;
  location?: ILocation;
  data: {
    wpPage: ISingleWordpressPage;
  };
  contextStore: ContextStore;
  navigationStore?: NavigationStore;
}

@inject("contextStore", "navigationStore")
class PageTemplate extends Component<Props> {
  componentDidMount() {
    const { pageContext, contextStore, navigationStore } = this.props;
    const { initNavigationStore } = navigationStore;
    contextStore.context = pageContext;
    initNavigationStore(location);
  }

  renderTemplate() {
    const { sections } = this.props.data.wpPage.pageFields;

    return <Template template={"page_builder"} sections={sections} />;
  }

  render() {
    const { data, location } = this.props;
    const { wpPage } = data;
    const { title, seo } = wpPage;
    const { origin } = location;
    return (
      <>
        <Seo seo={seo} pageTitle={title} origin={origin} />
        <Header />
        {this.renderTemplate()}
        <Footer />
      </>
    );
  }
}

export default withStore(PageTemplate);

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      ...singleWpPageFragment
    }
  }
`;