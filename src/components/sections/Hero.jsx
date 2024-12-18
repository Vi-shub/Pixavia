import { useState, useEffect } from "react";

import Data from "@data/sections/hero.json";

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import ScrollOut from 'scroll-out'
import ThreeJsLanding from "./ThreeJsLanding";

const HeroSection = () => {
	useEffect(() => {
		Splitting({ by: 'lines' });
		ScrollOut({targets: '[data-onovo-scroll]', once: true});
	
		const allWrap = document.querySelectorAll(".word");
		allWrap.forEach((item) => {
		  if ( !item.parentNode.classList.contains('span') ) {
			let wrapper = document.createElement('span');
			wrapper.classList.add('span');
			item.parentNode.insertBefore(wrapper, item);
			wrapper.appendChild(item);
		  }
		});
	
		const allOverlays = document.querySelectorAll("[data-onovo-overlay]");
		allOverlays.forEach((item) => {
		  let overlay = document.createElement("div");
		  overlay.classList.add('onovo-overlay');
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
			<section className="onovo-section onovo-hero">
				<div className="image">

					<ThreeJsLanding/>
					
				</div>
				<div className="container align-center">
					<h1 className="gap-top-40 onovo-text-white noselect">
						Hello hello hello
					</h1>
				</div>
			</section>
        </>
    );
};

export default HeroSection;