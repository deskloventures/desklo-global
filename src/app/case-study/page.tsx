"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Globe2, 
  Activity 
} from "lucide-react";

// --- DATA --- //
const categories = ["All Deployments", "B2B SaaS", "FinTech", "PropTech", "E-Commerce", "Healthcare"];

const caseStudies = [
  {
    id: 1,
    client: "FinFlow",
    category: "FinTech",
    title: "Scaling a Series B FinTech from $1M to $5M ARR in 14 Months.",
    description: "Re-engineered their Meta Ads CAPI architecture and deployed a high-velocity creative testing framework, bypassing algorithmic plateau.",
    metrics: [
      { label: "CAC Reduction", value: "-42%" },
      { label: "Monthly Spend", value: "$250k" }
    ],
    icon: Activity,
    featured: true,
  },
  {
    id: 2,
    client: "EstateLeads",
    category: "PropTech",
    title: "Driving $12M in net-new pipeline for a real estate platform.",
    description: "Shifted budget from vanity search terms to intent-based algorithmic bidding on Google Ads.",
    metrics: [
      { label: "Pipeline Added", value: "$12M" },
      { label: "Lead Vol", value: "+320%" }
    ],
    icon: Globe2,
    featured: false,
  },
  {
    id: 3,
    client: "HealthSync",
    category: "Healthcare",
    title: "Slashing patient acquisition cost by 55% via conversion architecture.",
    description: "Built custom landing page funnels tailored to specific symptom-based search queries.",
    metrics: [
      { label: "CPA", value: "-55%" },
      { label: "Conv. Rate", value: "8.4%" }
    ],
    icon: Target,
    featured: false,
  },
  {
    id: 4,
    client: "RetailScale",
    category: "E-Commerce",
    title: "Stabilizing a 4.2x blended ROAS at $100k/day scale.",
    description: "Leveraged Advantage+ Shopping Campaigns (ASC) paired with server-side incrementality testing.",
    metrics: [
      { label: "Blended ROAS", value: "4.2x" },
      { label: "Revenue", value: "+210%" }
    ],
    icon: BarChart3,
    featured: false,
  },
  {
    id: 5,
    client: "CloudNet",
    category: "B2B SaaS",
    title: "Generating Enterprise SQLs at startup acquisition costs.",
    description: "Deployed gated-content lead magnets through LinkedIn and Meta lookalike models.",
    metrics: [
      { label: "SQLs", value: "+185%" },
      { label: "CPL", value: "-30%" }
    ],
    icon: TrendingUp,
    featured: false,
  },
];

// --- ANIMATION VARIANTS --- //
const customEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All Deployments");

  const filteredStudies = caseStudies.filter(study => 
    activeCategory === "All Deployments" ? true : study.category === activeCategory
  );

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden pt-24 selection:bg-[#00c2b2] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto w-full z-10 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#00c2b2]/5 blur-[120px] pointer-events-none -z-10"></div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-[#009b8e] mb-6 shadow-sm">
            <BarChart3 className="h-4 w-4" /> Proof of Work
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-neutral-950 leading-[1.05] mb-6">
            We don't sell services. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">We engineer outcomes.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl">
            Explore how we've architected scalable acquisition engines for Unicorns, Series A+ startups, and enterprise disruptors.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. FILTER & GRID SECTION */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? "text-white shadow-md" 
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-neutral-950 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: customEase }}
                key={study.id}
                className={`group relative rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,194,178,0.15)] transition-all duration-500 overflow-hidden cursor-pointer flex flex-col ${
                  study.featured ? "md:col-span-2 md:flex-row" : "col-span-1"
                }`}
              >
                {/* Visual / Metric Block */}
                <div className={`bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-neutral-100 p-8 flex flex-col justify-between relative overflow-hidden ${
                  study.featured ? "md:w-2/5" : "h-64"
                }`}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:scale-110 group-hover:text-[#00c2b2] transition-transform duration-700 ease-out pointer-events-none">
                    <study.icon className="h-64 w-64" />
                  </div>
                  
                  <div className="flex justify-between items-start w-full relative z-10 mb-8 md:mb-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 font-mono text-xs font-bold shadow-sm">
                      {study.category}
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-neutral-300 group-hover:text-[#00c2b2] transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {/* Feature specific large metrics */}
                  {study.featured && (
                    <div className="relative z-10 mt-auto">
                       <h4 className="text-neutral-500 font-semibold mb-2">{study.client} Metrics</h4>
                       <div className="text-5xl font-extrabold text-[#009b8e] mb-1">{study.metrics[0].value}</div>
                       <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider">{study.metrics[0].label}</div>
                    </div>
                  )}
                </div>

                {/* Content Block */}
                <div className={`p-8 md:p-10 flex flex-col flex-1 justify-between bg-white ${study.featured ? "md:w-3/5" : ""}`}>
                  <div>
                    <h3 className={`font-extrabold text-neutral-950 mb-4 ${study.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                      {study.title}
                    </h3>
                    <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                      {study.description}
                    </p>
                  </div>
                  
                  {/* Grid Metrics */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-extrabold text-neutral-950 group-hover:text-[#00c2b2] transition-colors duration-300">{metric.value}</div>
                        <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00c2b2]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            Your metrics belong on this page.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl font-medium mb-12 text-neutral-400">
            Let's audit your current acquisition infrastructure and find the hidden revenue.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/contact" className="group relative inline-flex h-16 items-center justify-center gap-2 rounded-full bg-white px-12 text-lg font-bold text-neutral-950 transition-transform hover:scale-105 shadow-xl">
              Initiate Strategy Call <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 text-[#009b8e]" />
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
