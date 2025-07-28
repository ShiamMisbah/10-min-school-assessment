import { Checklist, CtaText } from '@/dataType'
import React from 'react'
import AllCheckList from './components/AllCheckList';

interface StickySidebarProps {
  ctaText: CtaText;
  checkList: Checklist[];
}

const StickySideBar = ({ ctaText, checkList}: StickySidebarProps) => {   
     
  return (
    <div
      className={`sticky bottom-2 top-auto md:ml-auto w-[100%] md:top-[50px] md:bottom-auto md:max-w-[50%] lg:max-w-[350px] min-h-[300px] bg-[var(--background)] flex flex-col`}
    >
      <div className="w-full h-full border border-gray-300 p-4 flex flex-col gap-4">
        <div className="text-3xl font-bold">
          ৳ 1050
        </div>
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