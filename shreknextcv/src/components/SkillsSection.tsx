"use client"

import React, { useState } from "react";



const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<string>("");

  return (
    <section className="mb-8">
      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-500"
        rows={4}
        placeholder="List your skills..."
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
    </section>
  );
};

export default SkillsSection;