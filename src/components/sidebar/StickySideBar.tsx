import { Checklist, CtaText, Medium } from '@/dataType'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Carousal from './components/Carousal';
import AllCheckList from './components/AllCheckList';

interface StickySidebarProps {
  ctaText: CtaText;
  checkList: Checklist[];
}

const StickySideBar = ({ ctaText, checkList}: StickySidebarProps) => {   
     
  return (
    <div
        className={`sticky top-[50px] ml-auto w-[390px] min-h-[300px] bg-white flex flex-col`}
      >
        <div className="w-full h-full border border-gray-300 p-4 flex flex-col gap-4 text-black  ">
          <div className="text-3xl font-bold">৳ 3850</div>
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
}

export default StickySideBar