import { Section } from "@/dataType";
import React, { useRef } from "react";
import InstructorSection from "./components/InstructorSection";
import FeaturesSection from "./components/FeaturesSection";
import PointersSection from "./components/PointersSection";
import AboutSection from "./components/AboutSection";
import FeaturesExplanationSection from "./components/FeaturesExplanationSection";
import SectionSlider from "./components/SectionSlider";

interface CourseDetailsProps {
  sectionArray: Section[];
}

const CourseDetails = ({ sectionArray }: CourseDetailsProps) => {
  const filteredSectionArray: Section[] = sectionArray.filter((section) => {
    return [
      "instructors",
      "features",
      "pointers",
      "about",
      "feature_explanations",
    ].includes(section.type);
  });

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const seperateData = (type: string): Section | undefined => {
    return filteredSectionArray.find((section) => section.type === type);
  };

  const sectionContent: Record<string, React.ReactNode> = {
    instructors: (
      <InstructorSection
        ref={(el) => {
          sectionRefs.current["instructors"] = el;
        }}
        data={seperateData("instructors")}
      />
    ),
    features: (
      <FeaturesSection
        ref={(el) => {
          sectionRefs.current["features"] = el;
        }}
        data={seperateData("features")}
      />
    ),
    pointers: (
      <PointersSection
        ref={(el) => {
          sectionRefs.current["pointers"] = el;
        }}
        data={seperateData("pointers")}
      />
    ),
    about: (
      <AboutSection
        ref={(el) => {
          sectionRefs.current["about"] = el;
        }}
        data={seperateData("about")}
      />
    ),
    feature_explanations: (
      <FeaturesExplanationSection
        ref={(el) => {
          sectionRefs.current["feature_explanations"] = el;
        }}
        data={seperateData("feature_explanations")}
      />
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
};

export default CourseDetails;
