import {
    Cpu,
    Bot,
    Workflow,
    Database,
    Clock,
    CheckCircle,
    TrendingUp,
    Zap,
    Layers,
    LineChart,
    ShieldCheck,
    HelpCircle
} from "lucide-react";

import {
    SiSap,
    SiGooglecloud
} from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaAws } from "react-icons/fa";

export const intelligentAutomationData = {
    hero: {
        title: "Intelligent Automation Solutions",
        subtitle: "Accelerate Digital Transformation",
        description: "Support Studio Technologies (SST) empowers enterprises with Intelligent Automation solutions that optimize workflows, reduce operational costs, and drive smarter, faster business outcomes.",
        backgroundImage: "/SolutionPage/ConsulationBg.png",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: "Intelligent Automation", link: "/services/intelligentAutomation" }
        ],
        primaryCta: { label: "Talk to an Expert", link: "#contact" },
        secondaryCta: { label: "Get in Touch", link: "#contact" }
    },

    sections: [
        { id: "overview", label: "Overview" },
        { id: "capabilities", label: "Our Capabilities" },
        { id: "metrics", label: "Success Metrics" },
        { id: "partners", label: "Partners" },
        { id: "insights", label: "Related Insights" },
        { id: "faq", label: "FAQ" }
    ],

    overview: {
        title: "What is Intelligent Automation?",
        description: "Intelligent Automation (IA) combines Robotic Process Automation (RPA), Artificial Intelligence (AI), and Machine Learning (ML) to automate complex, end-to-end business operations. By integrating cognitive technologies with execution, SST enables systems to not only perform repetitive tasks but also analyze, learn, and make decisions over time.",
        image: "/ServicePage/HANA.png", // Wireframe image placeholder
        whyItMatters: "Traditional automation only handles rule-based tasks. Intelligent Automation adapts to changing situations, processes unstructured data (like invoices or contracts), and continuously refines its efficiency, creating a hyper-agile digital workforce.",
        whySST: "At SST, we design, deploy, and scale tailor-made automation strategies. We don't just supply tools; we co-create long-term automation roadmaps aligned directly to your commercial KPIs and operational needs.",
        expertise: [
            "End-to-End Process Discovery & Mapping",
            "Custom Cognitive AI & ML integrations",
            "Legacy System Modernization via RPA",
            "24/7 Operations Monitoring & Hypercare Support"
        ],
        industries: [
            "Banking & Finance",
            "Healthcare & Pharma",
            "Logistics & Supply Chain",
            "Retail & E-commerce",
            "Manufacturing"
        ],
        technologies: [
            { name: "UiPath", icon: Bot },
            { name: "Automation Anywhere", icon: Cpu },
            { name: "SAP IA", icon: SiSap },
            { name: "Microsoft Power Automate", icon: TfiMicrosoft },
            { name: "AWS AI Services", icon: FaAws }
        ]
    },

    capabilities: {
        title: "Our Capabilities",
        subtitle: "What We Offer",
        items: [
            {
                icon: Workflow,
                title: "Workflow Automation",
                description: "Automate complex, cross-department workflows, reducing manual hand-offs and streamlining process execution.",
                link: "/services/intelligentAutomation/workflow-automation"
            },
            {
                icon: Bot,
                title: "Robotic Process Automation (RPA)",
                description: "Deploy digital workers to handle repetitive, high-volume tasks such as data entry, reconciliation, and form filing.",
                link: "/services/intelligentAutomation/rpa"
            },
            {
                icon: Database,
                title: "Document Intelligence",
                description: "Extract, classify, and process unstructured data from invoices, receipts, and emails using advanced OCR & NLP.",
                link: "/services/intelligentAutomation/document-intelligence"
            },
            {
                icon: Layers,
                title: "Decision Automation",
                description: "Integrate Machine Learning algorithms to automate operational decisions, underwriting, and risk assessments.",
                link: "/services/intelligentAutomation/decision-automation"
            },
            {
                icon: LineChart,
                title: "Conversational AI",
                description: "Create intelligent, context-aware chatbots and virtual agents to support 24/7 client interactions and queries.",
                link: "/services/intelligentAutomation/conversational-ai"
            },
            {
                icon: ShieldCheck,
                title: "Process Mining & Analytics",
                description: "Analyze event logs to identify operational bottlenecks, predict failure points, and optimize automated pathways.",
                link: "/services/intelligentAutomation/process-mining"
            }
        ]
    },

    metrics: {
        title: "Business Impact",
        subtitle: "Success Metrics We Deliver",
        items: [
            {
                value: "40%",
                label: "Reduction in Manual Effort",
                description: "Freeing up valuable talent to focus on high-impact strategic tasks."
            },
            {
                value: "60%",
                label: "Faster Processing Speeds",
                description: "Accelerating execution times and improving overall service responsiveness."
            },
            {
                value: "99.9%",
                label: "Process Accuracy",
                description: "Eliminating human error rates across compliance and entry-heavy tasks."
            },
            {
                value: "24/7",
                label: "Automated Workflows",
                description: "Continuous digital operations working day and night without interruption."
            }
        ]
    },

    partners: {
        title: "Technology & Strategic Partners",
        subtitle: "Leveraging Industry-Leading Automation Ecosystems",
        items: [
            { name: "SAP", icon: SiSap, link: "/partners/sap" },
            { name: "Microsoft", icon: TfiMicrosoft, link: "/partners/microsoft" },
            { name: "UiPath", icon: Bot, link: "/partners/uipath" },
            { name: "AWS", icon: FaAws, link: "/partners/aws" },
            { name: "Google Cloud", icon: SiGooglecloud, link: "/partners/google-cloud" },
            { name: "Automation Anywhere", icon: Cpu, link: "/partners/automation-anywhere" }
        ]
    },

    insights: {
        title: "Related Insights",
        tabs: [
            {
                id: "blogs",
                label: "Blogs",
                items: [
                    {
                        title: "The Future of Hyperautomation in 2026",
                        image: "/ServicePage/HANA.png",
                        date: "May 14, 2026",
                        link: "/insights/blogs/future-hyperautomation",
                        description: "Discover how AI agents and cognitive workflows are reshaping business logic and operational scale."
                    },
                    {
                        title: "RPA vs. Intelligent Automation: Key Differences",
                        image: "/ServicePage/HANA.png",
                        date: "April 28, 2026",
                        link: "/insights/blogs/rpa-vs-ia",
                        description: "Understand why standard rule-based automation is evolving into self-learning cognitive loops."
                    }
                ]
            },
            {
                id: "case-studies",
                label: "Case Studies",
                items: [
                    {
                        title: "Automating Claims Intake for a Top-Tier Insurer",
                        image: "/ServicePage/HANA.png",
                        date: "June 2, 2026",
                        link: "/insights/cases/claims-intake",
                        description: "SST deployed Document Intelligence to slash claims processing duration by 72% for a leading insurer."
                    }
                ]
            },
            {
                id: "whitepapers",
                label: "Whitepapers",
                items: [
                    {
                        title: "Enterprise Guide to Scaling Intelligent Agents",
                        image: "/ServicePage/HANA.png",
                        date: "Jan 12, 2026",
                        link: "/insights/whitepapers/scaling-intelligent-agents",
                        description: "Our exhaustive analysis on governance, security, and infrastructure setups for large-scale automation."
                    }
                ]
            },
            {
                id: "news",
                label: "News",
                items: [
                    {
                        title: "SST Named as a Rising Leader in Automation",
                        image: "/ServicePage/HANA.png",
                        date: "Feb 20, 2026",
                        link: "/insights/news/rising-leader",
                        description: "Industry watchdogs recognize SST for outstanding delivery of cognitive robotic automation systems."
                    }
                ]
            }
        ]
    },

    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Resolve Common Queries",
        items: [
            {
                question: "How is Intelligent Automation different from standard RPA?",
                answer: "Standard RPA executes simple, predefined, rule-based tasks (e.g., copy-pasting data). Intelligent Automation integrates AI and Machine Learning, allowing the system to handle unstructured data, detect patterns, learn from exceptions, and execute intelligent decision-making."
            },
            {
                question: "How long does it take to deploy an automation project?",
                answer: "A standard pilot program or proof-of-concept (POC) can take 4 to 8 weeks. Larger enterprise-wide integrations with cognitive decision points usually range from 3 to 6 months depending on process complexity."
            },
            {
                question: "Will IA replace our existing legacy software?",
                answer: "No. One of the main advantages of Intelligent Automation and RPA is that they interact with your existing legacy systems through user interfaces or APIs, meaning you do not need to replace or rewrite your core legacy systems."
            },
            {
                question: "How do you ensure security and regulatory compliance?",
                answer: "We build strict role-based access, credential vaulting, complete execution logs, and compliance guards (for GDPR, HIPAA, SOC2) directly into every digital worker's script and system layer."
            }
        ]
    },

    cta: {
        title: "Ready to Transform Your Business?",
        description: "Let's discuss how SST can help accelerate your digital transformation and unlock new layers of productivity.",
        buttonText: "Talk to an Expert"
    }
};

