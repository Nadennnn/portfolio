// app/

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroLeftColumn() {
	// ANCHOR MODAL EMAIL COPY
	const navigateTo = (data: any) => {
		window.location.href = data;
	};

	return (
		<div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1 z-10 h-full">
			{/* Label Kecil */}
			<div className="flex items-center gap-3 mb-6">
				<span className="h-px w-10 bg-[#E58C8A]"></span>
				<h2 className="text-[#E58C8A] tracking-[0.2em] text-xs font-bold uppercase">
					Fullstack Developer
				</h2>
			</div>

			{/* Nama Besar */}
			<h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter">
				Yoga <br />
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
					Naden.
				</span>
			</h1>

			{/* Bio Ringkas */}
			<p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed border-l-2 border-gray-800 pl-4">
				Junior Full-Stack Developer creating seamless web & mobile experiences.
				Specialized in{' '}
				<span className="text-white font-medium">
					Angular, React/Next, Vue/Nuxt, Ionic/Capacitor
				</span>
				.
			</p>

			{/* Tech Stack */}
			<div className="flex justify-start items-center gap-3 mb-8 flex-wrap">
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/9c0296fef52ae3475fde1aa6a4a148ce751a8e2e2d36db25ab8b3595935f1c66/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f616e67756c61726a732d6f726967696e616c2e737667"
						alt="Angular"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						Angular
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/ec91b3abf80c88af67a456f05d38bd3367d3e1363dc068d3fb020dee61718968/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656163742d6f726967696e616c2d776f72646d61726b2e737667"
						alt="React"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						React
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/2212e4887e8ea929b0ffd212883588242f852416c96044be4757465719676beb/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f7675656a732d6f726967696e616c2d776f72646d61726b2e737667"
						alt="Vue.js"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						Vue.js
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/fc7710625e5870f9454c786810a687ba11db430ef8f6c51da41ba8c7f7782e77/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667"
						alt="TypeScript"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						TypeScript
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/8e3bb0f27f7cb476ce15cbeb3da40198b71367201d898ecec3b0a9ae7d0031f7/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667"
						alt="JavaScript"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						JavaScript
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/292b54e64a9dd27cdd50ab9f98c7df3c1c59c8d695567371ffea233ba9dfbb9f/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f636170616369746f722e737667"
						alt="Capacitor"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						Capacitor
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/b02a9e70e898cded752cf21782bad160fb9a0d087a4dec3e2dc3a54af58cd847/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f696f6e69632e737667"
						alt="Ionic"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						Ionic
					</span>
				</div>
				<div className="group relative">
					<img
						src="https://camo.githubusercontent.com/5bcc7a65f661b88e7acf3001bee4053f398298edf4c86fbcd2aa2b4050e8fdb2/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6e6578746a732e706e67"
						alt="NextJS"
						height={30}
						width={30}
						className="transition-transform hover:scale-110"
					/>
					<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
						Next.js
					</span>
				</div>
			</div>

			{/* Tombol CTA & Social Links */}
			<div className="flex flex-col gap-4">
				{/* CTA Buttons */}
				<div className="flex flex-wrap gap-4">
					<Link
						href="/documents/CV_YOGANADEN.pdf"
						target="_blank"
						className="group relative px-8 py-3 rounded-full bg-white text-black font-bold text-sm overflow-hidden transition-all hover:bg-[#E58C8A] hover:text-white hover:scale-105">
						<span className="relative z-10 flex items-center gap-2">
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
							Download CV
						</span>
					</Link>
					<Link
						href="#projects"
						className="px-8 py-3 rounded-full border border-gray-800 text-sm font-medium hover:border-[#E58C8A] hover:text-[#E58C8A] transition-all hover:scale-105 flex items-center gap-2">
						<span>View Work</span>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</Link>
				</div>

				{/* Social Links */}
				<div className="flex items-center gap-3">
					<span className="h-px w-8 bg-gray-800"></span>
					<div className="flex gap-3">
						<Link
							href="https://www.linkedin.com/in/ynadennn/"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E58C8A] hover:bg-[#E58C8A]/10 transition-all overflow-hidden">
							<svg
								className="w-5 h-5 text-gray-400 group-hover:text-[#E58C8A] transition-colors relative z-10"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</Link>

						<Link
							href="https://github.com/Nadennnn"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E58C8A] hover:bg-[#E58C8A]/10 transition-all overflow-hidden">
							<svg
								className="w-5 h-5 text-gray-400 group-hover:text-[#E58C8A] transition-colors relative z-10"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</Link>

						<Link
							href="/mail"
							className="group relative w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E58C8A] hover:bg-[#E58C8A]/10 transition-all overflow-hidden">
							<svg
								className="w-5 h-5 text-gray-400 group-hover:text-[#E58C8A] transition-colors relative z-10"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
