"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/about/education" className="text-blue-500 hover:underline">
            Education
          </Link>
        </li>
        <li>
          <Link href="/about/skills" className="text-blue-500 hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/about/work-experience" className="text-blue-500 hover:underline">
            Work Experience
          </Link>
        </li>
      </ul>
    </div>
  );
}
