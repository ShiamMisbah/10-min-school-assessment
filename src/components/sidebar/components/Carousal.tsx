// components/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";

const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
];

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Carousel */}
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mb-4"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
        className="cursor-pointer"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Thumb ${idx}`}
              className="w-full h-10 object-cover rounded-md border"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
