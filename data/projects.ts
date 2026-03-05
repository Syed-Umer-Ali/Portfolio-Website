export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  technologies?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "rag-embedded-physical-ai-book",
    title: "RAG Embedded Physical AI Book",
    description: "An intelligent textbook interface with RAG capabilities for context-aware Q&A. Bridges static learning with interactive AI assistance.",
    icon: "🧠",
    color: "#8b5cf6",
    tags: ["Next.js", "Python", "RAG", "LLM", "Vector DB"],
    liveUrl: "https://physical-ai-book-black.vercel.app/",
    longDescription: "This project revolutionizes traditional textbooks by embedding a Retrieval-Augmented Generation (RAG) system directly into the reading experience.",
    technologies: ["Next.js", "Python", "RAG", "LLM", "Vector Database"],
    features: ["Context-aware Q&A", "Real-time text analysis", "Interactive learning interface"],
  },
  {
    id: "2",
    slug: "ai-agent-via-n8n",
    title: "AI Agent via n8n",
    description: "Complex automation workflows powered by n8n and AI agents. Multi-step task handling, data processing, and autonomous decision-making.",
    icon: "🤖",
    color: "#10b981",
    tags: ["n8n", "AI Agents", "Automation", "Node.js"],
    liveUrl: "",
    technologies: ["n8n", "AI Agents", "Automation", "Node.js"],
    features: ["Workflow orchestration", "Autonomous task execution", "Multi-service integration"],
  },
  {
    id: "3",
    slug: "whatsapp-personal-chatbot",
    title: "WhatsApp Personal Chatbot",
    description: "Automated personal assistant on WhatsApp for schedule management, reminders, and natural language queries through a familiar chat interface.",
    icon: "💬",
    color: "#25D366",
    tags: ["WhatsApp API", "Node.js", "NLP"],
    liveUrl: "",
    technologies: ["WhatsApp API", "Node.js", "Natural Language Processing"],
    features: ["Schedule management", "Automated reminders", "Natural language understanding"],
  },
  {
    id: "4",
    slug: "resume-maker-web-app",
    title: "Resume Maker Web App",
    description: "A comprehensive tool to build and export professional ATS-friendly resumes with real-time preview and multiple export formats.",
    icon: "📄",
    color: "#3b82f6",
    tags: ["React", "TypeScript", "PDF Generation"],
    liveUrl: "https://resume-builder-umber-rho.vercel.app/",
    technologies: ["React", "TypeScript", "PDF Generation"],
    features: ["Real-time preview", "Multiple templates", "PDF export"],
  },
  {
    id: "5",
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-stack scalable e-commerce solution with secure payment integration, inventory management, and an optimized checkout flow.",
    icon: "🛒",
    color: "#f59e0b",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    features: ["Secure payments", "Inventory management", "User dashboard"],
  },
  {
    id: "6",
    slug: "shoe-store-ui-ux",
    title: "Shoe Store UI/UX",
    description: "Premium frontend design for a modern shoe retail store with smooth animations, vibrant product displays, and high-end UI/UX principles.",
    icon: "👟",
    color: "#ec4899",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://stride-shoe-store.vercel.app/",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    features: ["Modern UI design", "Smooth transitions", "Responsive layout"],
  },
];
