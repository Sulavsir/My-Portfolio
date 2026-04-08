export const site = {
  name: "Sulav Karki",
  title: "Full Stack Engineer",
  tagline:
    "Building scalable real-time systems and production-grade applications.",
  collaboration:
    "Open to collaborate — product work, remote work specific(Nepal), and part-time work.",
  email: "sulav2236@gmail.com",
  phone: "9863978564",
  phoneE164: "+9779863978564",
  address: "Lokanthali-01, Bhaktapur",
  github: "https://github.com/Sulavsir",
  linkedin: "https://www.linkedin.com/in/sulav-karki-43917924b",
  instagram: "https://www.instagram.com/im_sulav/",
  facebook: "https://www.facebook.com/karky.sulav",
  whatsappHref: "https://wa.me/9779863978564",
  /** Public PDF in `/public` — opens in a new tab. */
  cvPdfPath: "/SulavCV__2026.pdf",
} as const;

export const about = {
  body: `Full-stack engineer with hands-on experience architecting scalable web applications on the MERN stack. I specialize in backend-heavy systems—designing resilient APIs, modeling data for growth, and shipping features that hold up under real traffic. From WebSocket-driven real-time experiences to payment flows and observability, I focus on performance, clarity, and maintainability so products stay fast as they scale.`,
  highlights: [
    "Real-time systems & WebSockets",
    "Backend-first architecture & data modeling",
    "Production deployments & integrations",
  ],
};

