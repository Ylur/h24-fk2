"use client";

import Link from "next/link";

export default function ZipPage() {
  return (
    <div>
      <h1>Þetta er /foo/bar/zip</h1>
      <p>Þú komst hingað með slug navigation.</p>
      <Link href="/">Er hræddur, I wanna go back to home</Link>
    </div>
  );
}
