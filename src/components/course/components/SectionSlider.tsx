import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '@/dataType';

interface SectionSliderProps {
  sectionArray: Section[];
  onSelectSection: (type: string) => void;
}

const SectionSlider = ({ sectionArray, onSelectSection }: SectionSliderProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-[95%] md:w-full mx-auto px-6 mb-4">
      {/* Custom navigation buttons OUTSIDE the swiper */}
      <button
        ref={prevRef}
        className="absolute -left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-600 p-1 rounded-full shadow hover:bg-gray-400"
      >
        <ChevronLeft size={15} color="#fff" />
      </button>
      <button
        ref={nextRef}
        className="absolute -right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-600 p-1 rounded-full shadow hover:bg-gray-400"
      >
        <ChevronRight size={15} color="#fff" />
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-expect-error
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {sectionArray.map((section, index) => (
          <SwiperSlide
            key={section.order_idx}
            style={{ width: "auto" }}
            onClick={() => {
              setActiveIndex(index);
              onSelectSection(section.type);
            }}
            className={`text-nowrap text-center hover:text-green-600 cursor-pointer border-b border-gray-300 px-3 ${
              activeIndex === index
                ? "text-green-800 font-bold border-b-2 border-green-800"
                : ""
            }`}
          >
            <div>{section.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionSlider