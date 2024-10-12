import React from "react";
import SectionHeader from "../src/components/SectionHeader";
import Footer from "../src/components/footer";
import PhotoUpload from "../src/components/PhotoUpload";
import AboutSection from "../src/components/AboutSection";
import ContactInformation from "../src/components/ContactInformation";
import SkillsSection from "../src/components/SkillsSection";
import WorkExperienceSection from "../src/components/WorkExperienceSection";
import EducationSection from "../src/components/EducationSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-left">
      <SectionHeader title="Bonjour">
      </SectionHeader>
      

      <main className="flex-grow p-8">
        <PhotoUpload />
        <div className="bg-orange-500">
        <ContactInformation />
        </div>

        <div className="bg-orange-500">
        <SkillsSection />
        </div>

        <div className="bg-orange-500"> 
        <WorkExperienceSection />
        </div>

        <div className="bg-orange-500">
        <EducationSection />
      </div>

        <div className="bg-orange-500">
        <AboutSection />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;

