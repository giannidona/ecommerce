"use client";

import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";
import Image from "next/image";

const slides = [
  "/carousel-one.jpg",
  "/carousel-two.jpg",
  "/carousel-three.jpg",
  "/carousel-four.jpg",
];

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="embla">
      <div className="embla__viewport my-10" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  className="rounded"
                  src={index}
                  alt="index"
                  width={1920}
                  height={1000}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
