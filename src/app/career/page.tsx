"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Clock,
  Cpu, 
  Globe2, 
  Zap, 
  Code2,
  Laptop,
  GraduationCap,
  HeartPulse,
  LineChart,
  ArrowUpRight
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

// --- DATA --- //
const perks = [
  { icon: Globe2, title: "Work From Anywhere", desc: "100% remote asynchronous culture. Work from San Francisco, London, or Bali." },
  { icon: Laptop, title: "Elite Hardware", desc: "Top-spec MacBook Pro, dual monitors, and a generous home office stipend." },
  { icon: HeartPulse, title: "Premium Healthcare", desc: "Comprehensive global health, dental, and vision coverage for you and your dependents." },
  { icon: GraduationCap, title: "Continuous Compute", desc: "$3,000 annual learning stipend for courses, conferences, or executive coaching." },
];

const departments = ["All Roles", "Growth Engineering", "Analytics", "Creative", "Operations"];

const openRoles = [
  { id: 1, title: "Senior Meta Ads Engineer", dept: "Growth Engineering", location: "Remote (Global)", type: "Full-Time" },
  { id: 2, title: "Conversion Architect (CRO)", dept: "Growth Engineering", location: "Remote (US/EU)", type: "Full-Time" },
  { id: 3, title: "Data Scientist, Marketing Analytics", dept: "Analytics", location: "Remote (Global)", type: "Full-Time" },
  { id: 4, title: "Performance Motion Designer", dept: "Creative", location: "Remote (Global)", type: "Contract to Hire" },
  { id: 5, title: "Client Strategy Lead (B2B SaaS)", dept: "Operations", location: "Remote (US Only)", type: "Full-Time" },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All Roles");
  const heroRef = useRef(null);
  
  // Parallax Hero
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const filteredRoles = openRoles.filter(role => activeDept === "All Roles" || role.dept === activeDept);

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden pt-24 selection:bg-[#00c2b2] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative px-6 py-32 md:py-40 max-w-7xl mx-auto w-full z-10 min-h-[85vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-[#00c2b2]/5 blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 mask-image:linear-gradient(to_bottom,white,transparent) -z-10"></div>
        
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-bold text-[#009b8e] mb-8 shadow-sm">
              <Terminal className="h-4 w-4" /> root@desklo-global:~/careers#
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter text-neutral-950 leading-[0.95] mb-8">
              We don't hire marketers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">We hire engineers.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-neutral-500 font-medium leading-tight max-w-3xl mb-12">
              Join the elite infrastructure team building scalable, algorithmic acquisition engines for the world's fastest-growing startups.
            </motion.p>

            <motion.div variants={fadeUp}>
              <button 
                onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex h-16 items-center justify-center gap-2 rounded-full bg-neutral-950 px-10 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-neutral-900 hover:shadow-[#00c2b2]/20"
              >
                View Open Positions <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 text-[#00c2b2]" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE CULTURE (Bento Grid) */}
      <section className="py-32 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4">The Operating Ethos.</h2>
            <p className="text-xl text-neutral-500 font-medium">No red tape. No vanity metrics. Just execution.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} 
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Bento Item 1 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-[#FAFAFA] border border-neutral-200 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[350px] group hover:border-[#00c2b2]/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                <Code2 className="h-64 w-64 text-[#00c2b2]" />
              </div>
              <h3 className="text-3xl font-extrabold text-neutral-950 mb-4 relative z-10">Data Dictates Direction</h3>
              <p className="text-neutral-500 font-medium text-lg max-w-lg relative z-10">
                We leave our egos at the door. We don't care about subjective opinions on creative or strategy; we care about what the server-side incrementality data proves is profitable.
              </p>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div variants={fadeUp} className="bg-[#00c2b2] rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[350px] text-neutral-950 shadow-[0_20px_40px_-15px_rgba(0,194,178,0.3)]">
              <Zap className="h-10 w-10 text-white mb-6" />
              <div>
                <h3 className="text-2xl font-extrabold mb-4 text-neutral-950">High Velocity</h3>
                <p className="text-neutral-950/80 font-medium">
                  Bureaucracy kills ROAS. We operate in small, autonomous pods empowered to deploy, test, and break things at Silicon Valley speed.
                </p>
              </div>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div variants={fadeUp} className="bg-neutral-950 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[350px] text-white">
              <Globe2 className="h-10 w-10 text-[#00c2b2] mb-6" />
              <div>
                <h3 className="text-2xl font-extrabold mb-4">Default Global</h3>
                <p className="text-neutral-400 font-medium">
                  Talent has no borders. We are a distributed team operating asynchronously. We measure output, not hours spent in a Slack channel.
                </p>
              </div>
            </motion.div>

            {/* Bento Item 4 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-white border border-neutral-200 shadow-sm rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-center">
              <Cpu className="h-10 w-10 text-[#009b8e] mb-6" />
              <h3 className="text-3xl font-extrabold text-neutral-950 mb-4">Ownership at Scale</h3>
              <p className="text-neutral-500 font-medium text-lg max-w-2xl">
                Every Growth Engineer at Desklo is handed the keys to multi-million dollar budgets. You aren't a cog in a machine; you are the architect of the growth engine. If you win, you share in the upside.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. PERKS (Icon Grid) */}
      <section className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4">Tier-1 Infrastructure.</h2>
            <p className="text-xl text-neutral-500 font-medium">We demand elite performance, so we provide elite resources.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {perks.map((perk, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white border border-neutral-200 rounded-[2rem] p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-[#FAFAFA] border border-neutral-100 flex items-center justify-center mb-6">
                  <perk.icon className="h-6 w-6 text-[#009b8e]" />
                </div>
                <h3 className="text-xl font-extrabold text-neutral-950 mb-3">{perk.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed text-sm">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. OPEN ROLES (Interactive Job Board) */}
      <section id="open-roles" className="py-32 px-6 bg-white border-t border-neutral-200 min-h-screen">
        <div className="max-w-5xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6">Open Requisitions</h2>
            
            {/* Department Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeDept === dept 
                      ? "text-white shadow-md" 
                      : "bg-[#FAFAFA] border border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {activeDept === dept && (
                    <motion.div
                      layoutId="activeDeptBg"
                      className="absolute inset-0 bg-neutral-950 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job List */}
          <motion.div layout className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredRoles.map((role) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  transition={{ duration: 0.4, ease: customEase }}
                  key={role.id}
                >
                  <Link 
                    href={`/careers/${role.id}`} // Assuming dynamic routing later
                    className="group block bg-white border border-neutral-200 rounded-[1.5rem] p-6 md:p-8 hover:border-[#00c2b2]/50 hover:shadow-[0_10px_40px_-15px_rgba(0,194,178,0.15)] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      
                      {/* Left: Role Info */}
                      <div>
                        <h3 className="text-2xl font-extrabold text-neutral-950 mb-3 group-hover:text-[#009b8e] transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                          <span className="flex items-center gap-1.5 text-neutral-500">
                            <LineChart className="h-4 w-4" /> {role.dept}
                          </span>
                          <span className="hidden md:inline text-neutral-300">•</span>
                          <span className="flex items-center gap-1.5 text-neutral-500">
                            <Globe2 className="h-4 w-4" /> {role.location}
                          </span>
                          <span className="hidden md:inline text-neutral-300">•</span>
                          <span className="flex items-center gap-1.5 text-neutral-500">
                            <Clock className="h-4 w-4" /> {role.type}
                          </span>
                        </div>
                      </div>

                      {/* Right: CTA Button */}
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAFAFA] border border-neutral-200 text-neutral-400 group-hover:bg-[#00c2b2] group-hover:border-[#00c2b2] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {filteredRoles.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="py-12 text-center text-neutral-500 font-medium"
                >
                  No open requisitions for this department at the moment.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 5. GENERAL APPLICATION CTA */}
      <section className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden rounded-t-[3rem] mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00c2b2]/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Don't see your exact role?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl font-medium mb-12 text-neutral-400">
            We are always looking for outlier talent. If you can move the needle on pipeline revenue or algorithmic efficiency, pitch us.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link href="mailto:careers@deskloglobal.com" className="group relative inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[#00c2b2] px-10 text-lg font-bold text-neutral-950 transition-transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(0,194,178,0.5)]">
              Send your pitch <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
