import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailTest – Automated A/B Testing for YouTube Thumbnails",
  description: "Automatically rotate thumbnails, track CTR performance, and pick winners based on statistical significance. Built for YouTubers and content creators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="418dd0d9-2e55-4f55-b67a-4b794395e432"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
