"use client";
import React from "react";
import { motion } from "framer-motion";

const CERTS = [
  { name: "Agentic AI Developer", issuer: "Certified Body", year: "2024", icon: "🤖", color: "#00ffff", desc: "Specialized certification in building autonomous AI agents using multiple frameworks." },
  { name: "n8n Automation Engineer", issuer: "Automation Institute", year: "2024", icon: "⚙️", color: "#7c3aed", desc: "Professional automation engineering covering CI/CD, RPA, and intelligent workflows." },
  { name: "React Developer", issuer: "Meta / Coursera", year: "2023", icon: "⚛️", color: "#e8ff4d", desc: "Advanced React patterns, performance optimization and production-grade development." },
  { name: "OpenAI API Specialist", issuer: "OpenAI", year: "2024", icon: "🧠", color: "#f97316", desc: "Expert-level GPT models, function calling, fine-tuning and Assistants API." },
  { name: "Next.js Full-Stack", issuer: "Vercel Academy", year: "2023", icon: "▲", color: "#00ffff", desc: "Full-stack development with Next.js App Router, Server Components and deployment." },
  { name: "MCP Servers Expert", issuer: "Anthropic / DeepLearning.AI", year: "2024", icon: "/mcp-logo.svg", color: "#7c3aed", desc: "Building secure, reliable Model Context Protocol servers for production AI agents." },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// CREDENTIALS</p>
          <h2 className="section-title">Certifications</h2>
          <p className="text-neutral-400 max-w-md mx-auto mt-3">
            Verified expertise across AI, automation, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 border transition-all duration-400 group cursor-default overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${c.color}50`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 0 30px ${c.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Subtle bg tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${c.color}08, transparent)` }}
              />

              <div className="flex justify-between items-start mb-4 relative z-10">
                {c.icon.startsWith("/") ? (
                  <img src={c.icon} alt={c.name} className="w-10 h-10 object-contain" />
                ) : (
                  <span className="text-4xl">{c.icon}</span>
                )}
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{ background: `${c.color}15`, color: c.color, borderColor: `${c.color}30` }}
                >
                  {c.year}
                </span>
              </div>

              <h3 className="font-bold text-base mb-1 relative z-10">{c.name}</h3>
              <p className="text-sm font-semibold mb-3 relative z-10" style={{ color: c.color }}>
                {c.issuer}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4 relative z-10">
                {c.desc}
              </p>
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#22c55e]" />
                <span className="text-emerald-400 text-xs font-semibold">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 flex justify-around flex-wrap gap-6"
        >
          {[["6+", "Total Certs", "🏆"], ["3", "AI Frameworks", "🤖"], ["2024", "Latest Cert", "📅"], ["100%", "Pass Rate", "✅"]].map(
            ([n, l, ic]) => (
              <div key={l} className="text-center">
                <div className="text-2xl mb-2">{ic}</div>
                <div
                  className="font-display font-extrabold text-3xl"
                  style={{
                    background: "linear-gradient(135deg,#00ffff,#7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {n}
                </div>
                <div className="text-neutral-500 text-sm mt-1">{l}</div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
