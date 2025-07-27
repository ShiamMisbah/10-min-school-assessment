"use client"
import useGetAllData from '@/hooks/useGetAllData';
import React, { useEffect, useState } from 'react'
import TitleCard from './TitleCard';
import SideBar from '../sidebar/SideBar';
import CourseDetails from '../course/CourseDetails';

type Props = {}

const Dashboard = (props: Props) => {
    const { data, loading, error } = useGetAllData();        
    
    if (loading) return <div className="max-w-[1200px] mx-auto">Loading...</div>;
    if (error) return <div className="max-w-[1200px] mx-auto">Error: {error}</div>;
    if (!data) return <div className="max-w-[1200px] mx-auto">No data found</div>;
    return (
      <div className="">
        <div className="w-full bg-gray-900 min-h-[300px] absolute"></div>
        <div className="relative max-w-[1200px] mx-auto">
          <TitleCard title={data.title} description={data.description} />
          <SideBar mediaArray={data.media} ctaText={data?.cta_text} checkList={data?.checklist} />
          <div className="max-w-[65%] mt-5">
            <CourseDetails sectionArray={data.sections} />
          </div>
        </div>
      </div>
    );
}

export default Dashboard