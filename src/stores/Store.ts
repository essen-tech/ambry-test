import { ContextStore, NavigationStore, SectionsContainerStore, UIStore } from "~stores";
import { Contact } from "~views/shared/sections";
import { ContactFormStore } from "./ContactFormStore";

let store = null;

export class Store {
  uiStore: UIStore;
  contextStore: ContextStore;
  sectionsContainerStore: SectionsContainerStore;
  navigationStore: NavigationStore;
  contactFormStore: ContactFormStore;

  constructor() {
    this.uiStore = new UIStore();
    this.contextStore = new ContextStore();
    this.sectionsContainerStore = new SectionsContainerStore(this);
    this.navigationStore = new NavigationStore(this);
    this.contactFormStore = new ContactFormStore();
  }

  onMount = () => {
    this.uiStore.onMount();
  };

  onUnmount = () => {
    this.uiStore.onUnmount();
  };
}

export const initStore = () => {
  store = store != null ? store : new Store();
  return store;
};
