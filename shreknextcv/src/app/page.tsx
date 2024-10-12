import React from "react";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import PhotoUpload from "../app/components/PhotoUpload";
import AboutSection from "../app/components/AboutSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <AboutSection />
        <PhotoUpload />
      </main>
      <Footer />
    </div>
  );
};

export default Home;