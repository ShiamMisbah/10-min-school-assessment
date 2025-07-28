import { Checklist, CtaText, Medium } from '@/dataType'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Carousal from './components/Carousal';
import AllCheckList from './components/AllCheckList';

interface SidebarProps {
  ctaText: CtaText;
  checkList: Checklist[];
  mediaArray: Medium[];
  isOutOfView: boolean;
}

const SideBar = forwardRef<HTMLDivElement, SidebarProps>(({ ctaText, checkList, mediaArray, isOutOfView }, ref) => {   
     
  return (
    <div
      ref={ref}
      className={`relative mt-5 md:absolute md:top-[50px] right-0 w-[95%] mx-auto md:max-w-[50%] lg:max-w-[350px] min-h-[300px] bg-white flex flex-col`}
    >
      <div className="w-full h-full border border-gray-300 p-4 flex flex-col gap-4 text-black  ">
        <Carousal mediaArray={mediaArray} />
        <div className="text-3xl font-bold">৳ 1000</div>
        <button className="w-full bg-green-700 hover:bg-green-900 text-xl py-2 shadow-green-900 rounded-md text-white ">
          {ctaText.name}
        </button>
        <AllCheckList checkList={checkList} />
      </div>
      <div className="flex text-xs justify-between text-gray-400 mt-5">
        <div>কোর্সটি সম্পর্কে বিস্তারিত জানতে</div>
        <div>ফোন করুন (16910)</div>
      </div>
    </div>
  );
})

SideBar.displayName = 'SideBar'; // ✅ important for forwardRef

export default SideBar