import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white p-4 text-center mt-8">
      <p className="text-sm">&copy; {new Date().getFullYear()} Shrek&apos;s CV. All rights reserved.</p>
    </footer>
  );
};

export default Footer;