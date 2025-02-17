"use client"

import React, { useState } from "react";

const WorkExperienceSection: React.FC = () => {
  const [experience, setExperience] = useState<string>("");

  return (
    <section className="mb-8">
      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-500"
        rows={6}
        placeholder="Describe your work experience..."
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
    </section>
  );
};

export default WorkExperienceSection;