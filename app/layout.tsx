import type { Metadata } from "next";
import "./globals.css"; // ← this line pulls in Tailwind

export const metadata: Metadata = {
  title: "HKflix — Harsh Koli",
  description: "Netflix-style AI/NLP portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
