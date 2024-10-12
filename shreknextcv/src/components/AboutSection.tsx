"use client"

import React, { useState } from "react";

const AboutSection: React.FC = () => {
  const [aboutData, setAboutData] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAboutData(e.target.value);
  };

  return (
    <section id="about" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-500"
        rows={4}
        placeholder="Tell us about yourself..."
        value={aboutData}
        onChange={handleInputChange}
      />
    </section>
  );
};

export default AboutSection;