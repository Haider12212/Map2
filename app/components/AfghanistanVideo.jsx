import React, { useState, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoAfg = ({setPlayVideo}) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  useEffect(() => {
    if(isVideoOpen){
    const videoElement = videoRef.current;

    // Initialize Video.js player
    const vjsPlayer = videojs(videoElement, {
      autoplay: true,
      loop: true,
      muted: true,
      controls: true,
      options: {
        fluid: true,
      },
      fluid: false,
      liveUi:true,
      playbackRates: [0.5, 1, 1.25, 1.5, 2],
      sources: [
        {
          src: "/videos/AfghanistanVideo.mp4",
          type: "video/mp4",
        },
      ],

    });

    setPlayer(vjsPlayer);
    vjsPlayer.src({
      src: "/videos/AfghanistanVideo.mp4",
      type: "video/mp4",
    });

    // Cleanup on unmount
    return () => {
      if (player) {
        player.dispose(); // Dispose of the player to clean up resources
      }
    };
  }}, [isVideoOpen]);

  useEffect(() => {
    // Check if the player is ready and video element exists
    if (player && videoRef.current) {
      // Play the video
      player.play();

      // Request fullscreen for the video element
    }
  }, [player]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      // Check if the Escape key is pressed (key code 27)
      if (event.keyCode === 27) {
        // Pause the video
        setPlayVideo(false);
        player.dispose();
        setIsVideoOpen(false);


        // Exit fullscreen
        // if (document.exitFullscreen) {
        //   document.exitFullscreen();
        // } else if (document.mozCancelFullScreen) {
        //   document.mozCancelFullScreen();
        // } else if (document.webkitExitFullscreen) {
        //   document.webkitExitFullscreen();
        // } else if (document.msExitFullscreen) {
        //   document.msExitFullscreen();
        // }
      }
      
    };

    // Add event listener for the "keydown" event on the document
    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [player]);
  

  return (
    <div>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoAfg;
