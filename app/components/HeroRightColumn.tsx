'use client';

import Link from 'next/link';

export default function HeroRightColumn() {
	return (
		<div className="p-8 lg:p-16 flex flex-col justify-center items-start lg:items-end text-left lg:text-right order-3 z-10 h-full space-y-6">
			{/* Location & Status Badge */}
			<div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto lg:justify-end">
				<div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
					<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
					<span className="text-xs font-medium">Lookin for remote work</span>
				</div>
				<div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
					<span className="text-xs">📍</span>
					<span className="text-xs font-medium">
						Indonesia, South East Asia
					</span>
				</div>
			</div>

			{/* Featured Impact Card */}
			<div className="relative group cursor-default w-full lg:w-auto">
				<div className="absolute inset-0 bg-[#E58C8A] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
				<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl max-w-full text-left">
					<div className="flex justify-between items-start mb-2">
						<span className="text-[#E58C8A] text-xl">★</span>
						<span className="text-xs font-bold bg-[#E58C8A]/20 text-[#E58C8A] px-2 py-1 rounded">
							FEATURED
						</span>
					</div>
					<h4 className="font-bold text-lg mb-1">Login Bridge Service</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						Engineered a service reducing authentication errors by{' '}
						<span className="text-white">80%</span>.
					</p>
				</div>
			</div>

			{/* Quick Impact Stats Grid */}
			<div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
				<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:border-[#E58C8A]/50 transition-all">
					<div className="text-3xl font-bold text-[#E58C8A] mb-1">3</div>
					<div className="text-xs text-gray-400 uppercase tracking-wider">
						Apps Published
					</div>
					<div className="text-xs text-gray-500 mt-1">Google Play Store</div>
				</div>

				<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:border-[#E58C8A]/50 transition-all">
					<div className="text-3xl font-bold text-[#E58C8A] mb-1">80%</div>
					<div className="text-xs text-gray-400 uppercase tracking-wider">
						Error Reduction
					</div>
					<div className="text-xs text-gray-500 mt-1">Auth System</div>
				</div>

				<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:border-[#E58C8A]/50 transition-all">
					<div className="text-3xl font-bold text-[#E58C8A] mb-1">30%</div>
					<div className="text-xs text-gray-400 uppercase tracking-wider">
						Faster Load
					</div>
					<div className="text-xs text-gray-500 mt-1">RBAC Optimization</div>
				</div>

				<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:border-[#E58C8A]/50 transition-all">
					<div className="text-3xl font-bold text-[#E58C8A] mb-1">40%</div>
					<div className="text-xs text-gray-400 uppercase tracking-wider">
						Engagement ↑
					</div>
					<div className="text-xs text-gray-500 mt-1">UI/UX Redesign</div>
				</div>
			</div>

			{/* Career Timeline */}
			<div className="w-full lg:w-auto max-w-xs">
				<h3 className="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2 lg:justify-end">
					<span className="h-[1px] w-8 bg-[#E58C8A] lg:order-2"></span>
					<span className="lg:order-1">CAREER PATH</span>
				</h3>
				<div className="space-y-3">
					<div className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
						<div className="w-2 h-2 bg-[#E58C8A] rounded-full mt-1.5 flex-shrink-0"></div>
						<div>
							<div className="text-xs font-bold text-white">
								Junior Fullstack Dev
							</div>
							<div className="text-xs text-gray-400">PT AdhivasIndo</div>
							<div className="text-xs text-gray-600">Dec 2024 - Present</div>
						</div>
					</div>

					<div className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
						<div className="w-2 h-2 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
						<div>
							<div className="text-xs font-bold text-white">
								Freelance Developer
							</div>
							<div className="text-xs text-gray-400">Remote</div>
							<div className="text-xs text-gray-600">Oct 2023 - Present</div>
						</div>
					</div>

					<div className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
						<div className="w-2 h-2 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
						<div>
							<div className="text-xs font-bold text-white">Student</div>
							<div className="text-xs text-gray-400">Telkom University</div>
							<div className="text-xs text-gray-600">2020 - 2024 | GPA 3.5</div>
						</div>
					</div>
				</div>
			</div>

			{/* Certification Badge */}
			<div className="border-t border-gray-900 pt-6 w-full lg:w-auto flex flex-col items-start lg:items-end">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-xl">🏆</span>
					<h3 className="text-lg font-bold text-gray-200">BNSP Certified</h3>
				</div>
				<p className="text-sm text-[#E58C8A]">Junior Web Developer</p>
				<p className="text-xs text-gray-600 mt-1">Valid: 2024 - 2027</p>
			</div>

			{/* Social Links - Optional */}
			{/* <div className="flex gap-3 lg:justify-end pt-4">
				<Link
					href="https://github.com/yourusername"
					target="_blank"
					className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E58C8A] hover:text-[#E58C8A] transition-all">
					<span className="text-sm">GH</span>
				</Link>
				<Link
					href="https://linkedin.com/in/yourusername"
					target="_blank"
					className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E58C8A] hover:text-[#E58C8A] transition-all">
					<span className="text-sm">IN</span>
				</Link>
			</div> */}
		</div>
	);
}
