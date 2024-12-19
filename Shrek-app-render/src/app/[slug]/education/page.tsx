"use client";

import React, { useState } from "react";

export default function EducationPage() {
  const [education, setEducation] = useState<string>("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-500"
        rows={4}
        placeholder="Describe your education..."
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
    </div>
  );
}
