"use client";
import React from "react";
import { motion } from "framer-motion";

const BLOGS = [
  { title: "Building Production-Grade AI Agents with OpenAI SDK", tag: "AI Agents", date: "Jun 2025", read: "8 min", color: "#00ffff", desc: "A deep dive into building reliable, scalable AI agents using the OpenAI Agents SDK with real-world patterns.", emoji: "🤖", url: "https://openai.github.io/openai-agents-python/" },
  { title: "MCP Servers: The Future of AI Tool Integration", tag: "MCP", date: "May 2025", read: "6 min", color: "#7c3aed", desc: "How Model Context Protocol servers are revolutionizing the way AI agents interact with external tools and APIs.", emoji: "🔗", url: "https://modelcontextprotocol.io" },
  { title: "RAG vs Fine-tuning: When to Use Which", tag: "RAG", date: "Apr 2025", read: "10 min", color: "#e8ff4d", desc: "A practical guide on choosing between Retrieval-Augmented Generation and model fine-tuning for your use case.", emoji: "🧠", url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/" },
  { title: "Freelancing Roadmap for AI Developers 2025", tag: "Career", date: "Mar 2025", read: "5 min", color: "#f97316", desc: "How to package your AI skills into high-value freelance offers and land your first $500 project.", emoji: "🚀", url: "https://www.upwork.com/" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// KNOWLEDGE</p>
          <h2 className="section-title">Blog &amp; Articles</h2>
          <p className="text-neutral-400 max-w-md mx-auto mt-3">
            Sharing what I learn about AI, automation, and freelancing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {BLOGS.map((b, i) => (
            <motion.a
              key={b.title}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border overflow-hidden cursor-pointer group transition-all duration-400 block no-underline"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${b.color}40`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${b.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="p-6 pb-0 flex justify-between items-center mb-5">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{ background: `${b.color}15`, color: b.color, borderColor: `${b.color}30` }}
                >
                  {b.tag}
                </span>
                <span className="text-3xl">{b.emoji}</span>
              </div>
              <div className="px-6 pb-6">
                <h3 className="font-bold text-base leading-snug mb-3">{b.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{b.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-neutral-500">
                    {b.date} · {b.read} read
                  </span>
                  <div
                    className="text-xs font-semibold px-4 py-1.5 rounded-full border transition-all"
                    style={{ color: b.color, borderColor: `${b.color}40` }}
                  >
                    Read →
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-outline">View All Articles →</button>
        </div>
      </div>
    </section>
  );
}
