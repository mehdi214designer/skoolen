'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const NAV_H = 80;

const SERVICES = [
  {
    num: "01",
    title: "Website Design & Development",
    desc: "Clean, modern, responsive websites built with WordPress, Webflow, Framer, or custom code — designed with clarity, speed, and usability in mind.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop",
    alt: "Developer working on website design on a MacBook",
  },
  {
    num: "02",
    title: "App Development",
    desc: "Custom web apps, client portals, booking systems, and business dashboards that help your users and team get things done faster.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80&auto=format&fit=crop",
    alt: "Mobile app development on a smartphone screen",
  },
  {
    num: "03",
    title: "Workflow Automation",
    desc: "From forms and CRM to emails and onboarding flows — we connect the tools behind your daily work so your business moves smoother.",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1400&q=80&auto=format&fit=crop",
    alt: "Interconnected data flow representing workflow automation",
  },
  {
    num: "04",
    title: "Website Audit & Optimization",
    desc: "A thorough review of your website's speed, UX, SEO, mobile experience, and conversion flow — then we fix what actually matters.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
    alt: "Analytics dashboard showing website performance metrics",
  },
  {
    num: "05",
    title: "Website Management",
    desc: "Ongoing updates, monitoring, improvements, content support, bug fixes, and optimization to keep your website healthy after launch.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
    alt: "Business management dashboard with charts and data",
  },
];

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let newActive = 0;
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        // offsetTop is relative to document body (offsetParent of sticky elements)
        // so naturalScrollPos is the scroll position when this card reaches the nav bottom
        const naturalScrollPos = el.offsetTop - NAV_H;
        if (window.scrollY >= naturalScrollPos) newActive = i;
      });
      setActiveIdx(newActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="services-split">
      {/* LEFT — sticky image panel */}
      <div className="services-col-left" aria-hidden="true">
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className={`service-img-slot${i === activeIdx ? ' is-active' : ''}`}
          >
            <Image
              src={s.img}
              alt={s.alt}
              fill
              sizes="50vw"
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
            <div className="service-img-overlay" />
            <span className="service-img-tag">{s.num} — {s.title}</span>
          </div>
        ))}
      </div>

      {/* RIGHT — sticky-stacking service cards */}
      <div className="services-col-right">
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            ref={(el) => { rowRefs.current[i] = el; }}
            className="service-row"
            style={{ zIndex: i + 1 }}
          >
            <span className="service-num">{s.num}</span>
            <h3 className="service-name">{s.title}</h3>
            <p className="service-description">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
