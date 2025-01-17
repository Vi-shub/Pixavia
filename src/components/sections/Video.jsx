import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // For navigation
import Data from "@data/sections/video.json";
import { circleText } from "@common/utilits";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const router = useRouter();

  useEffect(() => {
    circleText();

    const handleRouteChange = (url) => {
      if (isVideoPlaying && url !== router.asPath) {
        router.push("/"); // Redirect to the homepage
      }
    };

    const handlePopState = () => {
      if (isVideoPlaying) {
        router.push("/"); // Redirect to the homepage
      }
    };

    // Add route change listener for Next.js navigation
    router.events.on("routeChangeStart", handleRouteChange);

    // Add popstate listener for browser back button
    window.addEventListener("popstate", handlePopState);

    return () => {
      // Cleanup listeners on unmount
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isVideoPlaying, router]);

  const clickedVideoButton = (e) => {
    e.preventDefault();
    setIsVideoPlaying(true); // Start the video
  };

  return (
    <>
      {/* Onovo Video */}
      <section className="onovo-section gap-bottom-100">
        <div className="container">
          {/* Video */}
          <div
            className={`onovo-video ${isVideoPlaying ? "active" : ""}`}
            data-onovo-overlay
            data-onovo-scroll
          >
            {!isVideoPlaying && (
              <div
                className="image"
                onClick={(e) => clickedVideoButton(e)}
                style={{
                  backgroundImage: `url(${Data.bg_image})`,
                }}
              />
            )}
            {isVideoPlaying && (
              <iframe
                className="js-video-iframe"
                src={`https://www.youtube.com/embed/${Data.yt_video_id}?showinfo=0&rel=0&autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
            <div
              className="play onovo-circle-text"
              onClick={(e) => clickedVideoButton(e)}
            >
              <div className="arrow" />
              <div className="label onovo-text-black onovo-circle-text-label">
                {Data.label}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
