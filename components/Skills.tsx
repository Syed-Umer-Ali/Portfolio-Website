"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { skills, radarData, techStack } from "@/data/skills";

export function Skills() {
  const [animated, setAnimated] = useState(false);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// EXPERTISE</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="text-neutral-400 max-w-lg mx-auto mt-3">
            Mastered cutting-edge AI frameworks and modern development tools
          </p>
        </motion.div>

        {/* Charts grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => setAnimated(true)}
            transition={{ duration: 0.6 }}
            className="glass-card p-5 md:p-9"
          >
            <h3 className="font-bold text-lg mb-8">Proficiency Levels</h3>
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">{s.name}</span>
                  <span className="font-mono text-xs font-bold" style={{ color: s.color }}>
                    {s.level}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: animated ? `${s.level}%` : "0%",
                      background: `linear-gradient(90deg, var(--accent2), ${s.color})`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Radar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-9"
          >
            <h3 className="font-bold text-lg mb-8">Skill Radar</h3>
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(0,255,255,0.1)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "var(--muted)", fontSize: 10, fontFamily: "Space Grotesk" }}
                />
                <Radar
                  dataKey="value"
                  stroke="#00ffff"
                  fill="rgba(0,255,255,0.1)"
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              className="skill-badge"
              style={{ color: t.color, borderColor: `${t.color}40`, background: t.bg }}
            >
              {t.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
