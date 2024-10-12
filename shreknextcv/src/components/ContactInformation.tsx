"use client"

import React, { useState } from "react";

const ContactInformation: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <section className="mb-8">
      <h1 title="Contact Information" />
      <div className="mb-4">
        <label className="block font-semibold">Email:</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Phone:</label>
        <input
          type="tel"
          className="w-full p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Location:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </section>
  );
};

export default ContactInformation;