import { Section, SingleSectionProps } from '@/dataType'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface InstructionValueProps {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

const InstructorSection = ({data}: SingleSectionProps) => {
  console.log("InstructionSection Data:", data);
  const [sectionData, setSectionData] = useState<InstructionValueProps[]>([]);
  useEffect(() => {
    if (data) {
      setSectionData(data.values);
    }
  }, [data]); // ✅ only runs when `data` changes

  if (!data) return <div className=""></div>;
  return (
    <>
      <div className="text-xl font-bold mb-2">{data.name}</div>
      <div className={`w-full border border-gray-400 rounded-md p-4 mb-4 ${data.bg_color !== "" ? `bg-[${data.bg_color}]` : ''}`}>
        <div className={`grid ${sectionData.length > 1 ? 'grid-cols-2 gap-4' : 'grid-cols-1'} `}>
          {sectionData.map((item, index) => (
            <div className="flex gap-5 items-center" key={index}>
              <div className="w-[73px] h-[73px]  relative">
                <Image
                  src={item.image}
                  alt={item.image}
                  width={73}
                  height={73}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className='text-lg'>{item.name}</div>
                <div
                  className='text-sm'
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InstructorSection