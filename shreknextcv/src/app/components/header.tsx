// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-green-700 text-white p-4">
      <h1 className="text-3xl font-bold">Shreks CV</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
