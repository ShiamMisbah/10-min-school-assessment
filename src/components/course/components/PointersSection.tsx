import { SingleSectionProps } from '@/dataType';
import React from 'react'

type Props = {}

const PointersSection = ({data}: SingleSectionProps) => {
  console.log("PointersSection Data:", data);

  if (!data) return <div className=""></div>;
  return (
    <>
      <div className="text-xl font-bold mb-4">{data.name}</div>
      <div className="w-full border border-gray-400 rounded-md p-4 mb-4">
        {data.name}
      </div>
    </>
  );
}

export default PointersSection