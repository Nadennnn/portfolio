// app/components/Projects.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
	const projects = [
		{
			id: 'qc-system',
			title: 'Integrated QC & Weighing ERP',
			subtitle: 'End-to-End Industrial Management System',
			company: 'PT Agro Deli Serdang',
			year: 'DEC 2025',
			description:
				'Solely architected and developed a mission-critical ERP subsystem to digitize factory operations. Replaced manual paper workflows with a real-time digital system connecting physical hardware (weighing bridges) to the cloud. Managed the entire SDLC from requirement gathering to deployment.',
			stack: {
				Role: 'Sole Fullstack Developer (Independent)', // Explicitly states you worked alone
				Tech: 'Angular 20 (Signals) + Laravel',
				Core: 'Web Serial API (Hardware), RBAC (7 Roles), Real-time Analytics', // Highlights technical depth
			},
			metrics: [
				{ label: 'Team Size', value: '1 (Solo)' }, // The most important metric for you
				{ label: 'User Roles', value: '7' }, // Based on your admin.routing.ts
				{ label: 'Uptime', value: '99.9%' },
			],
			screenshots: ['/projects/ads-qc-1.png'],
			color: '#E58C8A',
		},
		{
			id: 'warehouse-system',
			title: 'Warehouse Management',
			subtitle: 'Inventory & Stock Control',
			company: 'PT Agro Deli Serdang',
			year: 'JAN 2026',
			description:
				'Designed and built a multi-warehouse inventory system independently. Engineered complex stock calculation logic using reactive state management to handle transactions across 3 different warehouse locations with zero data discrepancy.',
			stack: {
				Role: 'Sole Developer',
				Tech: 'Nuxt.js + Laravel',
				Features: 'Barcode Integration, Auto-Opname, Multi-site Sync',
			},
			metrics: [
				{ label: 'Warehouses', value: '3' },
				{ label: 'Daily Tx', value: '500+' },
				{ label: 'Data Accuracy', value: '100%' },
			],
			screenshots: ['/projects/ads-warehouse-1.png'],
			color: '#8AC5E5',
		},
	];

	const [activeProject, setActiveProject] = useState(0);

	return (
		<section
			id="projects"
			className="py-20 bg-black relative overflow-hidden border-y border-gray-900">
			{/* Subtle Background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#E58C8A_1px,transparent_1px)] bg-[length:50px_50px]"></div>
			</div>

			<div className="max-w-7xl mx-auto px-8 relative z-10">
				{/* Header */}
				<div className="mb-20">
					<div className="flex items-start justify-between mb-8">
						<div>
							<p className="text-[#E58C8A] text-sm tracking-[0.3em] font-bold uppercase mb-4">
								Selected Work
							</p>
							<h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
								Featured
								<br />
								<span className="text-gray-600">Projects</span>
							</h2>
						</div>
						<div className="hidden md:block text-right">
							<p className="text-sm text-gray-500 mb-2">My Role</p>
							<p className="text-white font-semibold">
								Independent Fullstack Engineer
							</p>
							<p className="text-xs text-gray-600 mt-1">
								Handling Architecture, Frontend, Backend, & DevOps
							</p>
						</div>
					</div>
					<p className="text-gray-400 text-sm max-w-xl">
						Enterprise-grade applications built from the ground up to solve real
						business problems.
					</p>
				</div>

				{/* Project Showcase */}
				<div className="space-y-24">
					{projects.map((project, index) => (
						<ProjectShowcase
							key={project.id}
							project={project}
							index={index}
							isActive={activeProject === index}
							onActivate={() => setActiveProject(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectShowcase({
	project,
	index,
	isActive,
	onActivate,
}: {
	project: any;
	index: number;
	isActive: boolean;
	onActivate: () => void;
}) {
	// Alternate layout
	const isReversed = index % 2 !== 0;

	// Fungsi untuk download gambar
	const handleDownload = async () => {
		try {
			const response = await fetch(project.screenshots[0]);
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = `${project.id}-screenshot.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Download failed:', error);
		}
	};

	const handlePreview = () => {
		window.open(project.screenshots[0], '_blank');
	};

	return (
		<div
			className="group"
			style={{
				animation: `fadeInUp 0.8s ease-out forwards`,
				animationDelay: `${index * 200}ms`,
				opacity: 0,
			}}>
			<div
				className={`grid lg:grid-cols-2 gap-12 items-center ${
					isReversed ? 'lg:grid-flow-dense' : ''
				}`}>
				{/* Image Column */}
				<div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
					<div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-black border border-white/10 group-hover:border-[#E58C8A]/30 transition-all duration-500">
						{/* Project Screenshot */}
						<div className="absolute inset-0 p-8">
							<div className="relative w-full h-full">
								<Image
									src={project.screenshots[0]}
									alt={project.title}
									fill
									className="object-contain transition-transform duration-700 group-hover:scale-105"
								/>
							</div>
						</div>

						{/* Year Badge */}
						<div className="absolute top-6 left-6">
							<span className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-bold rounded-full">
								{project.year}
							</span>
						</div>

						<div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							{/* Preview Button */}
							<button
								onClick={handlePreview}
								className="p-3 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-[#E58C8A]/20 hover:border-[#E58C8A] transition-all duration-300"
								aria-label="Preview screenshot">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</button>

							{/* Download Button */}
							<button
								onClick={handleDownload}
								className="p-3 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-[#E58C8A]/20 hover:border-[#E58C8A] transition-all duration-300"
								aria-label="Download screenshot">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
									/>
								</svg>
							</button>
						</div>

						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
					</div>

					{/* Metrics */}
					<div className="grid grid-cols-3 gap-4 mt-6">
						{project.metrics.map((metric: any) => (
							<div
								key={metric.label}
								className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E58C8A]/30 transition-all">
								<p className="text-2xl font-bold text-white mb-1">
									{metric.value}
								</p>
								<p className="text-xs text-gray-500">{metric.label}</p>
							</div>
						))}
					</div>
				</div>

				{/* Content Column */}
				<div className={`${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
					{/* Company */}
					<p className="text-[#E58C8A] text-sm font-bold mb-3 uppercase tracking-wider">
						{project.company}
					</p>

					{/* Title */}
					<h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
						{project.title}
					</h3>
					<p className="text-xl text-gray-500 mb-6">{project.subtitle}</p>

					{/* Description */}
					<p className="text-gray-400 leading-relaxed mb-8">
						{project.description}
					</p>

					{/* Tech Stack */}
					<div className="space-y-4 mb-8">
						{Object.entries(project.stack).map(([key, value]) => (
							<div key={key} className="flex items-start gap-4">
								<span className="text-sm font-bold text-gray-500 w-24 shrink-0">
									{key}
								</span>
								<span className="text-sm text-gray-400">{value as string}</span>
							</div>
						))}
					</div>

					{/* Status */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
						<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-medium text-green-400">
							In Production
						</span>
					</div>
				</div>
			</div>

			{/* Divider */}
			{index < 1 && (
				<div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
			)}
		</div>
	);
}

// Animation
const styles = `
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
`;
