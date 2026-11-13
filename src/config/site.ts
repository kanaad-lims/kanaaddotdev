export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack" | "AI/ML" | "Tooling")[];
  downloads?: { from: number; to: number; label?: string };
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  highlights?: string[];
  logo?: string;
  url?: string;
};

export type FreelanceProject = {
  title: string;
  category: string;
  description: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  fullStack: string[];
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type Paper = {
  title: string;
  venue: string;
  verdict: "Published" | "Accepted";
  authors: string;
  summary: string[];
  tags: string[];
  publicationUrl?: string;
  pdfUrl?: string;
};

export type Achievement = {
  title: string;
  category: string;
  points: string[];
  year: string;
};

export type LeadershipRole = {
  org: string;
  role: string;
  points: string[];
  period: string;
  logo?: string;
};

export type OpenSourceContribution = {
  title: string;
  repo: string;
  prNumber: number;
  url: string;
  status: "Merged";
  description: string;
  technologies: string[];
};

export const site = {
  name: "Kanaad Limaye",
  firstName: "Kanaad",
  url: "https://kanaad-lims.github.io",
  quote: {
    text: "Systems beyond just models",
    author: "",
  },
  profileImages: [
    "/profile2.jpg",
    "/favicon.png"
  ],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "KL",
  role: "AI Engineer | CS Student",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  email: "kanaad.limaye@gmail.com",
  greeting: "Hi, I'm Kanaad",
  tagline: "Building AI-powered applications, RAG systems, backend services and machine learning solutions. Passionate about transforming AI models into real-world products.",
  about: [
    "I am currently working as an ML Intern at PictelAI, where I help build computer vision and image processing pipelines that are later integrated into advanced microscopes and stand-alone systems.",
    "My work is focused on bridging the gap between AI/ML research and practical applications. Currently working in the Agentic AI space, where I plan to design and build production-level systems that scale.",
    "When I am AFK, you'll probably find me watching football, going on a trek or relaxing with a good piece of fiction.",
  ],
  tldr: [
    "ML Intern @ PictelAI.",
    "Building agentic AI systems.",
    "IEEE published researcher.",
    "Systems beyond just models.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Agentic AI • RAG Systems • Computer Vision • Backend Engineering",
    nowBuilding: "PaperLens",
    nowListening: "football match highlights",
  },
  socials: {
    github: "https://github.com/kanaad-lims",
    twitter: "https://x.com/kanaad_limaye",
    linkedin: "https://linkedin.com/in/kanaad-limaye",
    email: "mailto:kanaad.limaye@gmail.com",
    resume: "https://drive.google.com/file/d/1eS3qhNMNYjhStEp56_Z86_mwWWIZIDFL/view?usp=sharing",
    discord: "",
    medium: "https://medium.com/@kanaad.limaye",
  },
  experience: [
    {
      company: "IISER Pune",
      role: "Project Intern",
      period: "",
      blurb: "",
      highlights: [
        "Working on a quantum computing website for bug fixing and feature addition.",
      ],
      logo: "/images/companies/iiserlogo.png",
    },
    {
      company: "PictelAI",
      role: "Machine Learning Intern",
      period: "Jan 2026 – Jul 2026",
      blurb:
        "Worked on building computer vision and image processing pipelines, integrating into advanced microscopes and stand-alone systems.",
      logo: "/images/companies/pictelai.png",
      highlights: [
        "Built a Rust + OpenCV image-processing pipeline for Gram-positive/negative classification, reaching 90% accuracy on a 500+ image dataset.",
        "Fine-tuned YOLOv11 and Detectron2 models for object detection and feature extraction on proprietary client datasets, achieving 91% accuracy.",
        "Deployed a production ML inference pipeline by exposing models through FastAPI and integrating a high-performance Rust backend using gRPC and NATS JetStream, supporting 2,000+ concurrent users while reducing latency by 30% (from 78ms to 54.6ms).",
        "Optimized a legacy image-processing algorithm in Rust (OpenCV) for a 6.12× speedup from 20.053s to 3.276s; also shipped 4 production features via code review in a shared codebase.",
      ],
      url: "",
    },
  ] as Job[],
  freelanceProjects: [] as FreelanceProject[],
  projects: [
    {
      title: "Boreas Agent",
      blurb:
        "A modular, from-scratch coding-agent harness built with LangGraph and Python. Designed for tool-use loops, enforced policies, compact formatting, and a clean terminal experience.",
      story:
        "Built a modular AI agent harness with LangGraph and Groq, orchestrating multi-step tool use with approval-aware execution, context compression and guardrails.\nImplemented LangSmith tracing and JSONL telemetry to capture model calls, tool executions, outcomes, and errors across agent turns.\nEvaluated 100+ recorded sessions (20+ turns each) achieving 100% on budget compliance, tool validity, and recovery, and 92.9% citation coverage; tracked model latency at p50: 1.81s and p99: 6.52s.",
      stack: ["LangGraph", "Groq", "Python", "SQLite3", "LangSmith"],
      year: "2026",
      links: {
        live: "https://boreas-landing.vercel.app/",
        source: "https://github.com/kanaad-lims/AgentHarness",
      },
      featured: true,
      status: "In Progress",
      image: "/project-images/boreas.png",
      categories: ["AI/ML"],
    },
    {
      title: "Torch Transforms Inspect",
      blurb:
        "A lightweight utility for visually inspecting and debugging torchvision image transformation pipelines using PyTorch and matplotlib.",
      story:
        "Uses native torchvision.transforms and visualizes intermediate steps without ever modifying your pipeline.\nWorks in stand-alone Python files and Jupyter Notebooks, including Google Colab.",
      stack: ["PyTorch", "Python", "Matplotlib"],
      year: "2026",
      links: {
        source: "https://github.com/kanaad-lims/Torch-Transform-Inspector",
      },
      featured: true,
      image: "/project-images/torch_transform.png",
      categories: ["Tooling"],
      downloads: { from: 200, to: 1400, label: "PyPI Downloads" },
    },
    {
      title: "PaperLens",
      blurb:
        "AI-powered research paper analysis and Q&A engine with structured extraction and RAG-based question answering.",
      story:
        "Structured extraction covers title, authors, abstract, problem statement, methods, math formulas (LaTeX), datasets, results, limitations, future work and keywords.\nRAG Q&A engine supports parallel processing and uses hybrid search (BM25 + semantic search).\nAchieved RAGAS scores of 0.91 (Faithfulness), 0.88 (Answer Relevancy), 0.87 (Context Precision) and 0.90 (Context Recall).",
      stack: ["Python", "FastAPI", "ChromaDB", "Docling"],
      year: "2026",
      links: {
        source: "https://github.com/kanaad-lims/PaperLens",
      },
      featured: true,
      image: "/project-images/paperlens.png",
      categories: ["AI/ML", "Backend"],
    },
    {
      title: "MeDetect AI",
      blurb:
        "AI-powered diagnostic system with accurate detection of multiple diseases.",
      story:
        "Trained models on T4x2 GPUs using TensorFlow and Keras with Roboflow for data augmentation.\nAchieved 90.8% (Skin Disease) and 95.34% (Alzheimer's) accuracies across test datasets.\nBuilt a custom offline mode functionality using 3 LLMs through an inverted triangle model.",
      stack: ["Next.js", "TensorFlow", "Python"],
      year: "2025",
      links: {
        source: "https://github.com/kanaad-lims/MeDetect-AI",
      },
      featured: false,
      image: "/project-images/medetect.jpeg",
      categories: ["AI/ML", "Backend"],
    },
    {
      title: "MIRAGE",
      blurb:
        "Multimodal Image Retrieval & Attribute-Grounded Engine — an open-vocabulary, context-aware image search engine.",
      story:
        "Utilizes VLM dense captioning (Moondream) and CLIP visual reranking for zero-shot image retrieval using natural language.\nFeatures compositional attribute binding, context & location awareness, vibe & style inference, and dual-stage retrieval.",
      stack: ["OpenAI CLIP", "MoonDream 2 VLM", "ChromaDB"],
      year: "2025",
      links: {
        live: "https://kanaad-lims.github.io/MIRAGE/",
        source: "https://github.com/kanaad-lims/mirage",
      },
      featured: false,
      image: "/project-images/mirage.png",
      categories: ["AI/ML"],
    },
  ] as Project[],
  papers: [
    {
      title: "Multi-modal Artificial Intelligence System for Early Detection of Neurological Diseases",
      venue: "International Conference on Emerging Trends and Technology, IEEE • January 2026",
      verdict: "Published",
      authors: "Kanaad Limaye • Bhushan Anokar • Swanand Mukkawar • Dr. Chhaya Gosavi • Dr. Reena Pagaree",
      summary: [
        "Proposed a multimodal AI framework for early neurological disease detection using MRI imaging and deep learning.",
        "Fine-tuned ResNet-152 on the 15,000+ image ADNI dataset for Alzheimer's disease staging.",
        "Achieved 94.63% test accuracy and 93.43% validation accuracy.",
      ],
      tags: ["Deep Learning", "Medical Imaging", "Fine-Tuning", "Computer Vision", "Healthcare AI"],
      publicationUrl: "https://ieeexplore.ieee.org/abstract/document/11447679/",
      pdfUrl: "https://drive.google.com/file/d/1WUDskMusgE2sVgA-cDT69uHaLhq7NL9u/view?usp=sharing",
    },
    {
      title: "An Analysis of Technical Autonomy and Legal Responsibility in AI-Powered Surgery",
      venue: "South Asian Conference on Science and Technology, IEEE • July 2026 (to be published)",
      verdict: "Accepted",
      authors: "Kanaad Limaye • Swaraa Kulkarni",
      summary: [
        "Explored the relationship between artificial intelligence, surgical autonomy and legal responsibility.",
        "Examined the ethical and regulatory challenges associated with AI-powered surgical systems.",
        "Proposed future governance considerations for the safe deployment of autonomous medical technologies.",
      ],
      tags: ["Artificial Intelligence", "AI Ethics", "Healthcare", "Medical Robotics", "AI Governance"],
      pdfUrl: "https://drive.google.com/file/d/1_dbqmBfizNcwmaBE7BXmwD2XfgyXxFF5/view?usp=sharing",
    },
    {
      title: "GSM Based Home Security System Using Arduino Microcontrollers",
      venue: "Indian Journal of Computer Science and Technology • April 2025",
      verdict: "Published",
      authors: "Kanaad Limaye • Avaneesh Joshi • Yashada Jagtap • Sarwadnya Mahajan • Arpita Ingalgi • Vaidehi Magare • Dr. Sunita Upasani",
      summary: [
        "Designed an IoT-based home security system using Arduino microcontrollers and GSM communication.",
        "Achieved over 90% threat detection accuracy across multiple security scenarios.",
        "Reduced deployment cost by nearly 80% compared to commercial security solutions.",
      ],
      tags: ["IoT", "Arduino", "Embedded Systems", "GSM", "Smart Home", "Security"],
      publicationUrl: "https://www.indjcst.com/archives/10.59256/indjcst.20250401020",
      pdfUrl: "https://drive.google.com/file/d/18XplHXaMd-fb1HC9Ey-CYR6u8nc6FdUa/view?usp=sharing",
    },
  ] as Paper[],
  achievements: [
    {
      title: "ABU Robocon AIR 5",
      category: "Competition",
      points: [
        "Secured AIR 5 nationally at ABU Robocon.",
        "Represented Team Rudra in autonomous robotics.",
      ],
      year: "2024",
    },
    {
      title: "IEEE Publication",
      category: "Research",
      points: [
        "Research paper accepted at an international conference.",
        "Published in IEEE Xplore proceedings.",
      ],
      year: "2026",
    },
    {
      title: "SISTER AI/ML Program",
      category: "Fellowship",
      points: [
        "Selected for the AI/ML research track.",
        "Mentorship under Delta Rising Foundation.",
      ],
      year: "2026",
    },
  ] as Achievement[],
  leadership: [
    {
      org: "IEEE MMCOE Student Branch",
      role: "Chairperson",
      points: [
        "Led the IEEE Student Branch and coordinated technical initiatives.",
        "Organized workshops, events and community activities.",
        "Best Student Branch of the Year 2025 – IEEE Pune Section.",
      ],
      period: "Jan 2025 – Jan 2026",
      logo: "/images/leadership/ieeeLogo.png",
    },
    {
      org: "HPAIR",
      role: "International Student Delegate",
      points: [
        "Represented MMCOE at the Harvard Project for Asian and International Relations.",
        "Participated in discussions on leadership, innovation and global collaboration.",
      ],
      period: "Aug 2025 – Present",
      logo: "/images/leadership/harvardLogo.png",
    },
    {
      org: "Logitech",
      role: "Marketing Volunteer",
      points: [
        "Volunteered during the MX Master Series launch at Pune Design Festival 2025.",
        "Assisted with product demonstrations and attendee engagement.",
      ],
      period: "Mar 2025 – Mar 2025",
      logo: "/images/leadership/logiLogo.png",
    },
    {
      org: "Volship Fellowship under UNICEF",
      role: "Volunteer",
      points: [
        "Community volunteering under the Volship Fellowship program in association with UNICEF.",
      ],
      period: "Jan 2024 – Apr 2024",
      logo: "/images/leadership/unicefLogo.png",
    },
    {
      org: "Kumudini Charitable Trust",
      role: "Volunteer",
      points: [
        "Ongoing volunteering with Kumudini Charitable Trust.",
      ],
      period: "2023 – Present",
      logo: "/images/leadership/kumudiniLogo.png",
    },
  ] as LeadershipRole[],
  skills: [
    "C",
    "C++",
    "Python",
    "Rust",
    "PyTorch",
    "TensorFlow",
    "Hugging Face Ecosystem",
    "Transformers",
    "Vision Language Models",
    "RAG Pipelines",
    "Vector Databases",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "Multi Agent Systems",
    "Agent Harness",
    "OpenCV",
    "Object Detection",
    "Segmentation",
    "Classification",
    "YOLOv8",
    "YOLOv11",
    "Detectron2",
    "FastAPI",
    "Flask",
    "REST APIs",
    "gRPC",
    "NATS",
    "SQLite3",
    "Docker",
    "AWS",
    "GitHub Actions",
    "Git",
  ],
  writing: [] as Post[],
  openSourceContributions: [] as OpenSourceContribution[],
  github: {
    username: "kanaad-lims",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with React • Vite • ReactBits",
} as const;

export type Site = typeof site;
