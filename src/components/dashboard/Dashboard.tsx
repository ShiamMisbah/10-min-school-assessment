"use client"
import useGetAllData from '@/hooks/useGetAllData';
import React, { useEffect, useRef, useState } from 'react'
import TitleCard from './TitleCard';
import SideBar from '../sidebar/SideBar';
import CourseDetails from '../course/CourseDetails';
import StickySideBar from '../sidebar/StickySideBar';

const Dashboard = () => {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const { data, loading, error } = useGetAllData(language);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isOutOfView, setIsOutOfView] = useState(false);

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;
      const rect = sidebarRef.current.getBoundingClientRect();
      const isBelowViewport = rect.bottom < 0;

      if (isBelowViewport) {
        // console.log("Sidebar is OUT of view (bottom above viewport)");
        setIsOutOfView(true);
        // 👇 Call your function here
      } else {
        setIsOutOfView(false);
        // console.log("Sidebar is still in view");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <div className="max-w-[1200px] mx-auto my-5">Loading...</div>;
  if (error)
    return <div className="max-w-[1200px] mx-auto">Error: {error}</div>;
  if (!data) return <div className="max-w-[1200px] mx-auto my-5">No data found</div>;
  return (
    <div className="">
      <div className="w-full bg-gray-900 min-h-[300px] absolute">
        <button onClick={handleLanguage} className='z-40 absolute top-0 left-0 m-2 p-2 text-xs bg-white rounded-md cursor-pointer hover:bg-gray-400'>{language}</button>
      </div>
      <div className="relative max-w-[1200px] mx-auto">
        <TitleCard title={data.title} description={data.description} />
        <div className="flex flex-col-reverse items-start">
          <div className="max-w-full md:max-w-[50%] lg:max-w-[65%] mt-5">
            <CourseDetails sectionArray={data.sections} />
          </div>
          <SideBar
            ref={sidebarRef}
            mediaArray={data.media}
            ctaText={data?.cta_text}
            checkList={data?.checklist}
            isOutOfView={isOutOfView}
          />
          {isOutOfView && (
            <StickySideBar
              ctaText={data?.cta_text}
              checkList={data?.checklist}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard