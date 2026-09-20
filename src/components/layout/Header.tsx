"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, ChevronDown, ArrowRight, Building2, Zap, 
  LayoutDashboard, Globe, TrendingUp, Info, Phone, User 
} from "lucide-react";

const navigation = [
  {
    name: "Performance",
    href: "#",
    megaMenu: true,
    items: [
      { name: "Meta Ads", href: "/meta-ads", desc: "Scale with advanced social algorithms" },
      { name: "Google Ads", href: "/google-ads", desc: "Capture high-intent search traffic" },
      { name: "Media Buying", href: "/media-buying", desc: "Strategic placements across networks" },
      { name: "Landing Pages & CRO", href: "/landing-pages-cro", desc: "Convert clicks into revenue" },
      { name: "Tracking & Analytics", href: "/tracking-analytics", desc: "Data-driven attribution models" },
    ],
  },
  {
    name: "Capabilities",
    href: "#",
    megaMenu: true,
    items: [
      { name: "Website Development", href: "/website-development", desc: "High-performance marketing assets" },
      { name: "CRO", href: "/cro", desc: "Continuous conversion optimization" },
      { name: "Analytics & Tracking", href: "/analytics-tracking", desc: "Full-funnel visibility" },
      { name: "PR", href: "/pr", desc: "Strategic narrative building" },
      { name: "Influencer Engagement", href: "/influencer-engagement", desc: "Creator-led growth strategies" },
    ],
  },
  {
    name: "Industries",
    href: "#",
    dropdown: [
      { name: "Real Estate", href: "/real-estate", icon: Building2 },
      { name: "Hospitals & Clinics", href: "/hospitals-clinics", icon: Globe },
      { name: "Car Detailing", href: "/car-detailing", icon: Zap },
      { name: "Water Parks", href: "/water-parks", icon: LayoutDashboard },
    ],
  },
  { name: "Case Studies", href: "/case-study" },
  { name: "Insights", href: "/insights" },
  {
    name: "Company",
    href: "#",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Life at Desklo", href: "/life-at-desklo" },
      { name: "Careers", href: "/careers" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [revenue, setRevenue] = useState(10085350000);

  // Scroll effect for header transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when side menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Live counter animation
  useEffect(() => {
    const target = 10085355239;
    const interval = setInterval(() => {
      setRevenue((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 213;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Top Bar (Full Width) */}
      <div 
        className={`hidden lg:flex w-full bg-neutral-50 border-b border-neutral-200/60 transition-all duration-500 ease-in-out origin-top ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-12 opacity-100"
        }`}
      >
        <div className="w-full flex h-full items-center justify-between px-6 lg:px-12">
          
          {/* Trust Signals */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              Revenue Driven For Our Clients
            </span>
            <div className="flex items-center gap-2 group relative cursor-help">
              <TrendingUp className="h-4 w-4 text-[#00c2b2]" />
              <span className="text-[15px] font-extrabold text-neutral-900 tracking-tight">
                ${revenue.toLocaleString()}+
              </span>
              <Info className="h-4 w-4 text-neutral-400 hover:text-neutral-900 transition-colors" />
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-neutral-900 text-white text-xs font-medium rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                Verified gross revenue generated for our partners across all active performance campaigns.
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Links & Phone */}
          <div className="flex items-center gap-8">
            <Link 
              href="/login" 
              className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <User className="h-4 w-4" />
              Client Login
            </Link>
            <div className="h-5 w-px bg-neutral-300"></div>
            <a 
              href="tel:8813922770" 
              className="flex items-center gap-2 text-[15px] font-bold text-neutral-900 hover:text-[#00c2b2] transition-colors group"
            >
              <Phone className="h-4 w-4 text-[#00c2b2] group-hover:animate-bounce" />
              8813922770
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (Full Width & Dynamic) */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-white border-b border-neutral-200/50"
        }`}
      >
        <nav 
          className={`relative w-full mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled ? "h-16 px-4 lg:px-8" : "h-24 px-6 lg:px-12"
          }`} 
          aria-label="Global"
        >
          
          {/* Logo (Slides left seamlessly on scroll padding change) */}
          <div className={`flex z-20 transition-transform duration-500 ${scrolled ? "scale-95 origin-left" : "scale-100"}`}>
            <Link href="/" className="p-1.5 transition-transform hover:opacity-80">
              <span className="sr-only">Desklo Global</span>
              <Image
                src="/desklo-dark.webp"
                alt="Desklo Global"
                width={150}
                height={42}
                className="h-8 md:h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation (Absolutely centered to ensure no overflow on mega menus) */}
          <div 
            className={`hidden lg:flex items-center gap-x-8 absolute left-1/2 -translate-x-1/2 h-full transition-all duration-500 ease-in-out
              ${scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}
            `}
          >
            {navigation.map((item) => (
              <div key={item.name} className="relative group h-full flex items-center">
                <Link
                  href={item.href}
                  className="flex items-center gap-x-1.5 text-[15px] font-semibold tracking-tight text-neutral-700 hover:text-[#00c2b2] transition-colors py-2"
                >
                  {item.name}
                  {(item.megaMenu || item.dropdown) && (
                    <ChevronDown className="h-4 w-4 text-neutral-400 group-hover:text-[#00c2b2] transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.megaMenu && (
                  <div className="absolute top-[85px] left-1/2 -translate-x-1/2 w-max max-w-3xl opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgb(0,0,0,0.1)] ring-1 ring-neutral-200/60 p-8">
                      <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-[650px]">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="group/item flex flex-col gap-1.5 rounded-xl p-3 -m-3 transition-all hover:bg-neutral-50"
                          >
                            <span className="text-[15px] font-bold text-neutral-900 flex items-center gap-2">
                              {subItem.name}
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#00c2b2]" />
                            </span>
                            <span className="text-sm text-neutral-500 leading-relaxed font-medium">
                              {subItem.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Standard Dropdown */}
                {item.dropdown && (
                  <div className="absolute top-[85px] left-1/2 -translate-x-1/2 w-64 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgb(0,0,0,0.1)] ring-1 ring-neutral-200/60 p-3">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#00c2b2] transition-colors"
                        >
                          {subItem.icon && <subItem.icon className="h-5 w-5 text-neutral-400 group-hover:text-[#00c2b2]" />}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Controls (CTA & Hamburger) - Always Visible */}
          <div className="flex items-center z-20 gap-3 lg:gap-4">
            
            {/* Desktop Full CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex group relative items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 lg:px-7 py-2.5 lg:py-3 text-[14px] lg:text-[15px] font-semibold text-white transition-all hover:bg-[#00c2b2] hover:shadow-lg hover:shadow-[#00c2b2]/20 focus:outline-none"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile Compact CTA Button */}
            <Link
              href="/contact"
              className="sm:hidden group relative inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[#00c2b2]"
            >
              <span>Book Call</span>
            </Link>

            {/* Circular Hamburger Menu */}
            {/* Mobile: Always visible. Desktop: Hidden unless scrolled */}
            <div className={`flex items-center transition-all duration-500 
              ${scrolled ? "lg:w-11 lg:opacity-100 lg:translate-x-0" : "lg:w-0 lg:opacity-0 lg:translate-x-8 lg:pointer-events-none"}
            `}>
              <button
                type="button"
                className="group flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition-all duration-300 hover:bg-[#00c2b2] hover:scale-105 active:scale-95 focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-5 w-5 transition-transform group-hover:rotate-180 duration-500" aria-hidden="true" />
              </button>
            </div>

          </div>

        </nav>
      </div>

      {/* Slide-out Menu Panel (Handles both Mobile AND Scrolled Desktop) */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Blurred Backdrop */}
        <div 
          className={`fixed inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 shadow-2xl transition-transform duration-500 ease-[0.32,0.72,0,1] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-12 mb-6">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Desklo Global</span>
              <Image
                src="/desklo-dark.webp"
                alt="Desklo Global"
                width={130}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-all hover:bg-neutral-200 hover:text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-5 w-5 transition-transform group-hover:rotate-90 duration-300" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-2 flow-root h-[calc(100vh-160px)] overflow-y-auto pb-20 no-scrollbar">
            <div className="space-y-7 py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.megaMenu || item.dropdown ? (
                    <div className="space-y-4">
                      <div className="text-[13px] font-bold tracking-widest text-neutral-400 uppercase">
                        {item.name}
                      </div>
                      <div className="space-y-2 border-l-2 border-neutral-100 pl-5 ml-2">
                        {(item.items || item.dropdown)?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-[16px] font-semibold text-neutral-600 hover:text-[#00c2b2] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xl font-bold text-neutral-900 hover:text-[#00c2b2] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Menu Footer Actions */}
            <div className="pt-8 mt-8 border-t border-neutral-100 flex flex-col gap-5">
              <a 
                href="tel:8813922770" 
                className="flex items-center justify-center gap-2.5 text-lg font-bold text-neutral-900 bg-neutral-50 py-4 rounded-2xl hover:bg-neutral-100 transition-colors"
              >
                <Phone className="h-5 w-5 text-[#00c2b2]" />
                8813922770
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-4 py-4 text-[16px] font-bold text-white shadow-lg shadow-neutral-900/20 hover:bg-[#00c2b2] hover:shadow-[#00c2b2]/30 transition-all duration-300"
              >
                Book a Strategy Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}