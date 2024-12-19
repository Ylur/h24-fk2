"use client";

import { useSearchParams } from "next/navigation";

export default function SlugPage() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug"); 

    return (
        <div>
            <h1>Dynamic Page for Shrek Slug: {slug || "Ekkert slug "}</h1>
            <p>This page dynamically renders content based on the slug in the URL.</p>
        </div>
    );
}
