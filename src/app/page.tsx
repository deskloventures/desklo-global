"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  Target, 
  Zap, 
  ChevronDown, 
  TrendingUp,
  Workflow,
  CheckCircle2,
  MousePointer2,
  ArrowUpRight
} from "lucide-react";
import TypewriterEffect from "@/components/ui/TypewriterEffect";

// --- DATA --- //
const stats = [
  { label: "Revenue Generated", value: "$250M+" },
  { label: "Average ROAS", value: "4.8x" },
  { label: "Ad Spend Managed", value: "$50M+" },
  { label: "Unicorns Scaled", value: "12+" },
];

const typewriterWords = ["Clinics", "Agencies", "Real Estates", "Healthcare Brands", "Ecommerce"];
const faqs = [
  {
    question: "Do you work with early-stage startups or only established unicorns?",
    answer: "We typically partner with Series A+ companies or highly funded seed startups that have achieved product-market fit and are ready to pour fuel on the fire. Our minimum monthly ad spend requirement is $25k.",
  },
  {
    question: "How long does onboarding take before campaigns go live?",
    answer: "We move at Silicon Valley speed. From the moment you sign the contract, our audit, tracking setup, and initial creative deployment happen within 14 days.",
  },
  {
    question: "Do you charge a flat fee or a percentage of ad spend?",
    answer: "We align our success with yours. We charge a flat base retainer to cover our elite team's bandwidth, plus a performance incentive based on hitting specific revenue or CPA targets.",
  },
];

