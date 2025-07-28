import { SingleSectionProps } from "@/dataType";
import React, { forwardRef, useEffect, useState } from "react";
import Accordion from "./Accordion";

interface AboutValueProps {
  icon: string;
  id: string;
  description: string;
  title: string;
}

const AboutSection = forwardRef<HTMLDivElement, SingleSectionProps>(
  ({ data }: SingleSectionProps, ref) => {
    const [sectionData, setSectionData] = useState<AboutValueProps[]>([]);
    useEffect(() => {
      if (data) {
        setSectionData(data.values);
      }
    }, [data]); // ✅ only runs when `data` changes

    if (!data) return <div className=""></div>;
    return (
      <div ref={ref}>
        <div ref={ref} className="text-xl font-bold mb-4">{data.name}</div>
        <div
          className={`w-full border border-gray-400 rounded-md p-4 mb-4 ${
            data.bg_color !== "" ? `bg-[${data.bg_color}]` : ""
          }`}
        >
          {sectionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.description}
              arrayLength={sectionData.length}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
    );
  }
);

AboutSection.displayName = "AboutSection";

export default AboutSection;
