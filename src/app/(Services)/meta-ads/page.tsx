"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Gauge, 
  Network, 
  Target, 
  TrendingUp,
  Zap,
  ShieldCheck,
  BarChart3
} from "lucide-react";
import Testimonials from "@/components/ui/testimonial";
import Faq from "@/components/ui/Faq";

// --- ANIMATION VARIANTS --- //
const customEase = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function MetaAdsServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "",
    ranBefore: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-neutral-900 overflow-hidden pt-24">
      
      {/* 1. HERO SECTION WITH LEAD FORM */}
      <section className="relative px-6 py-12 lg:py-24 max-w-7xl mx-auto w-full z-10">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#00c2b2]/5 blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy & Value Prop */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-[#009b8e] mb-6 w-fit shadow-sm">
              <Network className="h-4 w-4" /> Performance Meta Ads
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-neutral-950 leading-[1.05] mb-6">
              Algorithmic dominance on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">Meta.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed mb-8 max-w-lg">
              We don't rely on basic interest targeting. We integrate server-side tracking, rapid creative testing, and machine learning to engineer predictable customer acquisition at scale.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {[
                "Advanced CAPI (Conversions API) Integration",
                "High-Velocity Creative Testing Framework",
                "Strict LTV:CAC Optimization Constraints"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-700 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-[#00c2b2]" /> {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Lead Capture Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: customEase }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c2b2]/20 to-transparent blur-2xl -z-10 rounded-[2rem]"></div>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <h3 className="text-2xl font-bold text-neutral-950 mb-2">Request an Audit</h3>
              <p className="text-neutral-500 text-sm mb-8 font-medium">Find out exactly how much revenue your current pixel architecture is leaking.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name</label>
                  <input type="text" id="name" required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all"
                    placeholder="Jane Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1.5">Phone Number</label>
                    <input type="tel" id="phone" required
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-neutral-700 mb-1.5">Company Website</label>
                    <input type="url" id="website" required
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all"
                      placeholder="https://yourcompany.com"
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ranBefore" className="block text-sm font-semibold text-neutral-700 mb-1.5">Have you run Meta Ads before?</label>
                  <select id="ranBefore" required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 focus:bg-white focus:border-[#00c2b2] focus:ring-2 focus:ring-[#00c2b2]/20 outline-none transition-all appearance-none text-neutral-700"
                    onChange={(e) => setFormData({...formData, ranBefore: e.target.value})}
                  >
                    <option value="" disabled selected>Select an option...</option>
                    <option value="yes_scaling">Yes, actively spending $25k+/mo</option>
                    <option value="yes_testing">Yes, testing with small budgets</option>
                    <option value="no">No, starting from scratch</option>
                  </select>
                </div>

                <button type="submit" className="w-full mt-4 group relative inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-neutral-950 px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-neutral-900 hover:shadow-xl hover:shadow-[#00c2b2]/10">
                  Submit Request <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#00c2b2]" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <Testimonials />

      {/* 2. THE PARADIGM SHIFT (SEO Rich Content) */}
      <section className="py-24 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-6">
            The Death of Traditional Targeting
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-neutral-500 leading-relaxed font-medium">
            Post iOS-14, the Meta Ads ecosystem fundamentally changed. Brands relying on granular interest targeting and basic pixel configurations are bleeding capital. Today, Meta's algorithm is a machine learning powerhouse that requires two things to scale: <strong className="text-neutral-900">flawless server-side data</strong> and <strong className="text-neutral-900">unrelenting creative velocity.</strong> We build the infrastructure to feed the algorithm exactly what it needs to find your highest LTV customers.
          </motion.p>
        </div>
      </section>

      {/* 3. ENGINEERING / FEATURES (Bento Box Design) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">Our Meta Engineering.</h2>
            <p className="text-neutral-500 mt-4 text-xl">How we out-compete on the most competitive auction network.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-2 p-8 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow">
              <Database className="h-10 w-10 text-[#009b8e] mb-6" />
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">Conversions API (CAPI) Architecture</h3>
              <p className="text-neutral-500 leading-relaxed font-medium">
                We bypass browser restrictions by establishing a direct server-to-server connection between your database and Meta. By passing deep-funnel conversion events (like SQLs, closed-won deals, or high-LTV purchases) back to the platform, we train the algorithm to optimize for actual revenue, not just cheap clicks.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-[2rem] bg-[#00c2b2] border border-[#009b8e] shadow-sm text-neutral-950">
              <Zap className="h-10 w-10 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-3">Creative Velocity</h3>
              <p className="text-neutral-900/80 leading-relaxed font-medium">
                Creative is the new targeting. We design, deploy, and analyze dozens of ad variations weekly, using modular creative frameworks to find winning hooks and visual patterns.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow">
              <Gauge className="h-10 w-10 text-[#009b8e] mb-6" />
              <h3 className="text-xl font-bold text-neutral-950 mb-3">Advantage+ & Liquidity</h3>
              <p className="text-neutral-500 leading-relaxed font-medium">
                Consolidating account structures to maximize signal liquidity, allowing Meta's AI to exit the learning phase faster and stabilize CPA at higher daily spends.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-2 p-8 rounded-[2rem] bg-neutral-950 border border-neutral-800 shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Target className="h-48 w-48" /></div>
              <ShieldCheck className="h-10 w-10 text-[#00c2b2] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">Incrementality & Attribution</h3>
              <p className="text-neutral-400 leading-relaxed font-medium max-w-2xl relative z-10">
                We don't trust platform-reported numbers blindly. We utilize hold-out tests, post-purchase surveys, and custom attribution modeling to understand the true incremental lift Meta Ads bring to your bottom line, ensuring profitable scaling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE PROOF (Data Card) */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[3rem] bg-white border border-neutral-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-neutral-600 mb-6 uppercase tracking-wider">
                  Case Study Highlight
                </div>
                <h3 className="text-3xl font-bold text-neutral-950 mb-4">Scaling a Series B SaaS from $50k to $300k/mo on Meta.</h3>
                <p className="text-neutral-500 font-medium mb-6">By implementing a robust CAPI architecture and transitioning to a broad-targeting creative strategy, we reduced their CAC by 38% while scaling spend 6x within 4 months.</p>
                <div className="flex items-center gap-2 font-bold text-[#009b8e] hover:text-neutral-950 transition-colors cursor-pointer w-fit">
                  Read full breakdown <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-1 gap-6 w-full md:w-auto">
                 <div className="bg-[#FAFAFA] border border-neutral-100 rounded-2xl p-6 text-center">
                   <div className="text-4xl font-extrabold text-neutral-950 mb-1">-38%</div>
                   <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Customer Acq. Cost</div>
                 </div>
                 <div className="bg-[#00c2b2]/10 border border-[#00c2b2]/20 rounded-2xl p-6 text-center">
                   <div className="text-4xl font-extrabold text-[#009b8e] mb-1">6x</div>
                   <div className="text-sm font-bold text-neutral-600 uppercase tracking-wider">Budget Scaled</div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 5. SEO DEEP DIVE / TECHNICAL FAQ */}
      <section className="py-32 px-6 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 mb-4">Meta Ads Technical Specifications</h2>
            <p className="text-neutral-500 font-medium">To scale efficiently in today's landscape, technical precision is non-negotiable. Here are the core components of our Meta deployment strategy.</p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Advantage+ Shopping Campaigns (ASC)",
                desc: "For E-commerce and D2C brands, we leverage ASC to utilize Meta's most advanced machine learning models. We strategically balance budget allocation between new customer acquisition and retention caps, ensuring incremental growth rather than just retargeting existing audiences."
              },
              {
                title: "B2B Lead Generation on Meta",
                desc: "Meta is highly underutilized for B2B. By using lookalike modeling based on your highest LTV CRM contacts, combined with gated high-value content (Whitepapers, Toolkits), we generate Marketing Qualified Leads (MQLs) often at a lower CAC than LinkedIn."
              },
              {
                title: "Dynamic Creative Optimization (DCO)",
                desc: "We feed Meta's algorithm multiple variables—primary text, headlines, images, and videos—allowing the system to dynamically assemble and serve the most relevant combination to the specific user at the exact moment of impression."
              },
              {
                title: "Account Liquidity & Phase Exits",
                desc: "A common mistake is fracturing budgets across too many campaigns. We structure accounts for maximum signal liquidity, ensuring campaigns achieve the required 50 conversion events per week to exit the 'Learning Phase' and unlock stabilized CPA."
              }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <BarChart3 className="h-6 w-6 text-[#00c2b2]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-neutral-950 mb-2">{item.title}</h4>
                  <p className="text-neutral-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                <Faq />


      {/* 6. FINAL CTA */}
      <section className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00c2b2]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
            Ready to scale your Meta spend profitably?
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-bold text-neutral-950 transition-transform hover:scale-105 shadow-xl">
              Request an Audit <ArrowRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-[#009b8e]" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}