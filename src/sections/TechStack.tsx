import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Icon } from "@iconify/react";

const CATEGORY_ICONS: Record<string, string> = {
  All: "lucide:layers",
  Languages: "lucide:code-2",
  "ML / DL": "lucide:brain",
  "GenAI & LLM Systems": "lucide:bot",
  "Computer Vision": "lucide:eye",
  "Backend & APIs": "lucide:server",
  "Cloud & MLOps": "lucide:cloud",
};

const SKILL_ICONS: Record<string, string> = {
  C: "logos:c",
  "C++": "logos:c-plusplus",
  Python: "logos:python",
  Rust: "logos:rust",
  PyTorch: "logos:pytorch-icon",
  TensorFlow: "logos:tensorflow",
  "Hugging Face Ecosystem": "logos:hugging-face",
  Transformers: "logos:hugging-face",
  "Vision Language Models": "lucide:eye",
  "RAG Pipelines": "lucide:workflow",
  "Vector Databases": "logos:qdrant",
  LangChain: "simple-icons:langchain",
  LangGraph: "simple-icons:langgraph",
  LangSmith: "lucide:flask-conical",
  "Multi Agent Systems": "lucide:network",
  "Agent Harness": "lucide:bot",
  OpenCV: "logos:opencv",
  "Object Detection": "lucide:scan",
  Segmentation: "lucide:crop",
  Classification: "lucide:tags",
  YOLOv8: "lucide:crosshair",
  YOLOv11: "lucide:crosshair",
  Detectron2: "logos:meta-icon",
  FastAPI: "simple-icons:fastapi",
  Flask: "logos:flask",
  "REST APIs": "lucide:plug",
  gRPC: "logos:grpc",
  NATS: "logos:nats",
  SQLite3: "logos:sqlite",
  Docker: "logos:docker-icon",
  AWS: "logos:aws",
  "GitHub Actions": "logos:github-actions",
  Git: "logos:git-icon",
};

const ICON_TINT: Record<string, string> = {
  "Vision Language Models": "text-fuchsia-400",
  "RAG Pipelines": "text-cyan-400",
  LangSmith: "text-emerald-400",
  "Multi Agent Systems": "text-violet-400",
  "Agent Harness": "text-orange-400",
  "Object Detection": "text-sky-400",
  Segmentation: "text-rose-400",
  Classification: "text-amber-400",
  YOLOv8: "text-red-400",
  YOLOv11: "text-red-400",
  "REST APIs": "text-blue-400",
};

const EMOJI_SKILLS: Record<string, string> = {
  "Hugging Face Ecosystem": "🤗",
  Transformers: "🤗",
};

const skillCategories: Record<string, string[]> = {
  Languages: ["C", "C++", "Python", "Rust"],
  "ML / DL": [
    "PyTorch",
    "TensorFlow",
    "Hugging Face Ecosystem",
    "Transformers",
    "Vision Language Models",
  ],
  "GenAI & LLM Systems": [
    "RAG Pipelines",
    "Vector Databases",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "Multi Agent Systems",
    "Agent Harness",
  ],
  "Computer Vision": [
    "OpenCV",
    "Object Detection",
    "Segmentation",
    "Classification",
    "YOLOv8",
    "YOLOv11",
    "Detectron2",
  ],
  "Backend & APIs": ["FastAPI", "Flask", "REST APIs", "gRPC", "NATS", "SQLite3"],
  "Cloud & MLOps": ["Docker", "AWS", "GitHub Actions", "Git"],
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!site.skills.length) return null;

  const categories = ["All", "Languages", "ML / DL", "GenAI & LLM Systems", "Computer Vision", "Backend & APIs", "Cloud & MLOps"];

  const filteredSkills = activeCategory === "All"
    ? site.skills
    : site.skills.filter((skill) => skillCategories[activeCategory]?.includes(skill));

  return (
    <div id="skills">
      <SectionHeader
        title="Tech Stack"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">
            ( select tab to filter )
          </span>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {categories.map((cat) => {
            const iconName = CATEGORY_ICONS[cat] || "lucide:layers";
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm font-semibold"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
                }`}
              >
                <Icon icon={iconName} width={14} height={14} className="size-3.5" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Items Grid */}
        <motion.div layout className="mt-6 flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconName = SKILL_ICONS[skill] || "lucide:code-2";
              const tint = ICON_TINT[skill];
              return (
                <motion.span
                  key={skill}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex cursor-default items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] shadow-xs group"
                >
                  {EMOJI_SKILLS[skill] ? (
                    <span className="shrink-0 text-[14px] leading-none">{EMOJI_SKILLS[skill]}</span>
                  ) : (
                    <Icon
                      icon={iconName}
                      width={16}
                      height={16}
                      className={`size-4 shrink-0 transition-colors ${tint ?? ""} group-hover:brightness-110`}
                    />
                  )}
                  {skill}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Shell>
    </div>
  );
}

export default TechStack;
