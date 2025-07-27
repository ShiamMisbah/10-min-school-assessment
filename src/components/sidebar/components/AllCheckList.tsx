import { Checklist } from '@/dataType'
import React from 'react'
import SingleCheckList from './SingleCheckList';

interface AllCheckListProps {
    checkList: Checklist[];
}

const AllCheckList = ({checkList} : AllCheckListProps) => {
    console.log(checkList);
    
  return (
    <div>
      {checkList.map((data: Checklist) => (
        <SingleCheckList key={data.id} data={data} />
      ))}
    </div>
  );
}

export default AllCheckList