// --- ANIMATION VARIANTS (Apple/Vercel Style Easing) --- //
const customEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useRef(null);
  
  // Parallax scroll effect for Hero
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden selection:bg-[#00c2b2] selection:text-white pt-24">
      
      {/* 1. HERO SECTION (Pristine Light Parallax) */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center z-10">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
        
        {/* Soft Accent Glows */}
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#00c2b2]/5 blur-[100px] pointer-events-none"></div>

        <motion.div style={{ opacity }} className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: customEase }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-sm font-semibold text-neutral-600 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c2b2] opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00c2b2]"></span>
            </span>
            Accepting new partners for Q4
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-neutral-950 leading-[1.05]"
          >
            We engineer upto 8x ROAS ads for <br className="hidden md:block" />
            <TypewriterEffect
              words={typewriterWords}
              typingSpeed={95}
              deletingSpeed={55}
              pauseDuration={1400}
              className="inline-block min-w-[17ch] pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]"
            />
            
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-500 font-medium leading-relaxed"
          >
            Desklo Global is the elite performance marketing infrastructure. We build scalable, deterministic acquisition engines that outpace the market.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 text-sm font-bold text-white shadow-xl shadow-neutral-900/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#00c2b2]/20">
              Deploy Growth <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/case-studies" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-neutral-700 border border-neutral-200 transition-all hover:bg-neutral-50 hover:-translate-y-0.5 shadow-sm">
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SOCIAL PROOF (Infinite Marquee) */}
      <section className="py-12 border-y border-neutral-200 bg-white overflow-hidden">
        <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8">
          Trusted by founders backed by
        </p>
        <div className="flex space-x-16 whitespace-nowrap px-4 w-max">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-24 items-center opacity-60 grayscale"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center text-neutral-800">
                <span className="text-2xl font-bold font-serif">Y Combinator</span>
                <span className="text-2xl font-bold tracking-tighter">SEQUOIA</span>
                <span className="text-2xl font-bold">a16z</span>
                <span className="text-2xl font-bold tracking-widest">Techstars</span>
                <span className="text-2xl font-bold">Lightspeed</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. THE PROBLEM (Sticky Image / Text Reveal) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-6 leading-tight">
              Stop burning capital on traditional agencies.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-neutral-500 mb-8 leading-relaxed">
              Most agencies optimize for vanity metrics and "brand awareness." We operate like a Silicon Valley engineering team, optimizing strictly for CAC, LTV, and algorithmic dominance.
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-5">
              {["Server-side data attribution", "Continuous A/B testing cycles", "Creative engineered for conversion"].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-center gap-4 text-neutral-700 font-semibold">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00c2b2]/10 text-[#009b8e]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <motion.div variants={fadeUp} className="relative h-[500px] w-full rounded-[2rem] bg-white border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex items-center justify-center group">
            {/* Abstract Light Mode UI representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-50 to-white"></div>
            <BarChart3 className="h-32 w-32 text-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
            
            {/* Floating micro-interaction card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-100 shadow-lg flex items-center justify-between group-hover:-translate-y-2 transition-transform duration-500">
               <span className="font-mono text-sm font-semibold text-[#009b8e]">system_status: optimal</span>
               <div className="flex gap-1.5 h-4 items-end">
                  <div className="w-1.5 bg-[#00c2b2] rounded-t-sm animate-[pulse_1s_ease-in-out_infinite] h-full"></div>
                  <div className="w-1.5 bg-[#00c2b2] rounded-t-sm animate-[pulse_1.2s_ease-in-out_infinite] h-3/4"></div>
                  <div className="w-1.5 bg-[#00c2b2] rounded-t-sm animate-[pulse_0.8s_ease-in-out_infinite] h-1/2"></div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. CORE CAPABILITIES (Bento Grid with Diffuse Shadows) */}
      <section className="py-32 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">Our Capabilities.</h2>
            <p className="text-neutral-500 mt-4 text-xl">A unified ecosystem for hyper-growth.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Algorithmic Media Buying", d: "Deep-learning driven campaigns across networks. We train the pixels to find your ideal LTV customers.", i: Target, span: "md:col-span-2" },
              { t: "Conversion Architecture", d: "Landing pages engineered like software products, A/B tested continuously.", i: Zap, span: "md:col-span-1" },
              { t: "Full-Funnel Analytics", d: "Server-side tracking so you know exactly which dollar brought the highest return.", i: BarChart3, span: "md:col-span-1" },
              { t: "Creative Engineering", d: "Data-backed visual assets designed specifically to interrupt patterns and convert cold traffic into buyers.", i: MousePointer2, span: "md:col-span-2" },
            ].map((service, i) => (
              <motion.div 
                key={i} variants={fadeUp} 
                className={`group p-8 rounded-[2rem] bg-[#FAFAFA] border border-neutral-200 hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,194,178,0.15)] transition-all duration-500 cursor-default ${service.span}`}
              >
                <div className="h-14 w-14 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <service.i className="h-6 w-6 text-neutral-700 group-hover:text-[#00c2b2] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-950 mb-3">{service.t}</h3>
                <p className="text-neutral-500 leading-relaxed font-medium">{service.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. METRICS (Bold Typography) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="group">
                <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-neutral-950 mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. METHODOLOGY (Clean Timeline) */}
      <section className="py-32 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">The Growth Architecture.</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-neutral-100 -z-10">
              <motion.div 
                initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, ease: customEase }} viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-[#00c2b2] to-transparent"
              />
            </div>
            
            {[
              { s: "01", t: "Infrastructure Audit", d: "Tear down current analytics and pixels to build a flawless data foundation." },
              { s: "02", t: "Rapid Testing", d: "Deploy high-velocity creative tests to find the lowest CPA winning combinations." },
              { s: "03", t: "Scale & Dominate", d: "Pour budget into winning campaigns while aggressively defending ROAS." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: i * 0.15 }} className="flex flex-col items-center group">
                <div className="h-20 w-20 rounded-2xl bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-xl font-bold text-neutral-900 mb-8 group-hover:border-[#00c2b2] group-hover:text-[#009b8e] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-md">
                  {item.s}
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3 text-center">{item.t}</h3>
                <p className="text-neutral-500 font-medium text-center text-sm leading-relaxed max-w-xs">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES (Light Image Cards) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">Recent Deployments.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "FinTech SaaS", stat: "320% Increase in SQLs", desc: "Restructured Google Ads architecture and implemented landing page personalization, dropping CAC by 45%." },
              { tag: "PropTech Unicorn", stat: "$12M Added to Pipeline", desc: "Scaled Meta Ads spend from $50k to $300k/mo while maintaining a strict 4:1 LTV:CAC ratio." }
            ].map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group relative rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col">
                <div className="h-64 bg-[#FAFAFA] border-b border-neutral-100 p-8 flex flex-col justify-end relative overflow-hidden">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:scale-110 group-hover:text-[#00c2b2] transition-transform duration-700 ease-out">
                     <TrendingUp className="h-64 w-64" />
                   </div>
                   <span className="inline-block px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 font-mono text-xs font-bold mb-4 w-fit shadow-sm relative z-10">{card.tag}</span>
                   <h3 className="text-3xl font-extrabold text-neutral-950 relative z-10">{card.stat}</h3>
                </div>
                <div className="p-8 bg-white flex flex-col flex-1 justify-between">
                  <p className="text-neutral-500 font-medium leading-relaxed mb-8">{card.desc}</p>
                  <div className="flex items-center gap-2 font-bold text-neutral-900 group-hover:text-[#009b8e] transition-colors">
                    Read full case study <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES OVERVIEW */}
      <section className="py-32 px-6 text-center bg-white border-y border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="h-16 w-16 bg-[#00c2b2]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Workflow className="h-8 w-8 text-[#009b8e]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-6">Built for scale, adapted for your vertical.</h2>
            <p className="text-xl text-neutral-500 mb-12 font-medium">While our strategies are born in Silicon Valley, our frameworks mathematically adapt to conquer specific industries.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Real Estate", "Healthcare", "SaaS", "E-Commerce", "Car Detailing", "Water Parks"].map((industry, i) => (
                <span key={i} className="px-6 py-3 rounded-full border border-neutral-200 bg-[#FAFAFA] text-sm font-bold text-neutral-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#00c2b2]/30 transition-all cursor-default">
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Smooth Accordion) */}
      <section className="py-32 px-6 max-w-3xl mx-auto min-h-[50vh]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-950">Frequently Asked Questions</h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.1 }}
              key={index} 
              className="border border-neutral-200 rounded-[1.5rem] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-neutral-900">{faq.question}</span>
                <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3, ease: customEase }}>
                  <ChevronDown className="h-5 w-5 text-[#009b8e]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: customEase }}
                  >
                    <div className="px-6 pb-6 text-neutral-500 font-medium leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CTA (Stark Contrast Anchor) */}
      <section className="py-40 px-6 bg-neutral-950 text-white relative overflow-hidden rounded-t-[3rem] mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        {/* Abstract Glow in CTA */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00c2b2]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            Ready to outpace the market?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl font-medium mb-12 text-neutral-400">
            Stop guessing with your ad budget. Build a deterministic growth machine today.
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