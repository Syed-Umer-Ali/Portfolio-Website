"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const CONTACT_LINKS = [
  { label: "Email", value: "syedumerali45@gmail.com", link: "mailto:syedumerali45@gmail.com", icon: "✉️", color: "#00ffff" },
  { label: "Upwork", value: "upwork.com/aidev", link: "https://www.upwork.com/freelancers/aidev", icon: "💼", color: "#7c3aed" },
  { label: "GitHub", value: "https://github.com/Syed-Umer-Ali", link: "https://github.com/Syed-Umer-Ali", icon: "👾", color: "#e8ff4d" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/umer-ali-0924482b7/", link: "https://www.linkedin.com/in/umer-ali-0924482b7/", icon: "🔗", color: "#0ea5e9" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "rgba(13,13,31,0.5)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// GET IN TOUCH</p>
          <h2 className="section-title">Let's Build Together</h2>
          <p className="text-neutral-400 max-w-md mx-auto mt-3">
            Available for freelance AI projects, automation consulting, and
            agentic system development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 mb-8">
              {CONTACT_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${item.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-neutral-500 text-xs mb-0.5">{item.label}</p>
                    <p className="font-semibold text-sm" style={{ color: item.color }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability code block */}
            <div className="glass-card p-6">
              <pre className="font-mono text-sm leading-7">
                <span className="text-neutral-500">{"// Availability\n"}</span>
                <span className="text-purple-400">status</span>
                {" = "}
                <span className="text-emerald-400">"Open"</span>
                {"\n"}
                <span className="text-purple-400">response_time</span>
                {" = "}
                <span style={{ color: "var(--accent)" }}>"&lt; 24hrs"</span>
                {"\n"}
                <span className="text-purple-400">timezone</span>
                {" = "}
                <span style={{ color: "var(--accent)" }}>"PKT (UTC+5)"</span>
              </pre>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-9"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-5">🚀</div>
                <h3 className="font-bold text-xl mb-2" style={{ color: "var(--accent)" }}>
                  Message Sent!
                </h3>
                <p className="text-neutral-400 mb-6">
                  I'll get back to you within 24 hours.
                </p>
                <button className="btn-outline" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-lg mb-7">Send a Message</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-neutral-500 text-xs mb-2">Your Name</label>
                    <input
                      className="contact-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-500 text-xs mb-2">Email</label>
                    <input
                      type="email"
                      className="contact-input"
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-neutral-500 text-xs mb-2">Project Type</label>
                  <select
                    className="contact-input cursor-pointer"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="">Select project type...</option>
                    <option>AI Agent Development</option>
                    <option>MCP Server</option>
                    <option>RAG Chatbot</option>
                    <option>React / Next.js App</option>
                    <option>Automation System</option>
                  </select>
                </div>

                <div className="mb-7">
                  <label className="block text-neutral-500 text-xs mb-2">Message</label>
                  <textarea
                    className="contact-input resize-y"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  onClick={() => setSent(true)}
                >
                  Send Message <Send size={16} />
                </button>
              </>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className="text-center mt-16 pt-10 border-t text-neutral-500 text-sm"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="font-mono" style={{ color: "var(--accent)" }}>
            &lt;DevAI /&gt;
          </span>{" "}
          — Built with Next.js &amp; passion for AI • {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
