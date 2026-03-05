import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Developer Portfolio | Agentic AI & Automation Engineer",
  description: "Certified Agentic AI Developer & Automation Engineer. Specializing in MCP Servers, RAG Systems, and multi-framework AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body style={{ overflowX: "hidden" }}>{children}</body>
    </html>
  );
}