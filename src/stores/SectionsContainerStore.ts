import { observable } from "mobx";
import { Store } from "./Store";
import { resetBodyScroll, disableBodyScrollAndTranslate } from "~libs/utils";

export class SectionsContainerStore {
  rootStore: Store;

  constructor(rootStore: Store) {
    this.rootStore = rootStore;
  }

  @observable
  offsetEnabled: boolean = false;

  @observable
  sectionsContainerYOffset: number = 0;

  @observable
  hasOpenOverlay: boolean = false;

  setScrollPos = () => {
    const tempCurrentYPos = typeof window !== "undefined" && window.pageYOffset;
    disableBodyScrollAndTranslate(0, tempCurrentYPos, 0);
    this.offsetEnabled = true;
    this.hasOpenOverlay = true;
    this.sectionsContainerYOffset = tempCurrentYPos;
  };

  resetScrollPos = () => {
    this.offsetEnabled = false;
    this.hasOpenOverlay = false;
    resetBodyScroll();
    if (typeof window !== "undefined" && window) {
      window.scrollTo(0, this.sectionsContainerYOffset);
    }
    this.sectionsContainerYOffset = 0;
  };
}