export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  product?: string;
  bullets: string[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Autonomous Technology",
    period: "2025 – Present",
    role: "Full Stack Engineer",
    product: "chatjyotishi.com",
    bullets: [
      "Architected a real-time chat platform with low-latency messaging and resilient session handling.",
      "Implemented WebSocket infrastructure with PostgreSQL and Prisma for consistent, auditable state.",
      "Integrated Getpay and FonePay payment flows with error recovery and reconciliation-friendly logging.",
    ],
    stack: ["WebSockets", "Prisma", "PostgreSQL", "Payments"],
  },
  {
    company: "Hivecraft Tech",
    period: "2024 – 2025",
    role: "Full Stack Software Engineer",
    product: "Patriot Pulse",
    bullets: [
      "Designed role-based access control (RBAC) tailored to multi-tenant analytics workflows.",
      "Built analytics dashboards with optimized queries and actionable visualization layers.",
    ],
    stack: ["RBAC", "Analytics", "React", "Node"],
  },
  {
    company: "Hivecraft",
    period: "2024",
    role: "Intern",
    bullets: [
      "Contributed to production features with a focus on code quality and iterative delivery.",
    ],
  },
  {
    company: "SiliconTech Nepal",
    period: "2023",
    role: "Intern",
    bullets: [
      "Gained foundational experience shipping features in team-based agile environments.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  impact: string[];
  href: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "chatjyotishi",
    title: "ChatJyotishi",
    description:
      "Real-time astrology consultation platform with payments (Getpay, FonePay), sessions, and a full admin surface for day-to-day operations.",
    stack: ["Next.js", "WebSockets", "Prisma", "PostgreSQL", "Payments"],
    impact: [
      "Shipped a full-featured admin panel for the product—astrologers, pricing, content, and operational controls in one place.",
      "Streaming-style delivery and resilient WebSocket sessions for low-latency chat.",
      "Structured payment and data layers with Prisma and PostgreSQL for auditable, safe changes.",
    ],
    href: "https://chatjyotishi.com",
    image: "/chatjyotishi.png",
    featured: true,
  },
  {
    slug: "dipartha",
    title: "DipArtha",
    description:
      "Cloud-based jewelry business management for showrooms: inventory, sales, purchases, karigar and refining workflows, orders, loans, and finance—in one place with mobile apps.",
    stack: ["Web", "Cloud", "Inventory", "Finance"],
    impact: [
      "Centralized day-to-day jewelry operations with real-time visibility across branches.",
      "Built for the industry: sales, purchases, refining, orders, and loans with transparent tracking.",
      "Developed by Autonomous Technology—accessible anywhere via cloud and mobile.",
    ],
    href: "https://dipartha.com/",
    image: "/dipartha.png",
  },
  {
    slug: "e-pharma",
    title: "E-Pharma",
    description:
      "Pharmacy management system (Next.js, TypeScript) for staff: inventory, sales, purchases, returns, and reporting—split across user, admin, and superadmin roles.",
    stack: ["Next.js", "TypeScript", "TanStack Query", "Axios", "REST", "RBAC"],
    impact: [
      "Three product areas: user ops (inventory, sales, purchases, returns, reports), admin (companies, branches, users, roles), superadmin (versions, menu rollout, limits).",
      "Secure auth and role-based dashboards (user, admin, superadmin).",
      "REST APIs with Axios and TanStack Query; validated forms and data tables for reliable transactions.",
    ],
    href: "https://pharmacy.autonomoustechnology.net/home",
    image: "/e-pharma.png",
  },
  {
    slug: "patriot-pulse",
    title: "Patriot Pulse",
    description:
      "Analytics and engagement product with granular RBAC—designed so teams ship insights without compromising least-privilege access.",
    stack: ["React", "Node.js", "RBAC", "Dashboards"],
    impact: [
      "Implemented permission models that scaled with new roles without refactors.",
      "Optimized dashboard queries to keep heavy views responsive under load.",
    ],
    href: "https://patriotpulse.com",
    image: "/patriot-pulse.png",
  },
  {
    slug: "e-bidding",
    title: "E-bidding (backend)",
    description:
      "Auction-style bidding API with time-bounded rounds and integrity-focused updates—concurrency-aware rules and validation for consistent outcomes.",
    stack: ["Node.js", "Express", "REST", "MongoDB"],
    impact: [
      "Express backend with structured routes, middleware, and validation for bidding flows.",
      "Repository and model layer for listings, bids, and time-bounded rounds.",
    ],
    href: "https://github.com/Sulavsir/ebidding-backend",
    image:
      "https://placehold.co/1200x720/0c0c12/52525b/png?text=E-bidding&font=inter",
  },
  {
    slug: "cv-builder",
    title: "CV Builder App",
    description:
      "Structured document builder with live preview and export—focused on layout stability and fast iteration for users.",
    stack: ["React", "PDF", "State", "UX"],
    impact: [
      "Designed a predictable editing model to avoid layout thrash on large documents.",
      "Optimized render paths for snappy preview updates on modest hardware.",
    ],
    href: "https://a-simple-cv-builder.vercel.app/",
    image: "/cv-builder.png",
  },
];

export type SkillCategory = {
  name: string;
  skills: readonly string[];
  /** Visual bar fill (0–100); relative comfort, not a mastery score. */
  proficiency: number;
};

export const skillCategories: readonly SkillCategory[] = [
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST", "WebSockets", "Prisma", "Auth"],
    proficiency: 83,
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    proficiency: 82,
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Schema design", "Indexing"],
    proficiency: 81,
  },
  {
    name: "DevOps",
    skills: ["Docker", "nginx", "AWS S3", "AWS RDS", "CI/CD", "Linux"],
    proficiency: 54,
  },
] as const;

export const education = [
  {
    school: "Your University / Program",
    degree: "Bachelor of Science in Computer Science (or equivalent)",
    period: "20XX – 20XX",
    detail:
      "Coursework and projects emphasizing systems, algorithms, and software engineering practice.",
  },
];

export const certifications = [
  {
    name: "AWS / Cloud Foundations (placeholder)",
    issuer: "Placeholder Issuer",
    year: "20XX",
  },
  {
    name: "Backend & API Design (placeholder)",
    issuer: "Placeholder Issuer",
    year: "20XX",
  },
];
