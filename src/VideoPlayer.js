import React, { useState, useRef } from "react";
import { FaPlay, FaSpinner } from "react-icons/fa";
import "./VideoPlayer.css";

export default function VideoPlayer({ src, className }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    }
  };

  const handleWaiting = () => {
    setIsLoading(true);
  };

  const handlePlaying = () => {
    setIsLoading(false);
  };

  if (!isPlaying) {
    return (
      <div className={`video-placeholder ${className || ""}`} onClick={handlePlayClick}>
        <div className="play-button-overlay">
          <FaPlay className="play-icon" />
        </div>
        <div className="placeholder-content">
          <span>Click to watch project demo</span>
      </div>
      </div>
    );
  }

  return (
    <div className={`video-container ${className || ""}`}>
      {isLoading && (
        <div className="video-loading-overlay">
          <FaSpinner className="spinner-icon animate-spin" />
          <span>Buffering...</span>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        className="active-video"
      />
    </div>
  );
}

