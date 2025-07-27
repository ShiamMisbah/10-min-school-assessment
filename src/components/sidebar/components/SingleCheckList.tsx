import { Checklist } from '@/dataType'
import React from 'react'

interface SingleCheckListProps {
    data: Checklist
}

const SingleCheckList = ({data}: SingleCheckListProps) => {
    console.log(data);
    
  return (
    <div className='flex my-4 items-center gap-5'>
        <img className='w-6' src={data.icon} />
        <div className='text-sm'>{data.text}</div>
    </div>
  )
}

export default SingleCheckList