import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "videojs-contrib-ads";
import "videojs-ima";

import "video.js/dist/video-js.css";

const VideoPlayer = ({ ima, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, props);
    player.ima(ima);

    return () => {
      player.dispose();
    };
  });

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
};

export default VideoPlayer;
