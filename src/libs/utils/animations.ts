export type TypeRequestAnimationFrame = (FrameRequestCallback) => number;

export const getRequestAnimationFrame: () => TypeRequestAnimationFrame = () => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    }
  );
};

export const onAnimationFrame = (func: FrameRequestCallback) => {
  return getRequestAnimationFrame()(func);
};
