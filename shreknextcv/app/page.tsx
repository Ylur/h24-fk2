import React from "react";
import SectionHeader from "../src/components/SectionHeader";
import Footer from "../src/components/SectionFooter";
import PhotoUpload from "../src/components/PhotoUpload";
import AboutSection from "../src/components/AboutSection";
import ContactInformation from "../src/components/ContactInformation";
import SkillsSection from "../src/components/SkillsSection";
import WorkExperienceSection from "../src/components/WorkExperienceSection";
import EducationSection from "../src/components/EducationSection";

const Home: React.FC = () => {
  return (
    // Mynda functionið
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
      <SectionHeader title="" />
        <PhotoUpload />
        
        <br></br>
        <br></br>

        {/* contact info*/}
        <div className="text-left bg-orange-500 border rounded ">
          <SectionHeader title="Contact Information" />
          <ContactInformation />
        </div>
        <br></br>
        <br></br>
        {/* Skillz */}
        <div className="text-left bg-orange-500 border rounded ">
          <SectionHeader title="Skills" />
          <SkillsSection />
        </div>

        <br></br>
        <br></br>

        {/* Reynsla*/}
        <div className="bg-orange-500 border rounded "> 
          <SectionHeader title="Work Experience" />
          <WorkExperienceSection />
        </div>

        <br></br>
        <br></br>

          {/* Menntun */}
        <div className="bg-orange-500 border rounded ">
          <SectionHeader title="Education" />
          <EducationSection />
        </div>

        <br></br>
        <br></br>

        {/* Um þig - já svona opnaðu þig*/}
        <div className="bg-orange-500 border rounded ">
          <SectionHeader title="About Me" />
          <AboutSection />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
