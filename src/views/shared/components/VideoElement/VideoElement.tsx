import React, { useState, useRef } from "react";

import { IImage } from "~models";

import * as style from "./styles.module.scss";

interface Props {
  url: string;
  poster: IImage;
  buttonColor: "green" | "light-salmon";
}

export const VideoElement = ({ url, poster, buttonColor }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoEl = useRef(null);

  const playVideo = () => {
    videoEl.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoEl.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className={style.videoHolder}>
      <video
        ref={videoEl}
        poster={poster.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
        controls={isPlaying}
        onEnded={() => pauseVideo()}
        onPause={() => pauseVideo()}
      >
        <source src={url} type="video/mp4" />
      </video>
      {isPlaying ? null : (
        <button
          className={`${style.playButton} ${buttonColor === "green" ? style.green : ""}`}
          onClick={() => playVideo()}
        >
          Play
        </button>
      )}
    </div>
  );
};
