// title prop sett inn fyrir sections á homepage
import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <header className="bg-orange-500 text-white p-4 text-center mt-8">
      <h2 className="text-2xl font-bold">{title}</h2>
    </header>
  );
};

export default SectionHeader;
