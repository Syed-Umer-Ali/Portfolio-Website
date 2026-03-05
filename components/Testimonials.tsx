"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  { name: "Ahmed Khan", role: "CEO, TechStartup PK", text: "Absolutely exceptional! Built our AI automation system in record time. The agent saved us 20+ hours per week. Highly recommend!", rating: 5, avatar: "AK", color: "#00ffff" },
  { name: "Sarah Mitchell", role: "Product Manager, SaaS Co.", text: "The RAG chatbot he built for our platform is incredible. Accurate, fast, and perfectly integrated. Would hire again without hesitation!", rating: 5, avatar: "SM", color: "#7c3aed" },
  { name: "Usman Raza", role: "Founder, E-Commerce Brand", text: "Delivered the shoe store app with AI features beyond our expectations. Clean code, great communication, and fast delivery.", rating: 5, avatar: "UR", color: "#e8ff4d" },
  { name: "Emily Chen", role: "CTO, AI Agency", text: "Rare talent — understands both business and deeply technical AI concepts. Our MCP server integration was flawless.", rating: 5, avatar: "EC", color: "#f97316" },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 overflow-hidden" style={{ background: "rgba(13,13,31,0.5)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// SOCIAL PROOF</p>
          <h2 className="section-title">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onClick={() => setActive(i)}
              className="relative p-8 rounded-2xl border transition-all duration-400 cursor-pointer overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: active === i ? `${t.color}40` : "var(--border)",
                boxShadow: active === i ? `0 0 30px ${t.color}18` : "none",
                transform: active === i ? "translateY(-4px)" : "none",
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-2 left-6 text-8xl font-display leading-none pointer-events-none select-none"
                style={{ color: t.color, opacity: 0.1 }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex mb-4 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed mb-6 relative z-10 text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-black flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, var(--accent2))` }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-neutral-500 text-xs">{t.role}</div>
                </div>
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: t.color }}
                >
                  ✦ Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                background: i === active ? "var(--accent)" : "var(--surface2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
