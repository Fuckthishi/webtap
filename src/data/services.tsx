import {
  Phone,
  Target,
  CalendarCheck,
  Users,
  Headphones,
  PenTool,
  MessageSquare,
  ClipboardList,
  Search,
  Briefcase,
  FileSpreadsheet,
  Building2,
  Cloud,
  Rocket,
  Store,
  Globe2,
  LifeBuoy,
  Bot,
  Workflow,
  Zap,
  Ticket,
  ShieldCheck,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  name: string;
  sub: string;
  desc: string;
  deliverables: string[];
  examples: string[];
  featured?: boolean;
  timeline?: string;
};

export type Pillar = {
  id: "sales" | "support" | "operations";
  path: string;
  badge: string;
  badgeColor: string;
  accent: "primary" | "accent";
  icon: LucideIcon;
  title: string;
  short: string;
  tagline: string;
  desc: string;
  price: string;
  highlights: string[];
  services: ServiceItem[];
  faqs: { q: string; a: string }[];
};

export const pillars: Pillar[] = [
  {
    id: "sales",
    path: "/services/managed-sales",
    badge: "Core offer · Managed department",
    badgeColor: "text-primary-glow",
    accent: "primary",
    icon: Target,
    title: "Managed Sales Department",
    short: "More qualified meetings, without hiring a sales team.",
    tagline: "Lead gen, outbound, SDRs, CRM and reporting — fully managed.",
    price: "$1,500 – $5,000+/month",
    desc: "We build and run a full outbound sales function inside your business: lead generation, cold email, LinkedIn and calling, SDRs and appointment setters, CRM management, weekly reporting and team management — with replacements if anyone underperforms.",
    highlights: [
      "Lead generation & list building",
      "Cold outreach: email, LinkedIn, calling",
      "Dedicated SDR / appointment setter",
      "CRM management & weekly reporting",
      "Team management & replacements included",
    ],
    services: [
      {
        icon: Search,
        name: "Lead Generation",
        sub: "ICP research · Verified lists · Enrichment",
        desc: "Fresh, verified prospect lists matched to your ideal customer profile — with the data your reps actually need to open a conversation.",
        deliverables: [
          "ICP research & sourcing",
          "Verified contact data",
          "Firmographic + technographic enrichment",
          "Segmented lists ready for outreach",
        ],
        examples: ["B2B SaaS", "Agencies", "Consulting", "IT services"],
      },
      {
        icon: Phone,
        name: "Cold Outreach",
        sub: "Email · LinkedIn · Calling",
        desc: "Multi-channel outbound campaigns run daily by our team: sequences, testing, deliverability, follow-up and reply handling.",
        deliverables: [
          "Sequence copy & A/B testing",
          "Sending infrastructure & deliverability",
          "LinkedIn outreach at scale",
          "Cold calling by trained reps",
        ],
        examples: ["Founder-led sales", "Outbound teams", "New market entry"],
        featured: true,
      },
      {
        icon: CalendarCheck,
        name: "SDR & Appointment Setting",
        sub: "Qualified meetings on your calendar",
        desc: "Dedicated SDRs and setters trained on your ICP and objections. They handle the back-and-forth so closers only join meetings worth their time.",
        deliverables: [
          "Dedicated trained SDR / setter",
          "Qualification against your criteria",
          "Calendar booking & confirmations",
          "No-show reduction workflows",
        ],
        examples: ["High-ticket services", "SaaS demos", "Consulting discovery"],
      },
      {
        icon: FileSpreadsheet,
        name: "CRM & Reporting",
        sub: "Pipeline hygiene · Weekly reporting",
        desc: "We keep your pipeline clean and your numbers visible: CRM updates, activity tracking, dashboards and a weekly reporting call.",
        deliverables: [
          "CRM setup & hygiene",
          "Activity & pipeline tracking",
          "Weekly performance reports",
          "Monthly business review",
        ],
        examples: ["HubSpot", "Salesforce", "Pipedrive", "Close"],
      },
    ],
    faqs: [
      {
        q: "How is this different from hiring an SDR agency?",
        a: "Most SDR agencies just place a person. We build the operation — playbooks, QA, reporting, replacement and manager oversight — so it keeps performing whether or not any single rep is having a great week.",
      },
      {
        q: "How fast can outbound go live?",
        a: "A typical build runs 2–3 weeks: ICP + playbook in week one, sourcing and infrastructure in week two, live outreach and first meetings by week three.",
      },
      {
        q: "What tools do your reps work in?",
        a: "HubSpot, Salesforce, Pipedrive, Apollo, Instantly, Smartlead, Lemlist, LinkedIn Sales Navigator, Clay and more. We adapt to your stack.",
      },
      {
        q: "Do you guarantee a number of meetings?",
        a: "We guarantee the operation: trained reps, tested sequences, weekly reporting, active QA and replacement when needed. Meeting volume depends on your offer and market, and we forecast honestly.",
      },
    ],
  },
  {
    id: "support",
    path: "/services/managed-support",
    badge: "Managed department",
    badgeColor: "text-primary-glow",
    accent: "primary",
    icon: LifeBuoy,
    title: "Managed Customer Support Department",
    short: "A fully managed support team — not just outsourced staff.",
    tagline: "Support agents, live chat, tickets, SOPs and QA — managed end to end.",
    price: "$1,000 – $3,500/month",
    desc: "We build and manage your customer support function: trained agents on email, chat and tickets, documented SOPs, quality assurance and a Webtap manager owning delivery. You get consistent CSAT, not a rotating cast of freelancers.",
    highlights: [
      "Trained customer support agents",
      "Email, live chat & ticket management",
      "SOP creation & documentation",
      "Quality assurance & CSAT monitoring",
      "Dedicated Webtap manager",
    ],
    services: [
      {
        icon: Headphones,
        name: "Customer Support Agents",
        sub: "Trained, dedicated, managed",
        desc: "Dedicated support agents trained on your product, tone and edge cases — ramped through SOPs and shadowed until they meet quality bars.",
        deliverables: [
          "Dedicated agent(s)",
          "Product & tone training",
          "Coverage during time off",
          "Weekly syncs & reporting",
        ],
        examples: ["SaaS", "E-commerce", "Marketplaces", "Fintech"],
        featured: true,
      },
      {
        icon: MessageSquare,
        name: "Email & Live Chat",
        sub: "Fast, on-brand responses",
        desc: "Front-line email and live chat coverage with response-time targets, macros and QA — so every conversation feels handled.",
        deliverables: [
          "Inbox & chat coverage",
          "Response-time SLAs",
          "Macros & reply libraries",
          "Escalation workflows",
        ],
        examples: ["Intercom", "Zendesk", "Front", "HelpScout", "Gorgias"],
      },
      {
        icon: Ticket,
        name: "Ticket Management",
        sub: "Triage · Prioritize · Resolve",
        desc: "We own your ticket queue: triage, prioritization, tagging, routing and follow-through until issues actually close.",
        deliverables: [
          "Queue triage & prioritization",
          "Tagging & routing",
          "Follow-through to resolution",
          "Backlog cleanup",
        ],
        examples: ["Zendesk", "Freshdesk", "HubSpot Service", "Jira Service"],
      },
      {
        icon: ShieldCheck,
        name: "SOPs & Quality Assurance",
        sub: "Consistency you can measure",
        desc: "Documented SOPs for every workflow, plus weekly QA reviews on real tickets — so quality is a system, not a hope.",
        deliverables: [
          "SOP creation & maintenance",
          "Weekly QA reviews",
          "CSAT / QA scorecards",
          "Coaching & improvement plans",
        ],
        examples: ["Support ops", "CX teams", "Post-sale onboarding"],
      },
    ],
    faqs: [
      {
        q: "How is this different from a support outsourcing shop?",
        a: "Outsourcing shops hand you seats. We hand you a managed department: trained agents, SOPs, QA scorecards, a dedicated manager and replacement built in — so CSAT stays high even when people rotate.",
      },
      {
        q: "What channels do you cover?",
        a: "Email, live chat, in-app messaging and ticket queues across tools like Intercom, Zendesk, Front, HelpScout, Gorgias, Freshdesk and HubSpot Service.",
      },
      {
        q: "Can you cover multiple time zones?",
        a: "Yes. We staff across time zones and can arrange follow-the-sun coverage for teams that need 24/7 availability.",
      },
      {
        q: "How do you protect quality as we scale?",
        a: "Every workflow is documented as an SOP, every agent goes through structured onboarding, and we run weekly QA reviews on sampled tickets with a scorecard tied to coaching.",
      },
    ],
  },
  {
    id: "operations",
    path: "/services/managed-operations",
    badge: "Managed department",
    badgeColor: "text-primary-glow",
    accent: "primary",
    icon: Workflow,
    title: "Managed Operations & Automation",
    short: "Outsource repetitive operations — we manage the team and the systems.",
    tagline: "Virtual assistants, AI automation, workflows, SOPs and process optimization.",
    price: "$1,500 – $5,000+/month",
    desc: "We combine trained virtual assistants with AI and workflow automation to take repetitive operations off your plate. You get a managed ops function — with documented processes, ongoing optimization and a Webtap manager owning delivery.",
    highlights: [
      "Dedicated virtual assistants",
      "AI & workflow automation",
      "SOP documentation & process optimization",
      "Ongoing management & QA",
      "Coverage & backup built in",
    ],
    services: [
      {
        icon: Users,
        name: "Virtual Assistants",
        sub: "Executive-grade, trained",
        desc: "Dedicated assistants trained on your calendar, inbox, priorities and internal tools — a managed hire, not a freelancer marketplace.",
        deliverables: [
          "Dedicated VA(s)",
          "Inbox & calendar management",
          "Task & project support",
          "Coverage during time off",
        ],
        examples: ["Founders", "C-suite", "Investors", "Agency owners"],
        featured: true,
      },
      {
        icon: Bot,
        name: "AI Automation",
        sub: "LLM workflows · Assistants · Copilots",
        desc: "AI agents and copilots plugged into your real workflows — drafting, summarizing, classifying and routing so your team stops doing repetitive work.",
        deliverables: [
          "AI use-case discovery",
          "LLM workflows & agents",
          "Prompt & guardrail design",
          "Human-in-the-loop QA",
        ],
        examples: ["Ops teams", "Support ops", "RevOps", "Content ops"],
      },
      {
        icon: Zap,
        name: "Workflow Automation",
        sub: "Zapier · Make · n8n · Native APIs",
        desc: "We connect your tools and remove manual handoffs — data syncs, notifications, approvals, reporting and internal ops workflows.",
        deliverables: [
          "Process mapping",
          "Automation build & testing",
          "Monitoring & error handling",
          "Documentation & handover",
        ],
        examples: ["Zapier", "Make", "n8n", "Native APIs", "Airtable", "Notion"],
      },
      {
        icon: ClipboardList,
        name: "SOPs & Process Optimization",
        sub: "Document · Optimize · Manage",
        desc: "We map how your business actually runs, document it as SOPs, and continuously optimize the highest-friction workflows.",
        deliverables: [
          "Process mapping & audits",
          "SOP creation & maintenance",
          "Optimization roadmap",
          "Ongoing management & reporting",
        ],
        examples: ["Series A/B startups", "Agencies", "Growing SMBs"],
      },
    ],
    faqs: [
      {
        q: "How is this different from a VA marketplace?",
        a: "Marketplaces hand you a name and hope. We recruit, train, manage and back up every assistant with a dedicated Webtap manager, SOPs and QA — so quality is a system, not a lucky match.",
      },
      {
        q: "What kind of automations do you build?",
        a: "Anything that removes manual work: CRM syncs, lead routing, reporting pipelines, AI drafting and summarization, approval flows, onboarding automations and internal ops workflows.",
      },
      {
        q: "Do we own the SOPs and automations you build?",
        a: "Yes. Every SOP and automation is documented in your workspace and yours to keep — even if you stop working with us.",
      },
      {
        q: "Is confidentiality protected?",
        a: "Every team member signs an NDA. Access is scoped through your tools with least-privilege permissions, and we support SSO, password managers and audit trails.",
      },
    ],
  },
];

