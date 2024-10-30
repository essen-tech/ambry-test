export interface ISettings {
  generalSettings?: IGeneralSettings;
  seoSettings?: ISeoSettings;
}

export interface IGeneralSettings {
  siteTitle?: string;
  siteDescription?: string;
  siteUrl?: string;
}

export interface ISeoSettings {
  openGraph: {
    defaultImage: {
      id: string;
      sourceUrl: string;
    };
  };
  schema: {
    siteName: string;
    siteUrl: string;
    companyLogo: {
      id: string;
      sourceUrl: string;
    };
  };
}
