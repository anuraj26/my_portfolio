"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Play,
  Info,
  ExternalLink,
  Newspaper,
  Rocket,
  User,
} from "lucide-react";

// ---- Types ----
type LinkMap = { [k: string]: string };
type CTA = { label: string; icon: React.ReactNode; href: string };
type Paper = { title: string; subtitle?: string; blurb?: string; links?: LinkMap };
type Project = { title: string; subtitle?: string; blurb?: string; links?: LinkMap };
type Demo = { title: string; subtitle?: string; blurb?: string; links?: LinkMap };
type RowKind = "paper" | "project" | "demo" | "xp";
type RowProps = { id: string; title: React.ReactNode; items: any[]; kind: RowKind };

// ---- Data ----
const META = {
  brand: "Anurajflix",
  name: "Anuraj Manish Sule",
  title: "AI Engineer • NLP Researcher",
  email: "suleanuraj@gmail.com",
  github: "https://github.com/anuraj26",
  linkedin: "https://www.linkedin.com/in/anuraj-sule-ba34b5248/",
  resume: "/resume.pdf",
};

const FEATURED: { tag: string; title: string; description: string; ctas: CTA[] } = {
  tag: "FEATURED",
  title: "Student Advising Automated System Using RAG: 3K+ PDFs, ChromaDB, LLaMA 3",
  description:
    "Production-grade Retrieval-Augmented Generation with metadata filters, vector add/delete, and RAGAS evaluation.",
  ctas: [
    { label: "View Demo", icon: <Play className="h-4 w-4" />, href: "#projects" },
    { label: "More Info", icon: <Info className="h-4 w-4" />, href: "#about" },
  ],
};

const PAPERS: Paper[] = [
  {
    title: "Context-Aware Chunking for Domain RAG (2024)",
    subtitle: "Journal of Applied NLP • Short Paper",
    blurb:
      "Chunking strategy that improves retrieval precision on academic advising corpora.",
    links: {
      pdf: "https://example.com/paper1.pdf",
      code: "https://github.com/harsh-demo/paper1",
      doi: "https://doi.org/10.0001/demo.2024.12345",
    },
  },
  {
    title: "Lightweight Hallucination Evals with RAGAS (2025)",
    subtitle: "NLP Systems Conference • Proceedings",
    blurb:
      "Fast eval pipeline for faithfulness/answer relevancy in RAG systems.",
    links: {
      pdf: "https://example.com/paper2.pdf",
      code: "https://github.com/harsh-demo/paper2",
      doi: "https://doi.org/10.0001/demo.2025.67890",
    },
  },
];

const PROJECTS: Project[] = [
  {
    title: "RAG System (Ollama + ChromaDB)",
    subtitle: "Full‑stack • Prod‑ready",
    blurb:
      "Chunking, embeddings, evals, and API. Supports cosine/dot‑product search and metadata filters.",
    links: {
      live: "https://demo.harshkoli.dev/rag",
      repo: "https://github.com/harsh-demo/rag-system",
    },
  },
  {
    title: "Portfolio Optimisation",
    subtitle: "Finance • CAPM + QP",
    blurb:
      "Efficient frontier with linear regression for returns and quadratic programming for weights.",
    links: {
      live: "https://demo.harshkoli.dev/finance",
      repo: "https://github.com/harsh-demo/portfolio-qp",
    },
  },
  {
    title: "NLP Utilities",
    subtitle: "Tooling • Reusable",
    blurb: "Text cleaning, chunking, prompts, and retrieval helpers.",
    links: {
      live: "https://demo.harshkoli.dev/nlp-utils",
      repo: "https://github.com/harsh-demo/nlp-utils",
    },
  },
];

const DEMOS: Demo[] = [
  {
    title: "Prompt Playground",
    subtitle: "UI • Next.js",
    blurb: "Try prompts & compare outputs.",
    links: {
      live: "https://demo.harshkoli.dev/playground",
      repo: "https://github.com/harsh-demo/prompt-playground",
    },
  },
  {
    title: "Eval Dashboard",
    subtitle: "RAG • Metrics",
    blurb: "Visualise accuracy & faithfulness.",
    links: {
      live: "https://demo.harshkoli.dev/evals",
      repo: "https://github.com/harsh-demo/rag-evals",
    },
  },
];

const ABOUT = {
  headline: "About Anuraj",
  body:
    "AI/NLP engineer focused on retrieval, evaluation, and production systems. I build pragmatic pipelines that move from notebooks to CI/CD, with traceable metrics and observability.",
  bullets: [
    "2 peer‑reviewed papers in NLP (2024–2025)",
    "RAG system on 2K+ PDFs with metadata filters",
    "Experience with PyTorch, Transformers, ChromaDB, Docker, FastAPI",
  ],
};

