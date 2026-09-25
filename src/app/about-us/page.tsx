"use client";

import { useState, useRef } from "react";
import Link from "next/link";


import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  Globe2, 
  Target, 
  Zap, 
  Activity,
  Code2,
  Database,
  Network,
  Terminal,
  Workflow,
  LineChart,
  Layers
} from "lucide-react";

// --- CUSTOM EASING --- //
const customEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- DATA --- //
const osTabs = [
  {
    id: "data",
    label: "Data Telemetry",
    title: "Perfect inputs equal perfect outputs.",
    desc: "Machine learning algorithms are only as good as the data they consume. We rebuild your tracking architecture using Server-Side APIs (CAPI), first-party data clustering, and custom attribution models to feed Meta and Google flawless signal data.",
    icon: Database,
  },
  {
    id: "creative",
    label: "Creative Compute",
    title: "High-velocity visual engineering.",
    desc: "Creative is the new targeting. We don't guess what looks good; we deploy modular creative assets at massive scale, isolating variables (hooks, CTA, color grading) to find the mathematical winners in the auction.",
    icon: Code2,
  },
  {
    id: "liquidity",
    label: "Account Liquidity",
    title: "Structuring for algorithmic freedom.",
    desc: "Fragmented accounts kill machine learning. We consolidate campaign structures, remove audience overlaps, and maximize budget liquidity so the platform's AI can exit the learning phase and stabilize CAC instantly.",
    icon: Network,
  }
];

