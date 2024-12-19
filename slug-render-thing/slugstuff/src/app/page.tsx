"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Shrek's World</h1>
            <p>Navigate to explore:</p>
            <ul>
                <li><Link href="/foo/shrek">Dynamic Slug foo</Link></li>
                <li><Link href="/foo/bar/zip">Chained Navigation shrek foo</Link></li>
            </ul>
        </div>
    );
}
