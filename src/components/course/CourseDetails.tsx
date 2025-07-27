import { Section } from '@/dataType';
import React from 'react'
import InstructorSection from './components/InstructorSection';
import FeaturesSection from './components/FeaturesSection';
import PointersSection from './components/PointersSection';
import AboutSection from './components/AboutSection';
import FeaturesExplanationSection from './components/FeaturesExplanationSection';

interface CourseDetailsProps {
  sectionArray: Section[];
}

const CourseDetails = ({sectionArray}: CourseDetailsProps) => {
    const filteredSectionArray: Section[] = sectionArray.filter(section => {
        return ['instructors', 'features', 'pointers', 'about', 'feature_explanations'].includes(section.type);
    })
    
    const seperateData = (type: string): Section | undefined => {
      return filteredSectionArray.find((section) => section.type === type);
    };
    
    const sectionContent: Record<string, React.ReactNode> = {
      instructors: <InstructorSection data={seperateData("instructors")} />,
      features: <FeaturesSection data={seperateData("features")} />,
      pointers: <PointersSection data={seperateData("pointers")} />,
      about: <AboutSection data={seperateData("about")} />,
      feature_explanations: (
        <FeaturesExplanationSection
          data={seperateData("feature_explanations")}
        />
      ),
    };

    return (
      <div>
        <div>Course Slider Component</div>
        <div className="w-[95%] mx-auto">
          {filteredSectionArray.map((section: Section) => (
            <div key={section.order_idx}>{sectionContent[section.type]}</div>
          ))}
        </div>
      </div>
    );
}

export default CourseDetails