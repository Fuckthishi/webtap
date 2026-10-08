import {
  Phone, Target, CalendarCheck, Users, Headphones, MessageSquare,
  ClipboardList, Search, Briefcase, FileSpreadsheet, Building2,
  LifeBuoy, Bot, Workflow, Zap, Ticket, ShieldCheck, Cpu,
  Mail, Linkedin, PenTool, Video, Palette, TrendingUp,
  Wrench, Calculator, Wallet, DollarSign, Bot as BotIcon,
  Sparkles, MessageCircle, Database, Rocket, Globe2, MapPin, Store,
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
    id: "technology", title: "Software & Technology", tagline: "Build with the right technical minds.", icon: Cpu,
    roles: [
      { icon: Wrench, name: "Software Developers", desc: "Frontend, backend and full-stack profiles." },
      { icon: Cpu, name: "Technical Specialists", desc: "Technical support, QA and IT roles." },
      { icon: Bot, name: "AI & Automation Talent", desc: "Professionals with relevant AI and workflow skills." },
    ],
  },
  {
    id: "assistants", title: "Admin & Operations", tagline: "Find the people who keep things moving.", icon: Briefcase,
    roles: [
      { icon: ClipboardList, name: "Virtual Assistants", desc: "Scheduling, coordination and daily operations." },
      { icon: Users, name: "Executive Assistants", desc: "High-trust support for busy leaders." },
      { icon: Database, name: "Operations & Data", desc: "Admin, data management and process support." },
    ],
  },
  {
    id: "sales", title: "Sales & Business Development", tagline: "People who can build relationships.", icon: Target,
    roles: [
      { icon: Users, name: "Sales Representatives", desc: "Prospecting, pipeline and account development." },
      { icon: CalendarCheck, name: "Appointment Setters", desc: "Scheduling and lead qualification." },
      { icon: Search, name: "Lead Generation Specialists", desc: "Prospecting and research support." },
    ],
  },
  {
    id: "support", title: "Customer Experience", tagline: "Thoughtful support for your customers.", icon: Headphones,
    roles: [
      { icon: Headphones, name: "Customer Support Agents", desc: "Voice, email and ticket-based support." },
      { icon: MessageCircle, name: "Live Chat Specialists", desc: "Clear, helpful customer conversations." },
      { icon: Wrench, name: "Technical Support", desc: "Product troubleshooting and customer care." },
    ],
  },
  {
    id: "creative", title: "Marketing & Creative", tagline: "Make your ideas stand out.", icon: Palette,
    roles: [
      { icon: Video, name: "Video Editors", desc: "Short-form, long-form and commercial editing." },
      { icon: MessageSquare, name: "Social Media Managers", desc: "Content planning and community engagement." },
      { icon: PenTool, name: "Designers & Copywriters", desc: "Visual and written creative specialists." },
    ],
  },
  {
    id: "finance", title: "Finance & Accounting", tagline: "Detail-oriented finance professionals.", icon: Calculator,
    roles: [
      { icon: FileSpreadsheet, name: "Bookkeepers", desc: "Financial records and reconciliation." },
      { icon: Calculator, name: "Accountants", desc: "Accounting professionals matched to your needs." },
      { icon: Wallet, name: "Finance Assistants", desc: "Billing and administrative finance support." },
    ],
  },
];

export const whyChoose = [
  { icon: MapPin, title: "Location comes first", desc: "Tell us where your candidates must live or be legally eligible to work. We source accordingly." },
  { icon: Search, title: "Role-first sourcing", desc: "A search built around your exact skills, experience and work arrangement." },
  { icon: Users, title: "People, not just profiles", desc: "We consider communication and team alignment, not only keywords on a CV." },
  { icon: ClipboardList, title: "A clear process", desc: "Understand the next steps from briefing to candidate review." },
  { icon: ShieldCheck, title: "You stay in control", desc: "Review potential candidates and decide whom you want to interview or hire." },
  { icon: Sparkles, title: "Flexible role coverage", desc: "From a single assistant to technical, sales and finance roles, we can discuss your hiring brief." },
];

export const screeningSteps = [
  "Skills & experience",
  "Work location",
  "Eligibility requirements",
  "Communication",
  "Availability",
  "Role-specific checks",
];

export const ongoingManagement = [
  { icon: ClipboardList, title: "Clear role scope", desc: "Agree on what success looks like before the search starts." },
  { icon: Users, title: "Candidate coordination", desc: "Keep the review and interview process organised." },
  { icon: ShieldCheck, title: "Hiring alignment", desc: "Discuss work location, eligibility and practical expectations." },
  { icon: Workflow, title: "Support when needed", desc: "Ask about additional onboarding or team-building help for your particular role." },
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

export const testimonials: Testimonial[] = [];

export const trustBadges = [
  "Employer-led requirements",
  "Location-aware sourcing",
  "Skills & role matching",
  "Direct communication",
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
  { icon: ClipboardList, title: "Tell us the role", desc: "Share responsibilities, must-have skills, seniority and working arrangement." },
  { icon: Globe2, title: "Set the location", desc: "Define your country, radius, time-zone and work-eligibility requirements." },
  { icon: Search, title: "Focused sourcing", desc: "We look for professionals whose background matches your hiring brief." },
  { icon: Users, title: "Review the fit", desc: "Discuss potential candidates based on skills, communication and availability." },
  { icon: CalendarCheck, title: "Interview & decide", desc: "You choose who to meet and make the final hiring decision." },
];
