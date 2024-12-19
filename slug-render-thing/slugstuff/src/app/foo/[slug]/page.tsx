"use client";

import { useRouter } from "next/router";

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Shrek slug page {slug}</h1>
      <p>Dynamic rendering með slug.</p>
    </div>
  );
}