// ---- Page ----
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <TopNav />
      <Hero />
      <AboutSection />
      <div className="space-y-10 sm:space-y-12">
        <Row
          id="papers"
          title={
            <span className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              My Papers
            </span>
          }
          items={PAPERS}
          kind="paper"
        />
        <Row
          id="projects"
          title={
            <span className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Projects
            </span>
          }
          items={PROJECTS}
          kind="project"
        />
        <Row id="demos" title="Interactive Demos" items={DEMOS} kind="demo" />
        <Row id="experience" title="Experience" items={[]} kind="xp" />
      </div>
      <Footer />
    </div>
  );
}

// ---- Sections & Components ----
function TopNav() {
  return (
    <div className="sticky top-0 z-40 bg-gradient-to-b from-black/80 to-transparent px-4 sm:px-8 py-3">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold text-red-600 tracking-tight">
          {META.brand}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-neutral-300" href="#papers">Papers</a>
          <a className="hover:text-neutral-300" href="#projects">Projects</a>
          <a className="hover:text-neutral-300" href="#demos">Demos</a>
          <a className="hover:text-neutral-300" href="#experience">Experience</a>
        </nav>
        <div className="flex items-center gap-3">
          <IconLink href={META.github} label="GitHub"><Github className="h-5 w-5" /></IconLink>
          <IconLink href={META.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></IconLink>
          <Button
            className="bg-red-600 hover:bg-red-700 h-9 px-3"
            onClick={() => (window.location.href = `mailto:${META.email}`)}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,#111_0%,#000_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block rounded px-2 py-1 text-xs font-semibold bg-red-600/20 text-red-400 border border-red-600/40">
            {FEATURED.tag}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow">
            {FEATURED.title}
          </h1>
          <p className="text-neutral-300 max-w-prose">{FEATURED.description}</p>
          <div className="flex gap-3 pt-2">
            {FEATURED.ctas.map((c, i) => (
              <Button
                key={c.label}
                className={i === 0 ? "h-10 px-4 bg-red-600 hover:bg-red-700" : "h-10 px-4 bg-neutral-700 hover:bg-neutral-600"}
                onClick={() => {
                  const el = document.querySelector(c.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="inline-flex items-center gap-2">
                  {c.icon}
                  {c.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 sm:px-8">
      <div className="rounded-xl border border-neutral-900 bg-neutral-950 p-6 sm:p-8 -mt-10 mb-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="flex items-start gap-3 mb-2">
          <User className="h-5 w-5 text-neutral-300" />
          <h2 className="text-lg sm:text-xl font-bold">{ABOUT.headline}</h2>
        </div>
        <p className="text-neutral-300 max-w-prose mb-3">{ABOUT.body}</p>
        <ul className="text-sm text-neutral-300 list-disc pl-5 space-y-1">
          {ABOUT.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Row(props: RowProps) {
  const { id, title, items, kind } = props;
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 sm:px-8">
      <h2 className="mb-3 text-lg sm:text-xl font-bold">{title}</h2>
      <div className="group relative">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-neutral-700/60 scrollbar-track-transparent">
          {items.map((item, idx) => (
            <CardTile key={idx} item={item} kind={kind} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardTile({ item, kind }: { item: any; kind: RowKind }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative w-64 shrink-0 snap-start rounded-lg bg-neutral-900 border border-neutral-800 shadow-lg"
    >
      <div className="aspect-[16/9] rounded-t-lg bg-[linear-gradient(135deg,#1f1f1f,#0f0f0f)]" />
      <div className="p-3 space-y-1.5">
        <h3 className="font-semibold leading-snug line-clamp-2">{item.title}</h3>
        {item.subtitle && <p className="text-xs text-neutral-400">{item.subtitle}</p>}
        {item.blurb && <p className="text-sm text-neutral-300 line-clamp-3">{item.blurb}</p>}
        <div className="pt-2 flex flex-wrap gap-2">
          {kind === "paper" && (
            <>
              <MiniLink href={item.links?.pdf}>PDF</MiniLink>
              <MiniLink href={item.links?.code}>Code</MiniLink>
              <MiniLink href={item.links?.doi}>DOI</MiniLink>
            </>
          )}
          {kind === "project" && (
            <>
              <MiniLink href={item.links?.live}>Live</MiniLink>
              <MiniLink href={item.links?.repo}>Repo</MiniLink>
            </>
          )}
          {kind === "demo" && (
            <>
              <MiniLink href={item.links?.live}>Open</MiniLink>
              <MiniLink href={item.links?.repo}>Repo</MiniLink>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MiniLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href || href === "#") {
    return (
      <span className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-800 text-neutral-400 cursor-not-allowed">
        {children}
      </span>
    );
  }
  return (
    <a
      className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <ExternalLink className="h-3 w-3" /> {children}
    </a>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href || href === "#") {
    return (
      <span className="p-2 text-neutral-500" aria-label={`${label} (coming soon)`}>
        {children}
      </span>
    );
  }
  return (
    <a className="p-2 hover:text-neutral-300" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {META.name} · {META.title}</p>
        <div className="flex items-center gap-3">
          <a className="hover:text-neutral-200" href={`mailto:${META.email}`}>
            <Mail className="inline h-4 w-4 mr-1" /> Email
          </a>
          <a className="hover:text-neutral-200" href={META.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
