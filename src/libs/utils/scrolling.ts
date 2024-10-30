export const resetBodyScroll = () => {
  typeof document != "undefined" && document.body.setAttribute("style", "");
};

export const disableBodyScroll = () => {
  typeof document != "undefined" &&
    document.body.setAttribute(
      "style",
      "overflow: hidden; position: fixed; width: 100vw"
    );
};

export const disableBodyScrollAndTranslate = (x = 0, y = 0, z = 0) => {
  if (typeof document != "undefined") {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100vw";
    document.body.style.transform = `translate3d(${x}px, ${-y}px, ${z}px`;
  }
};
