import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-b-gray-300 border-dashed mx-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        {/* <span className="text-lg font-bold">{title}</span> */}
        <div dangerouslySetInnerHTML={{ __html: title }}></div>
        <ChevronDown
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-700 transition-all duration-300">
          <div className='text-gray-500 custom-ul' dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      )}
    </div>
  );
};

export default Accordion