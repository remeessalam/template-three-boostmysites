import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/assets/images/client-logos/1.png",
  "/assets/images/client-logos/2.png",
  "/assets/images/client-logos/3.png",
  "/assets/images/client-logos/4.png",
  "/assets/images/client-logos/5.png",
  "/assets/images/client-logos/6.png",
  "/assets/images/client-logos/7.png",
  "/assets/images/client-logos/8.png",
  "/assets/images/client-logos/9.png",
  "/assets/images/client-logos/10.png",
];

const animation = { duration: 10000, easing: (t) => t };

const JoinHappyCustomers = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="pt-5">
      <div className="px-4 mb-4">
        <h2 className="fw-bold text-white text-center">
          Join Our <span className="primary">100+</span> Happy Clients
        </h2>
      </div>
      <div ref={sliderRef} className="keen-slider mt-9 bg-white">
        {images.map((img, index) => (
          <div
            key={index}
            className="keen-slider__slide d-flex align-items-center px-3"
          >
            <img
              width="200"
              height="100"
              loading="lazy"
              src={img}
              alt="logo"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinHappyCustomers;
