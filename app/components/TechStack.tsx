'use client';

import { useInView } from '../hooks/useInView';

interface Skill {
	name: string;
	icon: string;
	category: 'Frontend' | 'Backend' | 'Language' | 'Mobile' | 'Tools';
}

export default function TechStack() {
	const skills: Skill[] = [
		{
			name: 'Angular',
			icon: 'https://camo.githubusercontent.com/9c0296fef52ae3475fde1aa6a4a148ce751a8e2e2d36db25ab8b3595935f1c66/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f616e67756c61726a732d6f726967696e616c2e737667',
			category: 'Frontend',
		},
		{
			name: 'TypeScript',
			icon: 'https://camo.githubusercontent.com/fc7710625e5870f9454c786810a687ba11db430ef8f6c51da41ba8c7f7782e77/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667',
			category: 'Language',
		},
		{
			name: 'Next.js',
			icon: 'https://camo.githubusercontent.com/5bcc7a65f661b88e7acf3001bee4053f398298edf4c86fbcd2aa2b4050e8fdb2/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6e6578746a732e706e67',
			category: 'Frontend',
		},
		{
			name: 'React',
			icon: 'https://camo.githubusercontent.com/ec91b3abf80c88af67a456f05d38bd3367d3e1363dc068d3fb020dee61718968/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656163742d6f726967696e616c2d776f72646d61726b2e737667',
			category: 'Frontend',
		},
		{
			name: 'Vue.js',
			icon: 'https://camo.githubusercontent.com/2212e4887e8ea929b0ffd212883588242f852416c96044be4757465719676beb/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f7675656a732d6f726967696e616c2d776f72646d61726b2e737667',
			category: 'Frontend',
		},
		{
			name: 'Nuxt.js',
			icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nuxt_js.png',
			category: 'Frontend',
		},
		{
			name: 'JavaScript',
			icon: 'https://camo.githubusercontent.com/8e3bb0f27f7cb476ce15cbeb3da40198b71367201d898ecec3b0a9ae7d0031f7/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667',
			category: 'Language',
		},
		{
			name: 'Node.js',
			icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png',
			category: 'Backend',
		},
		{
			name: 'Laravel',
			icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png',
			category: 'Backend',
		},
		{
			name: 'Express.js',
			icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png',
			category: 'Backend',
		},
		{
			name: 'Tailwind CSS',
			icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png',
			category: 'Frontend',
		},
		{
			name: 'Ionic',
			icon: 'https://camo.githubusercontent.com/b02a9e70e898cded752cf21782bad160fb9a0d087a4dec3e2dc3a54af58cd847/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f696f6e69632e737667',
			category: 'Mobile',
		},
		{
			name: 'Capacitor',
			icon: 'https://camo.githubusercontent.com/292b54e64a9dd27cdd50ab9f98c7df3c1c59c8d695567371ffea233ba9dfbb9f/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f63616369746f722e737667',
			category: 'Mobile',
		},
		{
			name: 'Git',
			icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png',
			category: 'Tools',
		},
	];

	const [sectionRef, inView] = useInView({ threshold: 0.05 });

	return (
		<section
			ref={sectionRef}
			className="py-20 border-y border-gray-900 bg-black relative overflow-hidden">
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E58C8A] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<span className="h-px w-12 bg-[#E58C8A]"></span>
						<p className="text-[#E58C8A] text-sm tracking-[0.3em] font-bold uppercase">
							Proficient In Development
						</p>
						<span className="h-px w-12 bg-[#E58C8A]"></span>
					</div>
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
						Tech{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
							Stack
						</span>
					</h2>
					<p className="text-gray-400 text-sm max-w-2xl mx-auto">
						Technologies and tools I use to build modern, scalable web and mobile applications
					</p>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{skills.map((skill, index) => (
						<div
							key={skill.name}
							className="group relative"
							style={{
								animationName: inView ? 'fadeInUp' : 'none',
								animationDuration: '0.5s',
								animationTimingFunction: 'ease-out',
								animationFillMode: 'forwards',
								animationDelay: inView ? `${index * 40}ms` : '0ms',
								opacity: 0,
							}}>
							{/* Glow Effect on Hover */}
							<div className="absolute inset-0 bg-[#E58C8A] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

							{/* Card */}
							<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-[#E58C8A]/50 transition-all duration-300 cursor-default group-hover:scale-105 group-hover:bg-white/10 h-full flex flex-col items-center justify-center">
								{/* Icon */}
								<div className="mb-4 group-hover:scale-110 transition-transform duration-300">
									<img
										src={skill.icon}
										alt={skill.name}
										width={48}
										height={48}
										className="w-12 h-12 object-contain"
									/>
								</div>

								{/* Name */}
								<h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center">
									{skill.name}
								</h3>

								{/* Category Badge */}
								<span className="mt-2 text-[10px] uppercase font-bold tracking-wider text-gray-500 group-hover:text-[#E58C8A] transition-colors">
									{skill.category}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Additional Info */}
				<div className="mt-12 text-center">
					<p className="text-gray-500 text-sm">
						+ Exploring:{' '}
						<span className="text-gray-400">Python, Java, Docker, RESTful APIs</span>
					</p>
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
}
