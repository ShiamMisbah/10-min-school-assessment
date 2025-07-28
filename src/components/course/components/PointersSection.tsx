import { SingleSectionProps } from '@/dataType';
import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react'

interface PointersValueProps {
  icon: string;
  id: string;
  color: string;
  text: string;
}

const PointersSection = ({data}: SingleSectionProps) => {
    const [sectionData, setSectionData] = useState<PointersValueProps[]>([]);
    useEffect(() => {
      if (data) {
        setSectionData(data.values);
      }
    }, [data]); // ✅ only runs when `data` changes
  
    if (!data) return <div className=""></div>;
    return (
      <>
        <div className="text-xl font-bold mb-4">{data.name}</div>
        <div
          className={`w-full border border-gray-400 rounded-md p-4 mb-4 ${
            data.bg_color !== "" ? `bg-[${data.bg_color}]` : ""
          }`}
        >
          <div className={`grid grid-cols-2`}>
            {sectionData.map((item, index) => (
              <div
                className="flex gap-2 items-start max-w-[300px]"
                key={index}
              >
                <div className="">
                  <Check color="#6294F8" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-md text-black mb-4">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default PointersSection