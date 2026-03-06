"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
            <SVGRadar data={radarData} />
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

/* ── Pure-SVG Radar Chart ─────────────────────────────────── */
function SVGRadar({ data }: { data: { skill: string; value: number }[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size / 2 - 38;
  const levels = 5;
  const n = data.length;
  const maxVal = 100;

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;

  // Polygon points for one level
  const levelPoints = (fraction: number) =>
    data
      .map(
        (_, i) =>
          `${cx + maxR * fraction * Math.cos(angle(i))},${cy + maxR * fraction * Math.sin(angle(i))
          }`
      )
      .join(" ");

  // Data-value polygon
  const dataPoints = data.map((d, i) => {
    const r = (d.value / maxVal) * maxR;
    return { x: cx + r * Math.cos(angle(i)), y: cy + r * Math.sin(angle(i)) };
  });
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  // Label positions (a bit outside maxR)
  const labelPos = data.map((d, i) => {
    const r = maxR + 22;
    return {
      x: cx + r * Math.cos(angle(i)),
      y: cy + r * Math.sin(angle(i)),
      label: d.skill,
    };
  });

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block", maxWidth: 320, margin: "0 auto" }}
    >
      {/* Grid rings */}
      {Array.from({ length: levels }, (_, k) => (
        <polygon
          key={k}
          points={levelPoints((k + 1) / levels)}
          fill="none"
          stroke="rgba(0,255,255,0.12)"
          strokeWidth={1}
        />
      ))}

      {/* Axis spokes */}
      {data.map((_, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={cx + maxR * Math.cos(angle(i))}
          y2={cy + maxR * Math.sin(angle(i))}
          stroke="rgba(0,255,255,0.1)"
          strokeWidth={1}
        />
      ))}

      {/* Data polygon */}
      {mounted && (
        <>
          <polygon
            points={dataPolygon}
            fill="rgba(0,255,255,0.12)"
            stroke="#00ffff"
            strokeWidth={2}
            style={{ filter: "drop-shadow(0 0 8px rgba(0,255,255,0.45))" }}
          >
            <animate attributeName="opacity" from="0" to="1" dur="0.8s" fill="freeze" />
          </polygon>

          {/* Vertex dots */}
          {dataPoints.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={4}
              fill="#00ffff"
              style={{ filter: "drop-shadow(0 0 5px #00ffff)" }}
            >
              <animate
                attributeName="r"
                from="0"
                to="4"
                dur={`${0.4 + i * 0.1}s`}
                fill="freeze"
              />
            </circle>
          ))}
        </>
      )}

      {/* Skill labels */}
      {labelPos.map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={9}
          fill="#888"
          fontFamily="Space Grotesk, sans-serif"
          style={{ userSelect: "none" }}
        >
          {l.label}
        </text>
      ))}
    </svg>
  );
}
