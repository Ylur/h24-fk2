"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
