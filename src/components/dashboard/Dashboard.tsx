"use client"
import useGetAllData from '@/hooks/useGetAllData';
import React, { useEffect, useRef, useState } from 'react'
import TitleCard from './TitleCard';
import SideBar from '../sidebar/SideBar';
import CourseDetails from '../course/CourseDetails';
import { Stick } from 'next/font/google';
import StickySideBar from '../sidebar/StickySideBar';

type Props = {}

const Dashboard = (props: Props) => {
  const { data, loading, error } = useGetAllData();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isOutOfView, setIsOutOfView] = useState(false);

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

  if (loading) return <div className="max-w-[1200px] mx-auto">Loading...</div>;
  if (error)
    return <div className="max-w-[1200px] mx-auto">Error: {error}</div>;
  if (!data) return <div className="max-w-[1200px] mx-auto">No data found</div>;
  return (
    <div className="">
      <div className="w-full bg-gray-900 min-h-[300px] absolute"></div>
      <div className="relative max-w-[1200px] mx-auto">
        <TitleCard title={data.title} description={data.description} />
        <div className="flex items-start">
          <div className="max-w-[65%] mt-5">
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