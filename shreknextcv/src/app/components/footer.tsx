import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white p-4 mt-8">
      <p>© {new Date().getFullYear()} Shreks CV. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
