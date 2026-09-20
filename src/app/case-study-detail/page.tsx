"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  Target, 
  TrendingUp, 
  Workflow 
} from "lucide-react";

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

export default function CaseStudyDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden pt-24 selection:bg-[#00c2b2] selection:text-white">
      
      {/* 1. HEADER / HERO */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto w-full z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUp}>
            <Link href="/case-studies" className="group flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-neutral-950 transition-colors mb-12">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to all deployments
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 font-mono text-xs font-bold shadow-sm">
                  Hospitality & Fine Dining
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-[#009b8e] font-mono text-xs font-bold shadow-sm">
                  12-Month Engagement
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-neutral-950 leading-[1.05] mb-6">
                Scaling a premium hospitality group to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">$15M in direct bookings.</span>
              </h1>
              
              <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl">
                How we bypassed third-party reservation platforms by engineering a deterministic Meta & Google acquisition funnel for a Michelin-level dining group.
              </p>
            </motion.div>

            {/* Quick Stats Sidebar in Hero */}
            <motion.div variants={fadeUp} className="lg:col-span-4 w-full bg-white p-8 rounded-[2rem] border border-neutral-200 shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">Cost Per Acquisition (CPA)</div>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-extrabold text-[#009b8e]">$42</span>
                    <span className="text-lg font-bold text-neutral-400 line-through mb-1">$145</span>
                  </div>
                </div>
                <div className="h-px w-full bg-neutral-100"></div>
                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">Booking Conversion Rate</div>
                  <div className="text-4xl font-extrabold text-neutral-950">4.8% <span className="text-lg text-[#009b8e] ml-2">↑ 300%</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. EDITORIAL CONTENT & STICKY SIDEBAR */}
      <section className="px-6 py-20 max-w-7xl mx-auto w-full border-t border-neutral-200">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* LEFT: Main Content (Prose) */}
          <div className="lg:w-2/3 prose prose-lg prose-neutral max-w-none">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 mb-6 mt-0">The Architectural Flaw</h2>
              <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                Despite offering a world-class culinary and hospitality experience, the client’s digital infrastructure was hemorrhaging margins. They relied heavily on third-party reservation apps (which took a massive cut) and their internal paid campaigns were capturing broad, low-intent traffic rather than high-net-worth consumers. 
              </p>
              <p className="text-neutral-500 font-medium leading-relaxed mb-12">
                Their legacy reservation funnel required 7 steps, resulting in an 82% drop-off rate. They needed to pivot to a high-performance digital model to capture an international audience without compromising their luxury brand identity.
              </p>
            </motion.div>

            {/* Feature Callout Image/UI block */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="w-full h-80 bg-neutral-100 rounded-[2rem] border border-neutral-200 mb-12 flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#FAFAFA]"></div>
              <Workflow className="h-24 w-24 text-neutral-300 relative z-10" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/80 backdrop-blur border border-neutral-200 rounded-xl font-mono text-sm font-bold text-[#009b8e] z-10">
                Data_Architecture_V2.fig
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 mb-6">The Deployment</h2>
              <p className="text-neutral-500 font-medium leading-relaxed mb-6">
                We engineered a full-funnel digital marketing ecosystem designed specifically to attract and convert luxury clientele.
              </p>
              <ul className="space-y-6 mb-12 list-none pl-0">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><CheckCircle2 className="h-6 w-6 text-[#00c2b2]" /></div>
                  <div>
                    <strong className="block text-neutral-950 font-bold text-xl mb-1">Conversion Architecture (CRO)</strong>
                    <span className="text-neutral-500 font-medium">We stripped the 7-step booking process down to a seamless, 3-step mobile-first checkout utilizing Apple Pay and Google Pay. We also dynamically A/B tested creative menu names and luxury visual assets to maximize intent.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><CheckCircle2 className="h-6 w-6 text-[#00c2b2]" /></div>
                  <div>
                    <strong className="block text-neutral-950 font-bold text-xl mb-1">Server-Side Tracking (CAPI)</strong>
                    <span className="text-neutral-500 font-medium">Rebuilt the analytics tracking from the ground up, identifying exactly where high-value users were dropping off and feeding that clean data back to Meta's algorithm.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><CheckCircle2 className="h-6 w-6 text-[#00c2b2]" /></div>
                  <div>
                    <strong className="block text-neutral-950 font-bold text-xl mb-1">Algorithmic Media Buying</strong>
                    <span className="text-neutral-500 font-medium">Shifted budget from broad keywords to highly specific, intent-driven queries targeting specific postal codes in global financial hubs via Google Search and Meta Advantage+.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* RIGHT: Sticky Metadata Sidebar */}
          <div className="lg:w-1/3">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="sticky top-32 space-y-8"
            >
              {/* Services Used Box */}
              <div className="bg-white p-8 rounded-[2rem] border border-neutral-200 shadow-sm">
                <h3 className="font-extrabold text-neutral-950 mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#00c2b2]" /> Capabilities Deployed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Performance Media Buying", "Google Ads", "Meta Ads", "Landing Pages & CRO", "Server-Side Tracking"].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-sm font-bold text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Info Box */}
              <div className="bg-[#FAFAFA] p-8 rounded-[2rem] border border-neutral-200">
                <h3 className="font-extrabold text-neutral-950 mb-6 flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-[#009b8e]" /> Client Profile
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
                    <span className="text-neutral-500 font-medium text-sm">Industry</span>
                    <span className="text-neutral-950 font-bold text-sm">Fine Dining / Hospitality</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
                    <span className="text-neutral-500 font-medium text-sm">Company Size</span>
                    <span className="text-neutral-950 font-bold text-sm">200-500 Employees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500 font-medium text-sm">Target Market</span>
                    <span className="text-neutral-950 font-bold text-sm">Global (Tier 1 Cities)</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL BLOCK */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex justify-center mb-8">
               <div className="h-16 w-16 bg-[#00c2b2]/10 rounded-full flex items-center justify-center">
                 <span className="text-2xl font-bold text-[#009b8e]">SJ</span>
               </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight mb-8">
              "The execution was flawless. They didn't just drive traffic; they fundamentally understood how to translate our fine dining experience into a digital interface that actually converts."
            </h3>
            <div className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Sarah Jenkins, <span className="text-[#009b8e]">Chief Marketing Officer</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden rounded-t-[3rem] mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00c2b2]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            Let's build your pipeline.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl font-medium mb-12 text-neutral-400">
            Stop losing margins to inefficient acquisition structures.
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