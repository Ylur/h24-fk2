import React from "react";
import SectionHeader from "../src/components/SectionHeader";
import Footer from "../src/components/SectionFooter";
import PhotoUpload from "../src/components/PhotoUpload";
import AboutSection from "../src/components/AboutSection";
import ContactInformation from "../src/components/ContactInformation";
import SkillsSection from "../src/components/SkillsSection";
import WorkExperienceSection from "../src/components/WorkExperienceSection";
import EducationSection from "../src/components/EducationSection";
import PageHeader from "@/components/PageHeader"; 

const Home: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader />

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow p-8">
          <PhotoUpload />

          {/* Break points, svo þetta sjáist betur á síðunni */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20"></div>

          {/* Contact Info */}
          <div className="text-left bg-orange-500 border rounded p-4">
            <SectionHeader title="Contact Information" />
            <ContactInformation />
          </div>
          
          {/* Break points, svo þetta sjáist betur á síðunni */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20"></div>

          {/* Skills */}
          <div className="text-left bg-orange-500 border rounded p-4">
            <SectionHeader title="Skills" />
            <SkillsSection />
          </div>

          {/* Break points, svo þetta sjáist betur á síðunni */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20"></div>

          {/* Work Experience */}
          <div className="bg-orange-500 border rounded p-4">
            <SectionHeader title="Work Experience" />
            <WorkExperienceSection />
          </div>

          {/* Break points, svo þetta sjáist betur á síðunni */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20"></div>

          {/* Education */}
          <div className="bg-orange-500 border rounded p-4">
            <SectionHeader title="Education" />
            <EducationSection />
          </div>

          {/* Break points, svo þetta sjáist betur á síðunni */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20"></div>

          {/* About Me */}
          <div className="bg-orange-500 border rounded p-4">
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
