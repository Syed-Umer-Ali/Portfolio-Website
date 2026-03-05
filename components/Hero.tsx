"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const ROLES = [
  "AI Agent Developer",
  "Automation Engineer",
  "React / Next.js Dev",
  "MCP Server Builder",
  "RAG Systems Expert",
];

export function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTyped(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1600);
      } else if (deleting && charIdx > 0) {
        setTyped(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % ROLES.length);
      }
    }, deleting ? 55 : 95);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="grid-bg min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16"
    >


      {/* Orbs */}
      <div className="orb w-[300px] h-[300px] md:w-[600px] md:h-[600px] -top-20 -right-20 md:-top-52 md:-right-52"
        style={{
          background: "rgba(124,58,237,0.15)",
          filter: "blur(clamp(40px, 10vw, 80px))"
        }} />
      <div className="orb w-[200px] h-[200px] md:w-[400px] md:h-[400px] -bottom-20 -left-20 md:-bottom-32 md:-left-32"
        style={{
          background: "rgba(0,255,255,0.1)",
          animationDelay: "-4s",
          filter: "blur(clamp(30px, 8vw, 60px))"
        }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-neutral-400">
              Available for Freelance
            </span>
          </div>

          <h1 className="hero-title mb-4">
            Building the<br />Future with AI
          </h1>

          {/* Typewriter */}
          <div className="text-2xl font-semibold mb-6 min-h-[2.2rem]">
            <span style={{ color: "var(--accent)" }}>{typed}</span>
            <span className="cursor-dot" />
          </div>

          <p className="text-neutral-400 leading-relaxed text-lg mb-10 max-w-xl">
            Certified Agentic AI Developer &amp; Automation Engineer.
            Specializing in{" "}
            <span className="text-white font-semibold">MCP Servers</span>,{" "}
            <span className="text-white font-semibold">RAG Systems</span>, and
            multi-framework AI agents built with{" "}
            <span className="text-white font-semibold">OpenAI</span>,{" "}
            <span className="text-white font-semibold">Claude</span> &amp;{" "}
            <span className="text-white font-semibold">Google ADK</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <button className="btn-outline flex items-center gap-2">
              Download CV <Download size={16} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {[
              ["4+", "Projects"],
              ["3", "AI SDKs"],
              ["6+", "Certifications"],
            ].map(([n, l]) => (
              <div key={l}>
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
            ))}
          </div>
        </motion.div>

        {/* Right: Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8 animate-float">
            <pre
              className="font-mono text-sm leading-8"
              style={{ color: "var(--text)" }}
            >
              <span className="text-neutral-500">{"// AI Developer Profile\n"}</span>
              <span className="text-purple-400">const </span>
              <span className="text-white">developer </span>
              <span className="text-purple-400">= </span>
              {"{\n"}
              {"  "}
              <span className="text-purple-400">name</span>
              {": "}
              <span style={{ color: "var(--accent)" }}>"Umer Ali"</span>
              {",\n  "}
              <span className="text-purple-400">skills</span>
              {": "}
              <span style={{ color: "var(--accent)" }}>
                ["AI Agents","MCP Servers","RAG","Automation"]
              </span>
              {",\n  "}
              <span className="text-purple-400">frameworks</span>
              {": "}
              <span style={{ color: "var(--accent)" }}>
                ["OpenAI Agents SDK","Claude ADK","Google ADK"]
              </span>
              {",\n  "}
              <span className="text-purple-400">certified</span>
              {": "}
              <span className="text-emerald-400">true</span>
              {",\n  "}
              <span className="text-purple-400">status</span>
              {": "}
              <span style={{ color: "var(--accent)" }}>"Open for hire"</span>
              {",\n}"}
            </pre>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e]" />
              <span className="text-emerald-400 text-xs font-medium">
                Open to freelance work
              </span>
            </div>
          </div>

          {/* Floating badges */}
          {[
            { label: "🤖 OpenAI SDK", style: { top: -24, right: -24 } },
            { label: "⚡ Claude ADK", style: { bottom: 20, left: -34 } },
            { label: "🔗 MCP Server", style: { top: "45%", right: -44 } },
          ].map(({ label, style }) => (
            <div
              key={label}
              className="absolute px-4 py-2 rounded-full text-xs font-semibold border border-white/10 backdrop-blur-md animate-float"
              style={{
                ...style,
                background: "var(--surface2)",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Grid dots overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 60%, var(--bg) 100%)",
        }}
      />
    </section>
  );
}
