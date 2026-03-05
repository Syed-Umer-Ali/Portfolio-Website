"use client";
import React from "react";
import { motion } from "framer-motion";

const TIMELINE = [
  { year: "2023", title: "Started Web Dev", desc: "Learned HTML, CSS, JavaScript and React from scratch." },
  { year: "2024", title: "Next.js & Full-Stack", desc: "Built full-stack apps with Next.js, databases, and REST APIs." },
  { year: "2025", title: "AI & Agentic Systems", desc: "Mastered OpenAI SDK, Claude ADK, Google ADK, and MCP servers." },
  { year: "2026", title: "Certified & Freelancing", desc: "Certified Agentic AI Developer. Open for freelance projects globally." },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "rgba(13,13,31,0.5)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// WHO I AM</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Profile photo with animated glow */}
            <div className="relative animate-float" style={{ width: 256, height: 310 }}>
              <div
                className="absolute -inset-1 rounded-[30px] animate-shimmer"
                style={{
                  background: "linear-gradient(135deg, #00ffff, #7c3aed, #00ffff)",
                  backgroundSize: "200% auto",
                  filter: "blur(8px)",
                  opacity: 0.6,
                  zIndex: 0,
                }}
              />
              <img
                src="/avatar.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: 26,
                  position: "relative",
                  zIndex: 1,
                  border: "2px solid rgba(0,255,255,0.3)",
                  boxShadow: "0 0 50px rgba(0,255,255,0.15)",
                  display: "block",
                }}
              />
            </div>

            <div className="glass-card p-6 w-full text-center space-y-4">
              {[
                ["Location", "🇵🇰 Pakistan"],
                ["Available", "✦ Open for Work"],
                ["Experience", "3+ Years"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-neutral-500 text-xs mb-1">{label}</p>
                  <p className="font-bold text-sm" style={{ color: label === "Available" ? "#22c55e" : "var(--text)" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I build <span style={{ color: "var(--accent)" }}>AI-powered systems</span> that actually work.
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-4 text-base">
              I'm a certified Agentic AI Developer and Automation Engineer with deep expertise in React, Next.js,
              MCP Servers, and multiple AI frameworks including OpenAI Agents SDK, Claude ADK, and Google ADK.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-10 text-base">
              I've built RAG-powered chatbots, fully automated task systems, e-commerce platforms, and custom
              MCP servers. My goal is to turn complex AI concepts into real, working products that solve business problems.
            </p>

            <h4 className="font-bold text-base mb-6">My Journey</h4>
            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1">
                {TIMELINE.map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }} />
                    {i < TIMELINE.length - 1 && (
                      <div className="w-0.5 flex-1 my-1"
                        style={{ minHeight: 48, background: "linear-gradient(180deg,var(--accent),var(--accent2))" }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-col gap-8 flex-1 pb-2">
                {TIMELINE.map((t, i) => (
                  <motion.div key={t.year} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-bold" style={{ color: "var(--accent)" }}>{t.year}</span>
                      <span className="font-bold text-sm">{t.title}</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-10 flex-wrap">
              <a href="#contact" className="btn-primary">Hire Me ✦</a>
              <button className="btn-outline">Download CV</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}