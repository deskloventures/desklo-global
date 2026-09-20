"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden selection:bg-[#00c2b2] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column (Spans 4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:opacity-80">
            <span className="sr-only">Desklo Global</span>
            <Image
              src="/Desklo-small-light.webp"
              alt="Desklo Global"
              width={280}
              height={80}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
              An elite performance marketing infrastructure engineering predictable revenue for high-growth companies. We don't run ads; we build acquisition engines.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-auto">
              {[
                { icon: Globe, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:bg-[#00c2b2] hover:text-white hover:border-[#00c2b2] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Services / Performance */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold tracking-tight mb-2">Performance</h4>
              {[
                { name: "Meta Ads", href: "/performance-marketing/meta-ads" },
                { name: "Google Ads", href: "/performance-marketing/google-ads" },
                { name: "Media Buying", href: "/performance-marketing/media-buying" },
                { name: "Landing Pages & CRO", href: "/performance-marketing/landing-pages-cro" },
                { name: "Tracking & Analytics", href: "/performance-marketing/tracking-analytics" },
                { name: "Website Development", href: "/capabilities/website-development" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-[#00c2b2] transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Industries & Case Studies */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold tracking-tight mb-2">Industries</h4>
              {[
                { name: "Real Estate", href: "/industries/real-estate" },
                { name: "Hospitals & Clinics", href: "/industries/hospitals-clinics" },
                { name: "Car Detailing Studios", href: "/industries/car-detailing" },
                { name: "Water Parks", href: "/industries/water-parks" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-[#00c2b2] transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                href="/case-studies"
                className="mt-4 text-white text-sm font-semibold hover:text-[#00c2b2] transition-colors flex items-center gap-1 group w-fit"
              >
                View Case Studies <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold tracking-tight mb-2">Company</h4>
              {[
                { name: "About Us", href: "/about" },
                { name: "Insights", href: "/insights" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-[#00c2b2] transition-colors w-fit flex items-center gap-2"
                >
                  {link.name}
                  {link.name === "Careers" && (
                    <span className="px-1.5 py-0.5 rounded-md bg-[#00c2b2]/10 text-[#00c2b2] text-[10px] font-bold tracking-wider uppercase">
                      Hiring
                    </span>
                  )}
                </Link>
              ))}
              
              <a href="mailto:hello@deskloglobal.com" className="mt-4 flex items-center gap-2 text-neutral-400 text-sm hover:text-white transition-colors w-fit">
                <Mail className="h-4 w-4" />
                hello@deskloglobal.com
              </a>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Desklo Global. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {[
              { name: "Privacy Policy", href: "/legal/privacy-policy" },
              { name: "Terms of Service", href: "/legal/terms" },
              { name: "Cookie Policy", href: "/legal/cookie-policy" },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-neutral-500 text-sm hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}