export const getPillar = (id: Pillar["id"]) => pillars.find((p) => p.id === id)!;

export const sharedFaqs = [
  { q: "Which countries do you work with?", a: "We focus on employer requirements in the United States, United Kingdom, Canada and Australia. Candidates can be sourced within the country, city, radius or other location you specify, subject to role and eligibility requirements." },
  { q: "Can I request candidates only in my city or country?", a: "Yes. Tell us your preferred hiring radius, work arrangement, time zone and any legal work-eligibility rules. Those constraints guide the search." },
  { q: "What roles can WEBTAP help me recruit for?", a: "We welcome briefs for software and technical roles, administrative assistants, sales, customer support, marketing, design, accounting and related business functions." },
  { q: "How does the process start?", a: "Tell us about the role and the location you need. We'll discuss the search requirements and the next steps before any commitment." },
  { q: "Can I interview candidates before hiring?", a: "Yes. The employer makes the final selection. Interviews, assessments and verification requirements can be discussed for each role." },
  { q: "Are candidates always remote?", a: "Not necessarily. Remote, hybrid and on-site requirements can be included in a hiring brief, depending on the role and search geography." },
  { q: "How long will sourcing take?", a: "Timing varies with the role, market, seniority and hiring restrictions. We'll discuss a realistic search plan rather than promise an unverified deadline." },
  { q: "Do you provide team-building or ongoing support?", a: "Our main focus is finding suitable talent. If you need help coordinating multiple hires or additional onboarding support, mention it during the initial discussion so we can scope what's feasible." },
  { q: "How does pricing work?", a: "Pricing depends on the role, hiring market and scope of service. Contact us with your brief to discuss the options." },
  { q: "How do you handle sensitive information?", a: "Only share information needed to scope a vacancy in the first conversation. Any additional confidentiality arrangements and data-handling terms should be agreed before exchanging sensitive material." },
];

export const industries = [
  { icon: Cloud, name: "SaaS", desc: "Outbound, support and ops for growing SaaS teams." },
  { icon: Briefcase, name: "Professional Services", desc: "Client delivery, back-office and lead gen support." },
  { icon: FileSpreadsheet, name: "Accounting", desc: "Bookkeeping, payroll and admin scale support." },
  { icon: LifeBuoy, name: "Healthcare", desc: "Patient coordination, admin and support teams." },
  { icon: Building2, name: "Construction", desc: "Project coordinators, estimators and admin ops." },
  { icon: Store, name: "Real Estate", desc: "ISAs, transaction coordinators and marketing." },
  { icon: Rocket, name: "Marketing Agencies", desc: "White-label support, account ops and automation." },
  { icon: Cpu, name: "Technology", desc: "SDRs, technical support and AI-enabled workflows." },
  { icon: Globe2, name: "E-commerce", desc: "CX, live chat, ops and merchandising support." },
  { icon: Zap, name: "Startups", desc: "Full sales, support and ops teams-in-a-box." },
];

