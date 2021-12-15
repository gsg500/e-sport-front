import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import Arrow from "./Arrow";
import "../assets/styles/carousel.css"

export default function Carousel() {
  const [loaded, setLoaded] = useState(false);

  const [refCallback, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 3,
        spacing: 15,
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <>
      <div ref={refCallback} className="keen-slider">
        <div className="keen-slider__slide carouselItem">
          <i className="fas fa-volleyball-ball fa-3x"></i>
          <p>Volei</p>
        </div>
        <div className="keen-slider__slide carouselItem">
          <i className="fas fa-futbol fa-3x"></i>
          <p>Futbol</p>
        </div>
        <div className="keen-slider__slide carouselItem">
          <i className="fas fa-basketball-ball fa-3x"></i>
          <p>Basquete</p>
        </div>
        <div className="keen-slider__slide carouselItem">
          <i className="fas fa-baseball-ball fa-3x"></i>
          <p>Beisebol</p>
        </div>
        <div className="keen-slider__slide carouselItem">
          <i className="fas fa-futbol fa-3x"></i>
          <p>Handebol</p>
        </div>
        <div className="keen-slider__slide carouselItem">
          <i className="fas fa-bowling-ball fa-3x"></i>
          <p>Boliche</p>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              right
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
    </>
  );
}
