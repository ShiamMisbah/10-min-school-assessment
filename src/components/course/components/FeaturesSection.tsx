import { SingleSectionProps } from "@/dataType";
import React, { forwardRef, useEffect, useState } from "react";

interface FeaturesValueProps {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

const FeaturesSection = forwardRef<HTMLDivElement, SingleSectionProps>(
  ({ data }: SingleSectionProps, ref) => {
    const [sectionData, setSectionData] = useState<FeaturesValueProps[]>([]);
    useEffect(() => {
      if (data) {
        setSectionData(data.values);
      }
    }, [data]); // ✅ only runs when `data` changes

    if (!data) return <div className=""></div>;
    return (
      <div ref={ref}>
        <div ref={ref} className="text-xl font-bold mb-4">
          {data.name}
        </div>
        <div
          className={`w-full border border-gray-400 rounded-md p-4 mb-4 ${
            data.bg_color !== "" ? `bg-[${data.bg_color}]` : "bg-gray-900"
          }`}
        >
          <div className={`grid grid-cols-1 md:grid-cols-2`}>
            {sectionData.map((item, index) => (
              <div
                className="flex gap-2 items-start max-w-[300px] m-2 py-4"
                key={index}
              >
                <div className="">
                  <img
                    src={item.icon}
                    alt={item.icon}
                    className="object-contain w-[36px] aspect-square rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-md text-white mb-2">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default FeaturesSection;
