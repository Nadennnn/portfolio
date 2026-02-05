// app/components/Experience.tsx

export default function Experience() {
	const experiences = [
		{
			company: 'PT Adhikari Inovasi Indonesia',
			role: 'Junior Fullstack Developer',
			period: 'Dec 2024 - Present',
			tech: ['AngularJS', 'NextJS', 'Ionic', 'Capacitor', 'Tailwind'],
			desc: 'Published 3 cross-platform mobile apps including Satu SDM Polda Jabar & Satu NTB. Implemented RBAC and Login Bridge Service.',
		},
		{
			company: 'Freelance',
			role: 'Web Developer',
			period: 'Oct 2023 - Present',
			tech: [
				'ReactJS',
				'AngularJS',
				'VueJS',
				'NextJS',
				'NuxtJS',
				'TailwindCSS',
				'Laravel',
				'NodeJS',
				'Express',
				'MySQL',
			],
			desc: 'Developed full-stack web applications for academic research publication and student final projects.',
		},
	];

	return (
		<section id="experience" className="py-20 px-10 max-w-7xl mx-auto">
			<h2 className="text-3xl font-bold mb-10 border-l-4 border-[#E58C8A] pl-4">
				Experience
			</h2>

			<div className="grid gap-6">
				{experiences.map((exp, idx) => (
					<div
						key={idx}
						className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-[#E58C8A]/50 transition-colors group">
						<div className="flex flex-col md:flex-row justify-between mb-4">
							<div>
								<h3 className="text-xl font-bold text-white group-hover:text-[#E58C8A] transition-colors">
									{exp.role}
								</h3>
								<p className="text-gray-400">{exp.company}</p>
							</div>
							<span className="text-sm text-gray-500 mt-2 md:mt-0 bg-gray-900 px-3 py-1 rounded-full h-fit w-fit">
								{exp.period}
							</span>
						</div>

						<p className="text-gray-300 text-sm mb-6 leading-relaxed">
							{exp.desc}
						</p>

						<div className="flex flex-wrap gap-2">
							{exp.tech.map(t => (
								<span
									key={t}
									className="text-xs font-medium border border-gray-700 text-gray-400 px-3 py-1 rounded-full">
									{t}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
