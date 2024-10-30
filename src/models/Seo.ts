export interface ISeo {
  title: string;
  metaDesc: string;
  canonical: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphType: string;
  opengraphImage: {
    id: string;
    sourceUrl: string;
  };
  opengraphSiteName: string;
  opengraphUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: {
    id: string;
    sourceUrl: string;
  };
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
}
