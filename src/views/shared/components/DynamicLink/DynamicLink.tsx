import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export interface DynamicLinkProps {
  port?: number;
  host?: string;
  downloadable?: boolean;
  to: string;
  [x: string]: any;
}

class DLink extends React.Component<DynamicLinkProps> {
  wordpressBaseUrl = () => {
    const { port, host } = this.props;
    let url = `${location.protocol}://${host}`;
    if (port !== null && port !== 80) {
      url += `:${port}`;
    }
    return url;
  };

  render() {
    const { to, downloadable, ...rest } = this.props;

    if (to === null) {
      return <a {...rest} />;
    }

    if (to.startsWith("/wp-content")) {
      return <a href={this.wordpressBaseUrl() + to} target="_blank" {...rest} />;
    }

    if (to.startsWith("/")) {
      return <Link to={to} {...rest} />;
    }

    return <a href={to} target="_blank" {...rest} />;
  }
}

// HOTIFX: Can't run gatsby build as "port" and "host" cannot be queried for some reason

// const query = graphql`
//   query {
//     site {
//       port
//       host
//     }
//   }
// `;

// export const DynamicLink = ({ to, ...rest }: DynamicLinkProps) => (
//   <StaticQuery
//     query={query}
//     render={(data) => {
//       return <DLink {...data.site} {...rest} />;
//     }}
//   />
// );
