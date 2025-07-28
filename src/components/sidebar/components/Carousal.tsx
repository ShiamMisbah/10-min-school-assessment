// components/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRef, useState } from "react";
import { Medium } from "@/dataType";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import VideoComponent from "../../VideoComponent";

interface CarouselProps {
  mediaArray: Medium[];
}

export default function Carousel({mediaArray}: CarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="w-full h-[220px] relative mb-4">
        {/* Main Carousel */}
        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white text-black shadow rounded-full p-1 hover:bg-gray-100"
        >
          <ChevronLeft size={15} />
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white text-black shadow rounded-full p-1 hover:bg-gray-100"
        >
          <ChevronRight size={15} />
        </button>
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full h-full"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          onBeforeInit={(swiper) => {
            // Fix for navigation ref assignment
            // @ts-expect-error
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {mediaArray.map((media, idx) => (
            <SwiperSlide key={idx}>
              {media.resource_type === "image" && (
                <Image
                  src={media.resource_value}
                  alt={media.name}
                  fill
                  className="object-contain rounded-lg"
                />
              )}
              {media.resource_type === "video" && (
                <VideoComponent
                  thumbnail_url={media.thumbnail_url}
                  alt={media.name}
                  video_url={media.resource_value}
                  resetTrigger={activeIndex !== idx}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
        className="cursor-pointer"
      >
        {mediaArray.map((media, idx) => (
          <SwiperSlide
            key={idx}
            className={`relative rounded-md overflow-hidden ${
              idx === activeIndex ? "border-2 border-green-500" : "border"
            }`}
            style={{ width: "56px", height: "32px" }}
          >
            {media.resource_type === "image" && (
              <Image
                src={media.resource_value}
                alt={media.name}
                fill
                className="object-cover"
              />
            )}
            {media.resource_type === "video" && (
              <div>
                <Image
                  src={media.thumbnail_url}
                  alt={media.name}
                  fill
                  className="object-contain"
                />
                <button>
                  <Play
                    size={20}
                    className="absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-black shadow rounded-full p-1 cursor-pointer"
                  />
                </button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
