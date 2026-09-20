"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

// --- DEFAULT DATA (Can be passed as props later) --- //
const defaultFaqs = [
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
  {
    question: "Who designs the ad creatives and landing pages?",
    answer: "We have an in-house team of performance designers and copywriters. We don't just build beautiful assets; we build assets engineered specifically to convert cold traffic, heavily utilizing A/B testing.",
  },
  {
    question: "How do you handle reporting and transparency?",
    answer: "You get access to a live, real-time Looker Studio dashboard that tracks server-side metrics. We also conduct bi-weekly strategy syncs to review creative performance, CPA trends, and scale opportunities.",
  }
];

// Custom Easing for Apple-like smoothness
const customEase = [0.16, 1, 0.3, 1];

interface FaqProps {
  title?: string;
  subtitle?: string;
  faqs?: { question: string; answer: string }[];
}

export default function Faq({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about partnering with Desklo.",
  faqs = defaultFaqs 
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: customEase }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-[#009b8e] mb-6 shadow-sm"
          >
            <MessageCircleQuestion className="h-4 w-4" /> Client Support
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: customEase }}
            className="text-lg text-neutral-500 font-medium"
          >
            {subtitle}
          </motion.p>
        </div>
        
        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: customEase }}
                key={index} 
                className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "bg-white border-[#00c2b2]/30 shadow-[0_8px_30px_rgb(0,194,178,0.08)]" 
                    : "bg-white border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 md:px-8 text-left focus:outline-none group"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-neutral-950" : "text-neutral-700 group-hover:text-neutral-950"}`}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }} 
                    transition={{ duration: 0.4, ease: customEase }}
                    className={`flex-shrink-0 ml-4 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-[#00c2b2]/10" : "bg-neutral-100 group-hover:bg-neutral-200"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 ${isOpen ? "text-[#009b8e]" : "text-neutral-500"}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: customEase }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-neutral-500 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}