"use client"

import React, { useState } from "react";

const ContactInformation: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <section className="mb-2">
      <h1 title="Contact Information " />
      {/* Email*/}
      <div className="mb-4">
        <label className="block font-semibold text-white">Email:</label>
        <input
          type="email"
          placeholder="What is your email..."
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* símanúmer*/}
        <div className="mb-4">
        <label className="block font-semibold text-white">Phone:</label>
        <input
          type="tel"
          placeholder="What is your telephone.."
          className="w-full p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* staðsetning*/}
      <div className="mb-4">
        <label className="block font-semibold text-white">Location:</label>
        <input
          type="text"
          placeholder="Where are you located"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </section>
  );
};

export default ContactInformation;