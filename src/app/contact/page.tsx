"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Terminal, 
  Globe2, 
  Clock,
  CheckCircle2
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

export default function ContactPage() {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    spend: "",
    message: ""
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
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#00c2b2]/5 blur-[120px] pointer-events-none -z-10"></div>

      <section className="px-6 py-12 lg:py-24 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: Copy & Contact Info */}
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="lg:col-span-5 flex flex-col"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-bold text-[#009b8e] mb-8 shadow-sm w-fit">
              <Terminal className="h-4 w-4" /> System_Connect
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-950 leading-[1.05] mb-6">
              Initiate a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">strategy audit.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-neutral-500 font-medium leading-relaxed mb-12">
              Skip the standard agency pitch. We audit your infrastructure, identify the data leakage, and map out a deterministic growth model for your next funding round.
            </motion.p>

            {/* What happens next */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] border border-neutral-200 shadow-sm mb-12">
              <h3 className="font-bold text-neutral-950 mb-6 text-lg">The Onboarding Protocol</h3>
              <ul className="space-y-6">
                {[
                  { title: "Discovery & Qualification", desc: "We review your metrics to ensure mutual fit." },
                  { title: "Technical Infrastructure Audit", desc: "Deep dive into your pixels, CAPI, and current account structure." },
                  { title: "Deployment Blueprint", desc: "A mathematical roadmap to scale your CAC/LTV ratio." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-[#FAFAFA] border border-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-400">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{step.title}</h4>
                      <p className="text-neutral-500 text-sm mt-1 font-medium">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Direct Contact */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 mt-auto">
              <div>
                <div className="flex items-center gap-2 text-neutral-950 font-bold mb-2">
                  <Mail className="h-4 w-4 text-[#00c2b2]" /> Direct Inquiries
                </div>
                <a href="mailto:hello@deskloglobal.com" className="text-neutral-500 hover:text-[#009b8e] transition-colors font-medium">
                  hello@deskloglobal.com
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2 text-neutral-950 font-bold mb-2">
                  <Globe2 className="h-4 w-4 text-[#00c2b2]" /> Global HQ
                </div>
                <p className="text-neutral-500 font-medium">
                  San Francisco, CA<br />Remote Worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-neutral-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
              
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="h-20 w-20 bg-[#00c2b2]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#00c2b2]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-neutral-950 mb-4">Transmission Received.</h3>
                  <p className="text-neutral-500 font-medium max-w-sm mb-8">
                    Our engineering team is reviewing your infrastructure. We will be in touch within 24 hours to schedule your audit.
                  </p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="text-sm font-bold text-[#009b8e] hover:text-neutral-950 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-neutral-700 mb-2">First Name</label>
                      <input 
                        type="text" id="firstName" required
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-4 focus:ring-[#00c2b2]/10 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-neutral-700 mb-2">Last Name</label>
                      <input 
                        type="text" id="lastName" required
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-4 focus:ring-[#00c2b2]/10 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-2">Work Email</label>
                    <input 
                      type="email" id="email" required
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-4 focus:ring-[#00c2b2]/10 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                      placeholder="jane@unicorn-startup.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-bold text-neutral-700 mb-2">Company Website</label>
                    <input 
                      type="url" id="website" required
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-4 focus:ring-[#00c2b2]/10 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="spend" className="block text-sm font-bold text-neutral-700 mb-2">Current Monthly Ad Spend</label>
                    <div className="relative">
                      <select 
                        id="spend" required
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-4 focus:ring-[#00c2b2]/10 outline-none transition-all text-neutral-900 font-medium appearance-none"
                        value={formData.spend}
                        onChange={(e) => setFormData({...formData, spend: e.target.value})}
                      >
                        <option value="" disabled>Select your scale...</option>
                        <option value="under_25k">Under $25,000 / mo</option>
                        <option value="25k_100k">$25,000 - $100,000 / mo</option>
                        <option value="100k_500k">$100,000 - $500,000 / mo</option>
                        <option value="over_500k">$500,000+ / mo</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <ArrowRight className="h-4 w-4 text-neutral-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-neutral-700 mb-2">Primary Growth Bottleneck</label>
                    <textarea 
                      id="message" required rows={4}
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-4 focus:ring-[#00c2b2]/10 outline-none transition-all text-neutral-900 font-medium placeholder:text-neutral-400 resize-none"
                      placeholder="e.g. Our Meta CPA has doubled since iOS14, and we cannot scale past $50k/mo spend without breaking ROAS..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={formState === "submitting"}
                      className="w-full group relative inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-8 text-lg font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:bg-neutral-900 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {formState === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <Terminal className="h-5 w-5 animate-pulse text-[#00c2b2]" /> Processing...
                        </span>
                      ) : (
                        <>
                          Request Audit <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 text-[#00c2b2]" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs font-semibold text-neutral-400 mt-4 flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3" /> Average response time: Under 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}