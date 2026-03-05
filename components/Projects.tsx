"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import { projects } from "@/data/projects";
import { monthlyData } from "@/data/skills";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "rgba(13,13,31,0.5)" }}
    >
      {/* Bg particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full animate-particle"
            style={{
              background: "rgba(255,255,255,0.2)",
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
              animationDuration: `${3 + i * 0.4}s`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// FEATURED WORKS</p>
          <h2
            className="section-title animate-shimmer"
            style={{
              background: "linear-gradient(135deg,#fff,#a5b4fc,#fff)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mt-3 text-lg">
            Real-world AI &amp; full-stack projects built with passion
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              {/* Animated glow border */}
              <div
                className="absolute -inset-0.5 rounded-[22px] animate-shimmer"
                style={{
                  background: `linear-gradient(45deg, ${p.color}, ${p.color}88, ${p.color})`,
                  backgroundSize: "200% 200%",
                  filter: "blur(6px)",
                  opacity: hovered === i ? 0.7 : 0.25,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                }}
              />

              {/* Card */}
              <div
                className="relative rounded-[20px] h-full flex flex-col overflow-hidden border border-white/8 transition-all duration-400"
                style={{
                  background: "rgba(13,13,25,0.92)",
                  backdropFilter: "blur(20px)",
                  transform: hovered === i ? "translateY(-8px)" : "none",
                  boxShadow: hovered === i ? `0 20px 60px ${p.color}22` : "none",
                }}
              >
                {/* Top glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top, ${p.color}22, transparent)`,
                    opacity: hovered === i ? 1 : 0.3,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Top bar */}
                <div
                  className="h-0.5 w-full transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                    opacity: hovered === i ? 1 : 0.4,
                  }}
                />

                <div className="p-7 flex flex-col flex-1 relative z-10">
                  {/* Icon + badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="text-4xl p-2.5 rounded-xl animate-float"
                      style={{
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}30`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    >
                      {p.icon}
                    </div>
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-white/6"
                      style={{ color: "var(--muted)", background: "rgba(255,255,255,0.04)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{
                      background: `linear-gradient(135deg, #fff, ${p.color})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          background: `${p.color}12`,
                          color: p.color,
                          border: `1px solid ${p.color}28`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold transition-all"
                        style={{
                          background: `${p.color}18`,
                          color: p.color,
                          border: `1px solid ${p.color}35`,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = `${p.color}30`)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = `${p.color}18`)
                        }
                      >
                        Live Demo ↗
                      </a>
                    ) : (
                      <div
                        className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          color: "var(--muted)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        Coming Soon
                      </div>
                    )}
                    <button
                      className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border"
                      style={{
                        background: "transparent",
                        color: "var(--muted)",
                        borderColor: "var(--border)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--muted)";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-4 md:p-8">
            <h3 className="font-bold text-lg mb-6">Project Growth</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={monthlyData} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ffff" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00ffff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--muted)" tick={{ fill: "var(--muted)", fontSize: 10 }} />
                <YAxis stroke="var(--muted)" tick={{ fill: "var(--muted)", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 12, color: "var(--text)" }} />
                <Area type="monotone" dataKey="projects" stroke="#00ffff" strokeWidth={3} fill="url(#areaGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-4 md:p-8">
            <h3 className="font-bold text-lg mb-6">Commit Activity</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--muted)" tick={{ fill: "var(--muted)", fontSize: 10 }} />
                <YAxis stroke="var(--muted)" tick={{ fill: "var(--muted)", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 12, color: "var(--text)" }} />
                <Bar dataKey="commits" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
