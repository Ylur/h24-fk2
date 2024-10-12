"use client"
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const EducationSection: React.FC = () => {
  const [education, setEducation] = useState<string>("");

  return (
    <section className="mb-8">
      <SectionHeader title="Education" />
      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-500"
        rows={4}
        placeholder="Describe your education..."
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
    </section>
  );
};

export default EducationSection;