import { useState, useEffect } from "react";

import Data from "@data/sections/hero.json";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import Particle from "./Particle";

const HeroSection = () => {
  useEffect(() => {
    Splitting({ by: "lines" });
    ScrollOut({ targets: "[data-onovo-scroll]", once: true });

    const allWrap = document.querySelectorAll(".word");
    allWrap.forEach((item) => {
      if (!item.parentNode.classList.contains("span")) {
        let wrapper = document.createElement("span");
        wrapper.classList.add("span");
        item.parentNode.insertBefore(wrapper, item);
        wrapper.appendChild(item);
      }
    });

    const allOverlays = document.querySelectorAll("[data-onovo-overlay]");
    allOverlays.forEach((item) => {
      let overlay = document.createElement("div");
      overlay.classList.add("onovo-overlay");
      item.appendChild(overlay);
    });
  }, []);

  const [mute, setMute] = useState(false);

  const clickedMuteHeroVideo = (e) => {
    e.preventDefault();
    setMute(!mute);
  };

  return (
    <>
      {/* Onovo Hero */}
      <section id="hero" className="onovo-section onovo-hero">
        <Particle />
      </section>
    </>
  );
};

export default HeroSection;
