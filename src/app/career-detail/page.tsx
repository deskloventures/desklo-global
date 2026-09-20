"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Terminal, 
  Globe2, 
  Clock, 
  LineChart, 
  CheckCircle2, 
  Briefcase,
  Paperclip
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

// --- MOCK DATA (Typically fetched via API based on [id]) --- //
const job = {
  title: "Senior Meta Ads Engineer",
  department: "Growth Engineering",
  location: "Remote (Global)",
  type: "Full-Time",
  salary: "$120k - $160k + Performance Equity",
  description: "We are seeking a highly technical media buyer who understands that Meta is no longer a social network—it is a machine learning algorithm. You will take ownership of multi-million dollar quarterly budgets for Series A+ SaaS and E-Commerce unicorns.",
  outcomes: [
    "Manage and scale $1M - $5M/month in Meta Ads spend across 3-4 enterprise accounts while strictly maintaining client LTV:CAC targets.",
    "Architect and deploy Advantage+ Shopping Campaigns (ASC) and broad-targeting structures to maximize algorithmic liquidity.",
    "Partner with the Data Engineering team to ensure flawless server-side API (CAPI) event match quality and offline conversion tracking.",
    "Write technical creative briefs for the Motion Design team based on mathematical analysis of current hook rates and hold rates."
  ],
  requirements: [
    "4+ years managing high-scale Meta Ads ($500k+/mo minimum). You must have scaled accounts, not just maintained them.",
    "Deep understanding of the post-iOS14 tracking ecosystem (CAPI, UTM architectures, server-to-server tracking).",
    "Extreme proficiency in Excel/Google Sheets, Looker Studio, or SQL for data manipulation and analysis.",
    "You communicate in metrics (CAC, ROAS, MER, LTV, Contribution Margin), not vanity metrics (CPC, CTR).",
    "Absolute autonomy. We do not micro-manage. You are expected to own your pipeline and defend your data."
  ]
};

export default function JobDetailPage() {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    portfolio: "",
    pitch: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden pt-24 selection:bg-[#00c2b2] selection:text-white">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#00c2b2]/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 mask-image:linear-gradient(to_bottom,white,transparent) -z-10"></div>

      <section className="px-6 py-12 lg:py-20 max-w-7xl mx-auto w-full">
        
        {/* Breadcrumb */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <Link href="/careers" className="group inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-neutral-950 transition-colors">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Open Requisitions
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* LEFT COLUMN: Job Details */}
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="lg:col-span-7"
          >
            {/* Header Area */}
            <div className="mb-16 border-b border-neutral-200 pb-12">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-600 font-mono text-xs font-bold shadow-sm">
                  {job.department}
                </span>
                <span className="px-3 py-1.5 rounded-md bg-[#00c2b2]/10 border border-[#00c2b2]/20 text-[#009b8e] font-mono text-xs font-bold">
                  {job.type}
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-950 leading-[1.1] mb-8">
                {job.title}
              </motion.h1>
              
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-sm font-bold text-neutral-500">
                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-[#00c2b2]" /> {job.location}</div>
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-[#00c2b2]" /> {job.salary}</div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-extrabold text-neutral-950 mb-4">The Mission</h2>
              <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                {job.description}
              </p>
            </motion.div>

            {/* Outcomes */}
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-extrabold text-neutral-950 mb-6">Expected Outcomes</h2>
              <ul className="space-y-4">
                {job.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0"><CheckCircle2 className="h-5 w-5 text-[#00c2b2]" /></div>
                    <span className="text-neutral-600 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-extrabold text-neutral-950 mb-6">Technical Prerequisites</h2>
              <ul className="space-y-4">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0"><Terminal className="h-5 w-5 text-neutral-400" /></div>
                    <span className="text-neutral-600 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Sticky Application Form */}
          <div className="lg:col-span-5 h-full relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
              className="sticky top-32 bg-white p-8 md:p-10 rounded-[2.5rem] border border-neutral-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="h-20 w-20 bg-[#00c2b2]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#00c2b2]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-950 mb-3">Application Received.</h3>
                  <p className="text-neutral-500 font-medium text-sm mb-8">
                    Our engineering leads are reviewing your telemetry. If your background aligns with our current deployment needs, we will reach out within 48 hours.
                  </p>
                  <Link href="/careers" className="text-sm font-bold text-[#009b8e] hover:text-neutral-950 transition-colors">
                    &larr; Return to Careers
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-extrabold text-neutral-950 mb-2">Apply for this role</h3>
                  <p className="text-neutral-500 text-sm font-medium mb-8">Submit your details below. No cover letters required; let your numbers speak.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" id="name" required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-1.5">Email Address</label>
                      <input 
                        type="email" id="email" required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-bold text-neutral-700 mb-1.5">LinkedIn Profile URL</label>
                      <input 
                        type="url" id="linkedin" required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                        placeholder="https://linkedin.com/in/..."
                        value={formData.linkedin}
                        onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="pitch" className="block text-sm font-bold text-neutral-700 mb-1.5">The Pitch (Optional)</label>
                      <textarea 
                        id="pitch" rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400 resize-none"
                        placeholder="Briefly describe a campaign you scaled, the ROAS achieved, and the bottleneck you overcame..."
                        value={formData.pitch}
                        onChange={(e) => setFormData({...formData, pitch: e.target.value})}
                      />
                    </div>

                    {/* Fake Resume Upload Button (UI only) */}
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-1.5">Resume / CV</label>
                      <div className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 border-dashed hover:bg-neutral-50 hover:border-neutral-300 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm font-bold text-neutral-500">
                        <Paperclip className="h-4 w-4" /> Upload PDF
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={formState === "submitting"}
                        className="w-full group relative inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-neutral-950 px-8 text-base font-bold text-white shadow-md transition-all hover:bg-neutral-900 disabled:opacity-70"
                      >
                        {formState === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <Terminal className="h-4 w-4 animate-pulse text-[#00c2b2]" /> Transmitting...
                          </span>
                        ) : (
                          <>
                            Submit Application <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#00c2b2]" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}