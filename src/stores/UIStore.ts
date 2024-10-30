import { observable, action } from "mobx";
import { onAnimationFrame } from "~libs/utils";
import { screenBreakpoints, TScreenKeys } from "~libs/constants";

export class UIStore {
  @observable
  breakpoint: TScreenKeys = "xl";

  @observable
  windowWidth: number = 0;

  @observable
  windowHeight: number = 0;

  @observable
  windowPageYOffset: number = 0;

  @observable
  windowPageXOffset: number = 0;

  onMount = () => {
    window.addEventListener("resize", this.onResize);
    this.onResize();

    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  };

  onUnmount = () => {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  };

  @action
  onResize = () => {
    onAnimationFrame(() => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;

      this.breakpoint = Object.keys(screenBreakpoints).find((key: TScreenKeys) => {
        return screenBreakpoints[key] >= this.windowWidth;
      }) as TScreenKeys;
    });
  };

  @action
  onScroll = () => {
    onAnimationFrame(() => {
      this.windowPageYOffset = window.pageYOffset;
      this.windowPageXOffset = window.pageXOffset;
    });
  };
}
