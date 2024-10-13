import React from "react";
import SectionHeader from "../src/components/SectionHeader";
import Footer from "../src/components/SectionFooter";
import PhotoUpload from "../src/components/PhotoUpload";
import AboutSection from "../src/components/AboutSection";
import ContactInformation from "../src/components/ContactInformation";
import SkillsSection from "../src/components/SkillsSection";
import WorkExperienceSection from "../src/components/WorkExperienceSection";
import EducationSection from "../src/components/EducationSection";
import PageHeader from "@/components/PageHeader";  // Make sure this path is correct

const Home: React.FC = () => {
  return (
    <>
      {/* Page Header*/}
      <PageHeader />

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow p-8">
         

          <PhotoUpload />

          <br />
          <br />

          {/* Contact Info */}
          <div className="text-left bg-orange-500 border rounded ">
            <SectionHeader title="Contact Information" />
            <ContactInformation />
          </div>

          <br />
          <br />

          {/* Skills */}
          <div className="text-left bg-orange-500 border rounded ">
            <SectionHeader title="Skills" />
            <SkillsSection />
          </div>

          <br />
          <br />

          {/* Work Experience */}
          <div className="bg-orange-500 border rounded ">
            <SectionHeader title="Work Experience" />
            <WorkExperienceSection />
          </div>

          <br />
          <br />

          {/* Education */}
          <div className="bg-orange-500 border rounded ">
            <SectionHeader title="Education" />
            <EducationSection />
          </div>

          <br />
          <br />

          {/* About Me */}
          <div className="bg-orange-500 border rounded ">
            <SectionHeader title="About Me" />
            <AboutSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
