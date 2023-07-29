// ScreenSaver.js
'use client'
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const ScreenSaver = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    // Initialize video.js when the component mounts
    const player = videojs(videoRef.current, {
      autoplay: true,
      loop: true,
      muted: true,
      controls: false, // Disable the default controls (optional)
      fluid: true, // Make the video player responsive (optional)
    });

    // Add the video source
    player.src({ src: "/videos/ScreenSaver.mp4" , type: 'video/mp4' });

    // Cleanup video.js when the component unmounts
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div className="screen-saver">
      <video ref={videoRef} className="video video-js" />
    </div>
  );
};

export default ScreenSaver;