const teamData = [
  { name: "Alexander Wright", role: "Head of Growth Engineering", stat: "Managed $50M+ Meta Spend" },
  { name: "Sarah Chen", role: "Director of Analytics", stat: "Ex-Looker Data Scientist" },
  { name: "David O'Connor", role: "Lead Conversion Architect", stat: "Avg 45% LP Lift" },
  { name: "Elena Rostova", role: "VP Client Strategy", stat: "Scaled 4 Unicorns" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(osTabs[0].id);
  const heroRef = useRef(null);
  
  // Parallax Scroll logic for Hero
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);

  // Timeline Scroll logic
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({ target: timelineRef, offset: ["start center", "end center"] });
  const timelineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden pt-24 selection:bg-[#00c2b2] selection:text-white">
     
          {/* 1. PARALLAX HERO / MANIFESTO */}

      <section ref={heroRef} className="relative px-6 py-32 md:py-48 max-w-7xl mx-auto w-full z-10 min-h-[90vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] rounded-full bg-[#00c2b2]/5 blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent) -z-10"></div>
        
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-bold text-[#009b8e] mb-8 shadow-sm">
              <Terminal className="h-4 w-4" /> root@desklo-global:~# cat manifesto.txt
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter text-neutral-950 leading-[0.95] mb-8">
              Marketing is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">mathematics.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-neutral-500 font-medium leading-tight max-w-4xl">
              We are an international growth engineering firm. Traditional agencies optimize for vanity metrics. We optimize strictly for customer acquisition cost, pipeline velocity, and algorithmic dominance.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE TECH STACK MARQUEE */}
      <section className="py-12 border-y border-neutral-200 bg-white overflow-hidden flex flex-col items-center">
        <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8">
          The Infrastructure We Deploy
        </p>
        <div className="flex space-x-16 whitespace-nowrap px-4 w-max">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-24 items-center opacity-40 font-mono text-xl font-bold tracking-tight text-neutral-800"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center">
                <span>META_CONVERSIONS_API</span>
                <span>LOOKER_STUDIO</span>
                <span>BIGQUERY_SQL</span>
                <span>GOOGLE_ADS_SCRIPTS</span>
                <span>SEGMENT_CDP</span>
                <span>NEXT.JS_CRO</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE "OPERATING SYSTEM" TABS */}
      <section className="py-32 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4">The Desklo Operating System.</h2>
          <p className="text-xl text-neutral-500 font-medium">How we architect scale with deterministic precision.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 bg-white p-8 md:p-12 rounded-[3rem] border border-neutral-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
          
          {/* Tab Navigation */}
          <div className="flex md:flex-col gap-2 overflow-x-auto no-scrollbar md:w-1/3 md:border-r border-neutral-100 md:pr-8">
            {osTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 px-6 py-4 text-left rounded-2xl transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                  activeTab === tab.id ? "text-[#009b8e]" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#00c2b2]/10 rounded-2xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? "text-[#00c2b2]" : "text-neutral-400"}`} />
                <span className="font-bold">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              {osTabs.map((tab) => activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: customEase }}
                  className="flex flex-col gap-4"
                >
                  <div className="inline-flex h-12 w-12 rounded-2xl bg-[#FAFAFA] border border-neutral-100 items-center justify-center mb-4">
                    <tab.icon className="h-6 w-6 text-[#009b8e]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-neutral-950">{tab.title}</h3>
                  <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    {tab.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. THE SHIFT (Sticky Scroll Layout) */}
      <section className="px-6 py-32 max-w-7xl mx-auto w-full border-t border-neutral-200">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Sticky Header Column */}
          <div className="lg:col-span-5 h-full">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-none">
                The old model is dead.
              </h2>
              <p className="text-xl text-neutral-500 font-medium mb-8">
                The era of guessing which creative works or throwing budget at broad demographics is over. To win, you must feed platforms perfect data.
              </p>
              
              <div className="hidden lg:flex gap-4 items-center text-sm font-bold text-neutral-400 uppercase tracking-widest">
                Scroll to explore <ArrowRight className="h-4 w-4 rotate-90 animate-bounce mt-1 text-[#00c2b2]" />
              </div>
            </motion.div>
          </div>

          {/* Scrolling Prose Column */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            {[
              { title: "Engineers, Not Marketers", icon: Cpu, desc: "We don't hire 'media buyers' who just click buttons in Ads Manager. We hire growth engineers who understand server-side API integrations, SQL, and data-driven frameworks. If your tracking architecture is flawed, your ad spend is being burned." },
              { title: "Global Execution, SV Speed", icon: Globe2, desc: "We operate across international time zones with a singular focus: speed to execution. From the moment you sign, we deploy audits, restructure your Conversion APIs, and launch high-velocity testing within 14 days." },
              { title: "Absolute Alignment", icon: LineChart, desc: "We don't hide behind 'impressions' or 'brand lift'. Our success is directly tied to the metrics that keep founders awake at night: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Closed-Won Revenue." }
            ].map((block, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                className="bg-white p-10 md:p-16 rounded-[3rem] border border-neutral-200 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,194,178,0.1)] transition-shadow duration-500 group"
              >
                <div className="h-16 w-16 rounded-[1.25rem] bg-[#FAFAFA] border border-neutral-100 flex items-center justify-center mb-8 group-hover:bg-[#00c2b2]/10 group-hover:border-[#00c2b2]/20 transition-colors duration-500">
                  <block.icon className="h-8 w-8 text-neutral-400 group-hover:text-[#009b8e] transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-extrabold text-neutral-950 mb-6">{block.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed text-lg md:text-xl">
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE TEAM / ENGINEERS (Hover Reveals) */}
      <section className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4">The Infrastructure Team.</h2>
              <p className="text-xl text-neutral-500 font-medium max-w-xl">Not creatives. Quant-focused growth operators.</p>
            </div>
            <Link href="/careers" className="inline-flex items-center gap-2 font-bold text-[#009b8e] hover:text-neutral-950 transition-colors">
              Join the Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="group relative h-96 rounded-[2rem] bg-neutral-200 overflow-hidden cursor-pointer"
              >
                {/* Placeholder for team images - using CSS gradients for premium look without images */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 to-neutral-400 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/60 transition-all duration-500"></div>
                
                {/* Default Text */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-neutral-200 font-medium">{member.role}</p>
                </div>

                {/* Hover Telemetry Reveal */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                  <div className="font-mono text-[#00c2b2] text-xs font-bold mb-4 uppercase">System_Telemetry_Active</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="h-px w-full bg-white/20 mb-4"></div>
                  <div className="text-sm text-neutral-300 font-medium mb-1">Key Metric:</div>
                  <div className="text-xl font-extrabold text-white">{member.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE ORIGIN STORY (Animated Vertical Timeline) */}
      <section className="py-32 px-6 bg-white border-y border-neutral-200 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950">How we evolved.</h2>
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* The Line */}
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-100 -translate-x-1/2"></div>
            {/* The Animated Fill Line */}
            <motion.div 
              style={{ height: timelineHeight }}
              className="absolute left-[23px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#00c2b2] to-[#009b8e] rounded-full -translate-x-1/2 origin-top"
            ></motion.div>

            {/* Timeline Nodes */}
            {[
              { year: "Phase 01", title: "The Agency Problem", desc: "We started in traditional performance marketing and realized everyone was optimizing for front-end vanity metrics. CAC was rising globally, and no one was fixing the data layer." },
              { year: "Phase 02", title: "Building the Infrastructure", desc: "We pivoted entirely. We stopped hiring traditional marketers and started hiring data scientists and conversion engineers. We built Desklo as a technical solution." },
              { year: "Phase 03", title: "Global Scale", desc: "Today, we deploy our proprietary methodologies for Series A+ startups and Unicorns across 14 countries, managing $50M+ in highly efficient algorithmic spend." }
            ].map((node, i) => (
              <div key={i} className={`relative flex items-start justify-end md:justify-between w-full mb-20 last:mb-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* The Dot */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-neutral-100 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm transition-colors duration-300 hover:border-[#00c2b2]">
                  <div className="w-3 h-3 bg-[#009b8e] rounded-full"></div>
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: customEase }}
                  className="w-[calc(100%-4rem)] md:w-[45%] pl-8 md:pl-0"
                >
                  <div className="bg-[#FAFAFA] border border-neutral-200 p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00c2b2]/10 text-[#009b8e] font-mono text-xs font-bold mb-4">
                      {node.year}
                    </span>
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4">{node.title}</h3>
                    <p className="text-neutral-500 font-medium leading-relaxed">{node.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL FOOTPRINT (Data Grid) */}
      <section className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6">International Scale.</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { stat: "$250M+", label: "Revenue Engineered" },
              { stat: "14+", label: "Countries Active" },
              { stat: "12", label: "Unicorns Scaled" },
              { stat: "0", label: "Vanity Metrics Tracked" }
            ].map((item, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white border border-neutral-200 rounded-[2rem] p-10 text-center hover:bg-neutral-950 hover:text-white transition-all duration-500 group cursor-default"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-neutral-950 group-hover:text-white transition-colors duration-500 mb-3">{item.stat}</div>
                <div className="text-xs font-bold text-neutral-400 group-hover:text-[#00c2b2] uppercase tracking-widest transition-colors duration-500">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-40 px-6 bg-neutral-950 text-white relative overflow-hidden rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] mt-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00c2b2]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            Partner with Desklo.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl font-medium mb-12 text-neutral-400">
            Align your brand with the engineering-grade performance agency built for scale.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/contact" className="group relative inline-flex h-16 items-center justify-center gap-2 rounded-full bg-white px-12 text-lg font-bold text-neutral-950 transition-transform hover:scale-105 shadow-xl">
              Initiate Infrastructure Audit <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 text-[#009b8e]" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
