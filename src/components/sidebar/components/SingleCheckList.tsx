import { Checklist } from '@/dataType'
import Image from 'next/image';
import React from 'react'

interface SingleCheckListProps {
    data: Checklist
}

const SingleCheckList = ({data}: SingleCheckListProps) => {    
  return (
    <div className="flex my-4 items-center gap-5">
      <div className='relative w-5 h-5'>
        <Image fill sizes='20px' src={data.icon} alt="missing-icon" />
      </div>
      <div className="text-sm">{data.text}</div>
    </div>
  );
}

export default SingleCheckList