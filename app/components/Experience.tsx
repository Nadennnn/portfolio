"use client";

import { useInView } from "../hooks/useInView";

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  period: string;
  tech: string[];
  bullets: string[];
}

function parseDate(dateStr: string): Date {
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 1) {
    return new Date(parseInt(parts[0], 10), 0, 1);
  }

  const monthMap: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const m = monthMap[parts[0].toLowerCase()] ?? 0;
  const y = parseInt(parts[1], 10) || new Date().getFullYear();
  return new Date(y, m, 1);
}

function getDuration(startDateStr: string): string {
  const start = parseDate(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth() + 1; // Include starting month as partial/full progress

  if (months < 0) {
    years--;
    months += 12;
  }

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

  if (parts.length === 0) return "Just started";
  return parts.join(" ");
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "PT Adhikari Inovasi Indonesia",
      role: "Fullstack Developer",
      startDate: "Dec 2024",
      period: "Dec 2024 - Present",
      tech: ["Angular", "Next.js", "Ionic", "Capacitor", "Tailwind CSS"],
      bullets: [
        "Co-developed and published 3 cross-platform mobile applications on the Google Play Store, including Satu SDM Polda Jabar, E-Teguran Humanis, and E-Tindakan Disiplin.",
        "Engineered a custom Login Bridge Service to share session tokens securely across multiple environments, reducing user authentication errors by 80%.",
        "Optimized and maintained security schemas with Role-Based Access Control (RBAC) supporting up to 7 distinct user permission roles.",
      ],
    },
    {
      company: "PT AGRO DELI SERDANG - FREELANCE",
      role: "Freelance Fullstack Web Developer",
      startDate: "Dec 2025",
      period: "Dec 2025 - Present",
      tech: [
        "React",
        "Angular",
        "Vue",
        "Next.js",
        "Nuxt.js",
        "Tailwind CSS",
        "Laravel",
        "Node.js",
        "Express",
        "MySQL",
      ],
      bullets: [
        "Designed and built an end-to-end industrial QC & Weighing ERP subsystem, implementing the Web Serial API to communicate directly with physical weighbridges in real-time.",
        "Engineered a 3-location Warehouse Management System with barcode integration, automated stock-opname, and request-to-purchasing approval workflows.",
        "Developed Deli Andalas packaging company profile website to boost corporate visibility and organic search engine discovery.",
      ],
    },
    {
      company: "FREELANCE WEB DEVELOPER",
      role: "self employee",
      startDate: "2023",
      period: "2023 - Present",
      tech: [
        "React",
        "Angular",
        "Vue",
        "Next.js",
        "Nuxt.js",
        "Tailwind CSS",
        "Laravel",
        "Node.js",
        "Express",
        "MySQL",
      ],
      bullets: ["web developer"],
    },
  ];

  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`py-20 bg-black relative overflow-hidden transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#E58C8A] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#E58C8A]"></span>
            <p className="text-[#E58C8A] text-xs tracking-[0.3em] font-bold uppercase">
              Professional Path
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              Experience
            </span>
          </h2>
        </div>

        {/* Experience List */}
        <div className="grid gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 hover:border-[#E58C8A]/50 transition-all duration-300 group relative"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-radial-gradient from-[#E58C8A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E58C8A] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-bold text-gray-400 mt-3 md:mt-0 bg-white/5 border border-white/10 px-4 py-2 rounded-full relative z-10">
                  {exp.period} • {getDuration(exp.startDate)}
                </span>
              </div>

              {/* Bullet Accomplishments */}
              <ul className="space-y-3 mb-6 relative z-10">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="text-sm text-gray-400 leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[#E58C8A] mt-1.5 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 relative z-10 pt-4 border-t border-white/5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-wide uppercase border border-white/10 bg-white/5 text-gray-400 px-3 py-1 rounded-full group-hover:border-[#E58C8A]/30 group-hover:text-gray-300 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
