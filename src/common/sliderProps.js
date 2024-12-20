import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  
  tickerSlider: {
    spaceBetween: 30,
		centeredSlides: true,
		speed: 12000,
		autoplay: {
			delay: 0,
		},
		loop: true,
		slidesPerView: 'auto',
		allowTouchMove: false,
  },
  testimonialSlider: {
    slidesPerView: 1,
    effect: 'fade',
    loop: false,
    autoplay: false,
    spaceBetween: 50,
    pagination: false,
    navigation: {
      nextEl: '.js-reviews-carousel-next',
      prevEl: '.js-reviews-carousel-prev',
    }
  },
  
};
