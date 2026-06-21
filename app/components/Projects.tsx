"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Monitor, Smartphone, Globe } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  year: string;
  category: "web-app" | "mobile-app" | "website";
  icon: "monitor" | "smartphone" | "globe";
  gradient: string;
  description: string;
  stack: {
    Role: string;
    Tech: string;
    Core: string;
  };
  metrics: { label: string; value: string }[];
  links?: {
    live?: string;
    playstore?: string;
  };
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "qc-system",
      title: "Integrated QC & Weighing ERP",
      subtitle: "End-to-End Industrial Management System",
      company: "PT AGRO DELI SERDANG",
      year: "DEC 2025",
      category: "web-app",
      icon: "monitor",
      gradient: "from-amber-500/20 to-orange-500/20 hover:border-amber-500/50",
      description:
        "Solely architected and developed a mission-critical ERP subsystem to digitize factory operations. Replaced manual paper workflows with a real-time digital system connecting physical hardware (weighing bridges) directly to the web app using the Web Serial API. Handled the entire SDLC including design, frontend, backend API, and database synchronization.",
      stack: {
        Role: "Sole Fullstack Developer (Freelance)",
        Tech: "Angular 20 (Signals) + Laravel",
        Core: "Web Serial API (Hardware Integration), RBAC (7 Roles), Real-time Analytics",
      },
      metrics: [
        { label: "Team Size", value: "1 (Solo)" },
        { label: "User Roles", value: "7" },
        { label: "Uptime", value: "99.9%" },
      ],
      links: {
        live: "https://ads-qc.vercel.app",
      },
    },
    {
      id: "warehouse-system",
      title: "Warehouse Management System",
      subtitle: "Inventory & Stock Control",
      company: "PT AGRO DELI SERDANG",
      year: "JAN 2026",
      category: "web-app",
      icon: "monitor",
      gradient: "from-blue-500/20 to-indigo-500/20 hover:border-blue-500/50",
      description:
        "Designed and built a multi-warehouse inventory system independently. Engineered complex stock calculation logic using reactive state management to handle transactions across 3 different warehouse locations with zero data discrepancy. Built a multi-step stock request approval system (surat permintaan barang) for admin warehouse and purchasing teams.",
      stack: {
        Role: "Sole Fullstack Developer (Freelance)",
        Tech: "Nuxt.js + Laravel",
        Core: "Barcode Integration, Auto-Opname, Multi-site Sync, Purchase Request Workflow",
      },
      metrics: [
        { label: "Warehouses", value: "3 Locations" },
        { label: "Daily Tx", value: "500+" },
        { label: "Data Accuracy", value: "100%" },
      ],
      links: {
        live: "https://ads-warehouse.vercel.app",
      },
    },
    {
      id: "deli-andalas",
      title: "Deli Andalas Corporate Site",
      subtitle: "Professional Company Profile",
      company: "PT AGRO DELI SERDANG",
      year: "NOV 2025",
      category: "website",
      icon: "globe",
      gradient:
        "from-emerald-500/20 to-teal-500/20 hover:border-emerald-500/50",
      description:
        "Designed and developed the official company profile for Deli Andalas Corporation, a leading packaging provider in Indonesia. Created custom high-performance layouts displaying sustainable packaging solutions, product catalogs, historical timelines, and corporate values with premium styling.",
      stack: {
        Role: "Freelance Web Developer",
        Tech: "HTML5, CSS3, JavaScript, PHP",
        Core: "Custom Layout, SEO Optimized, Fully Responsive, Core Web Vitals Optimization",
      },
      metrics: [
        { label: "Responsiveness", value: "100%" },
        { label: "Load Time", value: "Under 1s" },
        { label: "Design Fidelity", value: "Pixel Perfect" },
      ],
      links: {
        live: "https://deliandalas.com/",
      },
    },
    {
      id: "e-teguran",
      title: "E-Teguran Humanis",
      subtitle: "Digital Traffic Education & Warning App",
      company: "PT Adhikari Inovasi Indonesia",
      year: "2025",
      category: "mobile-app",
      icon: "smartphone",
      gradient: "from-rose-500/20 to-pink-500/20 hover:border-rose-500/50",
      description:
        "Developed and published a cross-platform mobile application designed for Indonesian law enforcement to log traffic education and issue warnings digitally. Streamlined field-officer tracking, reducing administrative workloads and increasing communication transparency.",
      stack: {
        Role: "Junior Fullstack Developer",
        Tech: "Angular, Ionic, Capacitor, Tailwind CSS",
        Core: "Location Mapping, Offline Data Synchronization, Native Push Notifications",
      },
      metrics: [
        { label: "Status", value: "Published" },
        { label: "Target Users", value: "Police Force" },
        { label: "Platform", value: "Android / Play Store" },
      ],
      links: {
        playstore:
          "https://play.google.com/store/search?q=PT.+ADHIKARI+INOVASI+INDONESIA&c=apps",
      },
    },
    {
      id: "e-tindakan",
      title: "E-Tindakan Disiplin",
      subtitle: "Internal Police Disciplinary Tracking App",
      company: "PT Adhikari Inovasi Indonesia",
      year: "2025",
      category: "mobile-app",
      icon: "smartphone",
      gradient:
        "from-violet-500/20 to-purple-500/20 hover:border-violet-500/50",
      description:
        "Created a secure internal application to manage and document disciplinary proceedings for police personnel. Features structured data verification, role-based workflows for inspectors, and comprehensive history tracking to support administrative accountability.",
      stack: {
        Role: "Junior Fullstack Developer",
        Tech: "Angular, Ionic, Capacitor, Tailwind CSS",
        Core: "Secure Data Auditing, Role-Based Access Control, Custom PDF Reporting",
      },
      metrics: [
        { label: "Status", value: "Published" },
        { label: "Audit Trail", value: "100% Secure" },
        { label: "Encryption", value: "AES Standard" },
      ],
      links: {
        playstore:
          "https://play.google.com/store/search?q=PT.+ADHIKARI+INOVASI+INDONESIA&c=apps",
      },
    },
    {
      id: "satu-sdm",
      title: "Satu SDM Polda Jabar",
      subtitle: "Integrated HR Management Suite",
      company: "PT Adhikari Inovasi Indonesia",
      year: "2025",
      category: "mobile-app",
      icon: "smartphone",
      gradient: "from-cyan-500/20 to-sky-500/20 hover:border-cyan-500/50",
      description:
        "Developed a robust corporate/governmental HR mobile application serving West Java regional police department. The system provides real-time access to structural records, digital promotions, personal file uploads, and official administrative announcements.",
      stack: {
        Role: "Junior Fullstack Developer",
        Tech: "Angular, Ionic, Capacitor, Tailwind CSS",
        Core: "Personnel Data API, Encrypted File Management, Dynamic Profile Generation",
      },
      metrics: [
        { label: "Status", value: "Published" },
        { label: "Managed Users", value: "10,000+" },
        { label: "Speed Index", value: "Optimized" },
      ],
      links: {
        playstore:
          "https://play.google.com/store/search?q=PT.+ADHIKARI+INOVASI+INDONESIA&c=apps",
      },
    },
  ];

  const [filter, setFilter] = useState<
    "all" | "web-app" | "mobile-app" | "website"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sectionRef, inView] = useInView({ threshold: 0.05 });

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-black relative overflow-hidden border-y border-gray-900 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#E58C8A_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#E58C8A]"></span>
              <p className="text-[#E58C8A] text-xs tracking-[0.3em] font-bold uppercase">
                Selected Work
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Featured
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                Projects
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Production-grade web systems and published store applications built
            with premium features, hardware integrations, and full SDLC
            execution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(["all", "web-app", "mobile-app", "website"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-[#E58C8A] text-black scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat === "all" && "All Projects"}
              {cat === "web-app" && "Web Applications"}
              {cat === "mobile-app" && "Mobile Apps (Play Store)"}
              {cat === "website" && "Websites"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 h-full flex flex-col justify-between`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#E58C8A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {project.icon === "monitor" && (
                      <Monitor className="w-6 h-6 text-gray-400 group-hover:text-[#E58C8A] transition-colors" />
                    )}
                    {project.icon === "smartphone" && (
                      <Smartphone className="w-6 h-6 text-gray-400 group-hover:text-[#E58C8A] transition-colors" />
                    )}
                    {project.icon === "globe" && (
                      <Globe className="w-6 h-6 text-gray-400 group-hover:text-[#E58C8A] transition-colors" />
                    )}
                  </div>
                  <span className="text-[10px] tracking-widest font-bold uppercase text-gray-500 group-hover:text-[#E58C8A] transition-colors">
                    {project.category.replace("-", " ")}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#E58C8A] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.Tech.split("+")
                    .flatMap((t) => t.split(","))
                    .map((t) => t.trim())
                    .slice(0, 3)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-bold group-hover:text-white transition-colors">
                <span>{project.company}</span>
                <span className="flex items-center gap-1">
                  Learn More
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
              aria-label="Close details"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pr-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {selectedProject.icon === "monitor" && (
                  <Monitor className="w-7 h-7 text-[#E58C8A]" />
                )}
                {selectedProject.icon === "smartphone" && (
                  <Smartphone className="w-7 h-7 text-[#E58C8A]" />
                )}
                {selectedProject.icon === "globe" && (
                  <Globe className="w-7 h-7 text-[#E58C8A]" />
                )}
              </div>
              <div>
                <span className="text-[10px] tracking-widest font-bold uppercase text-[#E58C8A]">
                  {selectedProject.category.replace("-", " ")}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Description
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/15 py-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Role
                  </h4>
                  <p className="text-white text-sm font-semibold">
                    {selectedProject.stack.Role}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Tech Stack
                  </h4>
                  <p className="text-white text-sm font-semibold">
                    {selectedProject.stack.Tech}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Core Tech
                  </h4>
                  <p className="text-white text-sm font-semibold">
                    {selectedProject.stack.Core}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Key Metrics
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                    >
                      <p className="text-xl md:text-2xl font-bold text-[#E58C8A] mb-1">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links Footer */}
              <div className="pt-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="text-xs text-gray-500 font-medium">
                  Company:{" "}
                  <span className="text-gray-300 font-bold">
                    {selectedProject.company}
                  </span>{" "}
                  • {selectedProject.year}
                </div>

                <div className="flex gap-3">
                  {selectedProject.links?.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-[#E58C8A] hover:text-white transition-all hover:scale-105 flex items-center gap-2"
                    >
                      Visit Live Site
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}

                  {selectedProject.links?.playstore && (
                    <a
                      href={selectedProject.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-[#E58C8A] hover:text-white transition-all hover:scale-105 flex items-center gap-2"
                    >
                      Search on Play Store
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
