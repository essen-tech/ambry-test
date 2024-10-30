import { observable, toJS } from "mobx";
import { Store } from "./Store";
import { disableBodyScrollAndTranslate, isBrowser, resetBodyScroll } from "~libs/utils";
import { globalHistory, navigate } from "@reach/router";
import { ILocation } from "~models";

export class NavigationStore {
  rootStore: Store;

  constructor(rootStore: Store) {
    this.rootStore = rootStore;
  }

  @observable
  location: ILocation = {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    key: "",
    origin: "",
    pathname: "",
    port: "",
    protocol: "",
    search: "",
    state: null,
  };

  initNavigationStore = (location: ILocation) => {
    Object.keys(location).forEach((key) => {
      if (this.location.hasOwnProperty(key)) this.location[key] = location[key];
    });
  };
}
