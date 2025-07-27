import { Section } from '@/dataType';
import React, { useRef } from 'react'
import InstructorSection from './components/InstructorSection';
import FeaturesSection from './components/FeaturesSection';
import PointersSection from './components/PointersSection';
import AboutSection from './components/AboutSection';
import FeaturesExplanationSection from './components/FeaturesExplanationSection';
import SectionSlider from './components/SectionSlider';

interface CourseDetailsProps {
  sectionArray: Section[];
}

const CourseDetails = ({sectionArray}: CourseDetailsProps) => {
    const filteredSectionArray: Section[] = sectionArray.filter(section => {
        return ['instructors', 'features', 'pointers', 'about', 'feature_explanations'].includes(section.type);
    })

    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});    
    
    const seperateData = (type: string): Section | undefined => {
      return filteredSectionArray.find((section) => section.type === type);
    };
    
    const sectionContent: Record<string, React.ReactNode> = {
      instructors: (
        <div ref={(el) => {sectionRefs.current["instructors"] = el}}>
          <InstructorSection data={seperateData("instructors")} />
        </div>
      ),
      features: (
        <div ref={(el) => {sectionRefs.current["features"] = el}}>
          <FeaturesSection data={seperateData("features")} />
        </div>
      ),
      pointers: (
        <div ref={(el) => {sectionRefs.current["pointers"] = el}}>
          <PointersSection data={seperateData("pointers")} />
        </div>
      ),
      about: (
        <div ref={(el) => {sectionRefs.current["about"] = el}}>
          <AboutSection data={seperateData("about")} />
        </div>
      ),
      feature_explanations: (
        <div ref={(el) => {sectionRefs.current["feature_explanations"] = el}}>
          <FeaturesExplanationSection data={seperateData("feature_explanations")} />
        </div>
      ),
    };

    const scrollToSection = (type: string) => {
      sectionRefs.current[type]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div>
        <SectionSlider
          onSelectSection={scrollToSection}
          sectionArray={filteredSectionArray}
        />
        <div className="w-[95%] mx-auto">
          {filteredSectionArray.map((section: Section) => (
            <div key={section.order_idx}>{sectionContent[section.type]}</div>
          ))}
        </div>
      </div>
    );
}

export default CourseDetails