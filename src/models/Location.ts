export interface ILocation {
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  key?: string;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
  state?: { key: string; referrer?: string; rootReferrer?: string };
}
