import React from 'react'
import SideBar from '../sidebar/SideBar';

interface titleCardProps {
    title: string;
    description: string;
}

const TitleCard = ({title, description}: titleCardProps) => {
  return (
    <div className="min-h-[300px] max-w-[60%] flex flex-col justify-center gap-2.5">
      <h1 className="text-white text-4xl font-bold">{title}</h1>
      <div
        className="text-gray-400"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

export default TitleCard