"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

// --- 17 METRIC-DRIVEN TESTIMONIALS --- //
const testimonials = [
  { name: "Sarah Jenkins", role: "CMO, FinFlow", text: "Desklo didn't just lower our CAC by 40%; they entirely rebuilt our tracking architecture. We now have a deterministic growth engine." },
  { name: "David Chen", role: "VP Growth, PropTech AI", text: "The creative velocity is unmatched. They test more hooks in a week than our previous agency did in a quarter." },
  { name: "Elena Rostova", role: "Founder, HealthSync", text: "We scaled from $50k to $250k/mo in ad spend without our CPA flinching. Their Advantage+ framework is lethal." },
  { name: "Marcus Thorne", role: "CEO, DriveDetail", text: "Finally, an agency that speaks in LTV and pipeline revenue instead of 'impressions' and 'clicks'." },
  { name: "Amelia Croft", role: "Director of Marketing, AquaWorld", text: "They treated our ad budget like their own capital. The server-side integration was flawless and immediate." },
  { name: "Julian Bates", role: "Head of Acquisition, SaaSify", text: "In 90 days, Desklo turned Meta from a bleeding channel into our #1 source of high-intent SQLs." },
  { name: "Priya Sharma", role: "Co-Founder, EstateLeads", text: "The b2b lead generation playbook they deployed cut our cost-per-demo in half. Unbelievable precision." },
  { name: "Tom Hollander", role: "CMO, RetailScale", text: "Their creative engineering team understands direct response better than anyone. Highly analytical, zero fluff." },
  { name: "Jessica Winn", role: "VP Marketing, MedTech Pro", text: "Moving to Desklo was the best ROI decision of Q3. The transition was seamless, and the results were instant." },
  { name: "Michael Chang", role: "Director of E-Comm, Nova", text: "They unlocked a level of scale we thought was impossible post-iOS14. True algorithmic media buyers." },
  { name: "Sophie Dubois", role: "Founder, LuxeDetailing", text: "The dashboards, the transparency, the execution. Desklo operates at a level 10x higher than traditional agencies." },
  { name: "Omar Farooq", role: "VP Growth, CloudNet", text: "We were stuck at a plateau. Desklo audited our account, restructured our CAPI, and doubled our lead volume." },
  { name: "Rachel Adams", role: "Marketing Head, Oasis Parks", text: "Their landing page CRO combined with targeted Google Ads resulted in our highest booking season ever." },
  { name: "Victor Vance", role: "CEO, BuildRight", text: "Desklo doesn't guess. Everything is A/B tested, tracked server-side, and optimized for actual closed revenue." },
  { name: "Nina Patel", role: "CMO, FinTech Forward", text: "A rare breed of agency that actually understands deep-funnel B2B SaaS metrics." },
  { name: "Greg Simmons", role: "Head of Digital, MedCare", text: "Clean data, aggressive creative testing, and massive scale. They delivered exactly what they promised." },
  { name: "Lucas Wright", role: "Founder, AutoLuxe", text: "I sleep better at night knowing the Desklo team is managing our acquisition pipeline. Total professionals." },
];

// Split the 17 testimonials into two rows (9 and 8)
const row1 = testimonials.slice(0, 9);
const row2 = testimonials.slice(9, 17);

// A reusable Marquee Row Component
const MarqueeRow = ({ items, direction }: { items: typeof testimonials, direction: "left" | "right" }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex gap-6 pr-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: direction === "left" ? 50 : 45, // Slightly different speeds for a parallax feel
        }}
      >
        {/* Duplicate the items array twice to create a seamless infinite loop */}
        {[...items, ...items].map((testimonial, i) => (
          <div
            key={i}
            className="w-[350px] md:w-[400px] flex-shrink-0 flex flex-col justify-between p-8 rounded-[2rem] bg-white border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,194,178,0.1)] transition-shadow duration-300"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#00c2b2] text-[#00c2b2]" />
                ))}
              </div>
              <p className="text-neutral-600 font-medium leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100">
              <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-neutral-950 text-sm">{testimonial.name}</h4>
                <p className="text-xs font-semibold text-[#009b8e]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20 relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-[#009b8e] mb-6 shadow-sm">
          <Star className="h-4 w-4 fill-[#009b8e]" /> Partner Success
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6">
          Trusted by operators who demand <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009b8e] to-[#00c2b2]">
            mathematical certainty.
          </span>
        </h2>
        <p className="text-lg text-neutral-500 font-medium max-w-2xl mx-auto">
          Don't just take our word for it. Here is what founders, CMOs, and growth leads say about the Desklo infrastructure.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6">
        
        {/* Left & Right Fade Gradients for smooth entrance/exit */}
        <div className="absolute inset-y-0 left-0 w-[10%] md:w-[20%] bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[10%] md:w-[20%] bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Moves Left */}
        <MarqueeRow items={row1} direction="left" />
        
        {/* Row 2: Moves Right */}
        <MarqueeRow items={row2} direction="right" />
        
      </div>
    </section>
  );
}