import {
  Phone, Target, CalendarCheck, Users, Headphones, MessageSquare,
  ClipboardList, Search, Briefcase, FileSpreadsheet, Building2,
  LifeBuoy, Bot, Workflow, Zap, Ticket, ShieldCheck, Cpu,
  Mail, Linkedin, PenTool, Video, Palette, TrendingUp,
  Wrench, Calculator, Wallet, DollarSign, Bot as BotIcon,
  Sparkles, MessageCircle, Database, Rocket, Globe2, Store,
  type LucideIcon,
} from "lucide-react";

export type ServiceRole = { icon: LucideIcon; name: string; desc: string };

export type ServiceCategory = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  roles: ServiceRole[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "sales",
    title: "Sales",
    tagline: "Fill your pipeline with qualified conversations.",
    icon: Target,
    roles: [
      { icon: Users, name: "SDRs", desc: "Outbound reps trained on your ICP and offer." },
      { icon: Phone, name: "Cold Callers", desc: "Trained dialers booking real opportunities daily." },
      { icon: CalendarCheck, name: "Appointment Setters", desc: "Warm-lead conversion to booked meetings." },
      { icon: Search, name: "Lead Generation", desc: "Verified prospect lists matched to your ICP." },
      { icon: Linkedin, name: "LinkedIn Outreach", desc: "Personalised, at-scale LinkedIn campaigns." },
      { icon: Mail, name: "Email Outreach", desc: "Multi-inbox sequences with deliverability owned." },
    ],
  },
  {
    id: "support",
    title: "Customer Support",
    tagline: "Delight customers on every channel, 24/7.",
    icon: Headphones,
    roles: [
      { icon: MessageCircle, name: "Live Chat", desc: "Fast, on-brand chat responses across your stack." },
      { icon: Headphones, name: "Customer Support", desc: "Trained agents on email, tickets and voice." },
      { icon: Wrench, name: "Technical Support", desc: "Tier 1–2 specialists for product-led teams." },
      { icon: Phone, name: "Receptionists", desc: "Virtual reception, call routing and scheduling." },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    tagline: "Ship campaigns and content — every week.",
    icon: TrendingUp,
    roles: [
      { icon: MessageSquare, name: "Social Media Managers", desc: "Strategy, posting, engagement and analytics." },
      { icon: Video, name: "Video Editors", desc: "Short-form and long-form, ready to publish." },
      { icon: Palette, name: "Graphic Designers", desc: "Brand-consistent visuals across every channel." },
      { icon: PenTool, name: "Copywriters", desc: "Websites, ads, emails and long-form content." },
      { icon: Search, name: "SEO Specialists", desc: "On-page, technical and content SEO execution." },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    tagline: "Run the business without the busywork.",
    icon: Workflow,
    roles: [
      { icon: Briefcase, name: "Executive Assistants", desc: "Inbox, calendar and priority management." },
      { icon: ClipboardList, name: "Administrative Assistants", desc: "General admin, coordination and support." },
      { icon: Users, name: "Project Coordinators", desc: "Task, timeline and stakeholder management." },
      { icon: Database, name: "Data Entry", desc: "Accurate CRM, spreadsheet and system updates." },
      { icon: TrendingUp, name: "Operations Managers", desc: "Own SOPs, KPIs and cross-team execution." },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    tagline: "Financial ops handled with precision.",
    icon: Wallet,
    roles: [
      { icon: Calculator, name: "Bookkeepers", desc: "Xero, QuickBooks, MYOB reconciliation and reports." },
      { icon: DollarSign, name: "Payroll", desc: "Compliant payroll runs and superannuation." },
      { icon: FileSpreadsheet, name: "Accountants", desc: "Month-end close, BAS and management accounts." },
    ],
  },
  {
    id: "ai",
    title: "AI Automation",
    tagline: "Human talent + AI, working together.",
    icon: Cpu,
    roles: [
      { icon: BotIcon, name: "AI Chatbots", desc: "24/7 conversational agents for support and sales." },
      { icon: Workflow, name: "Workflow Automation", desc: "Zapier, Make, n8n — no more manual handoffs." },
      { icon: Database, name: "CRM Automation", desc: "Lead routing, enrichment and pipeline hygiene." },
      { icon: Sparkles, name: "AI SDR Systems", desc: "Automated outbound with human-in-the-loop QA." },
      { icon: BotIcon, name: "AI Assistants", desc: "Copilots for research, drafting and reporting." },
    ],
  },
];

export const whyChoose = [
  { icon: ShieldCheck, title: "Elite Recruitment", desc: "Every candidate is thoroughly screened before reaching you." },
  { icon: Users, title: "Client Control", desc: "You choose the people joining your business." },
  { icon: Workflow, title: "Managed Teams", desc: "We continue managing performance after hiring." },
  { icon: Cpu, title: "AI Powered", desc: "Automation and human talent working together." },
  { icon: Zap, title: "Fast Hiring", desc: "Receive qualified candidates quickly." },
  { icon: Rocket, title: "Replacement Support", desc: "If someone isn't the right fit, we'll replace them." },
];

export const screeningSteps = [
  "English assessment",
  "Technical testing",
  "Professional interview",
  "Background checks",
  "Communication skills",
  "Culture fit",
  "References",
  "Experience verification",
];

export const ongoingManagement = [
  { icon: TrendingUp, title: "KPI Monitoring", desc: "Every role has a scorecard, reviewed weekly." },
  { icon: CalendarCheck, title: "Weekly Check-ins", desc: "Recurring syncs with your success manager." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Sampled work reviewed against your standard." },
  { icon: Sparkles, title: "Coaching", desc: "Continuous skill development for your team." },
  { icon: Workflow, title: "Workflow Optimisation", desc: "We refine SOPs and automations over time." },
  { icon: Users, title: "Team Performance Reviews", desc: "Monthly business reviews with real numbers." },
  { icon: Zap, title: "Fast Replacements", desc: "Anyone underperforms? Replaced in days, not weeks." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  size: string;
  logo: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Webtap didn't just hire us an SDR — they built the entire outbound function. Our pipeline tripled inside 90 days and it hasn't slowed since.",
    name: "Sarah Whitmore",
    role: "Head of Revenue",
    company: "Northlane SaaS",
    industry: "B2B SaaS",
    size: "50–200 employees",
    logo: "NL",
  },
  {
    quote: "The ongoing management is the difference. Weekly KPI reviews, coaching, replacements when needed — it feels like an in-house team, not an outsourcer.",
    name: "James O'Connor",
    role: "COO",
    company: "Meridian Group",
    industry: "Professional Services",
    size: "200+ employees",
    logo: "MG",
  },
  {
    quote: "AI automation plus their team removed 30 hours of admin a week from my calendar. That alone paid for the entire engagement in month one.",
    name: "Priya Menon",
    role: "Founder & CEO",
    company: "Kindred Health",
    industry: "Healthcare",
    size: "10–50 employees",
    logo: "KH",
  },
];

export const trustBadges = [
  "Carefully Vetted Talent",
  "Managed Teams",
  "AI-Powered Workflows",
  "Ongoing Support",
  "Performance Focused",
  "Australian Business Focus",
];

export const traditionalVsWebtap = {
  traditional: [
    "Finds employees",
    "Recruitment ends after hiring",
    "No ongoing management",
    "No performance optimisation",
    "No AI or automation",
  ],
  webtap: [
    "Recruits top-tier talent",
    "You choose the candidate",
    "Full onboarding & training",
    "Continuous management",
    "KPI monitoring",
    "AI workflow optimisation",
    "Ongoing support",
  ],
};

export const howItWorksSteps = [
  { icon: MessageCircle, title: "Discovery Call", desc: "We learn about your business, goals, challenges and your ideal team member." },
  { icon: Search, title: "Talent Search", desc: "We source, interview and vet the highest-quality professionals for the role." },
  { icon: Users, title: "Client Selection", desc: "You interview the shortlisted candidates and choose who joins your team." },
  { icon: ClipboardList, title: "Onboarding", desc: "We handle onboarding, training, SOP implementation and system setup." },
  { icon: TrendingUp, title: "Ongoing Management", desc: "We monitor performance, coach the team, optimise workflows and replace talent if needed." },
];
