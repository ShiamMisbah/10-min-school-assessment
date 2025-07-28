import VideoComponent from '@/components/VideoComponent';
import { SingleSectionProps } from '@/dataType';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface FeaturesExplanationValueProps {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string
}

const FeaturesExplanationSection = ({data}: SingleSectionProps) => {
  const [sectionData, setSectionData] = useState<FeaturesExplanationValueProps[]>([]);
  useEffect(() => {
    if (data) {
      setSectionData(data.values);
    }
  }, [data]); // ✅ only runs when `data` changes

  if (!data) return <div className=""></div>;
  return (
    <>
      <div className="text-xl font-bold mb-4">{data.name}</div>
      <div className="w-full border border-gray-400 rounded-md p-4 mb-4">
        {sectionData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row justify-between ${
              index < sectionData.length - 1 ? "border-b border-b-gray-300" : ""
            } p-4`}
          >
            <div className="flex flex-col">
              <div className="mb-4">{item.title}</div>
              <ul>
                {item.checklist.map((list, index) => (
                  <li key={index}>
                    <div className="flex gap-4">
                      <Check color="#6294F8" />
                      <div className="text-md mb-4">{list}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mx-auto'>
              {item.file_type === "video" ? (
                <VideoComponent thumbnail_url={item.video_thumbnail} alt={item.title} video_url={item.file_url} />
              ) : (
                <Image
                  src={item.file_url}
                  alt={item.title}
                  width={220}
                  height={220}
                  className="object-cover rounded-md"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturesExplanationSection