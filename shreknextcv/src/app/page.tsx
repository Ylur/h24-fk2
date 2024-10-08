import React from "react";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import PhotoUpload from "../app/components/PhotoUpload";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold">About Shrek</h2>
          <p>Welcome to Shreks CV. A green ogre with a big heart.</p>
        </section>
        <PhotoUpload />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
