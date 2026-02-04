// app/page.tsx

'use client';

import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			<Hero />
			<TechStack />
			<Projects />
			<Experience />

			{/* Simple Footer */}
			<footer className="py-10 text-center text-gray-600 text-sm border-t border-gray-900">
				<div className="max-w-7xl mx-auto px-8">
					<p className="mb-2">
						© 2026 Yoga Naden. Built with Next.js & Tailwind CSS.
					</p>
					<p className="text-xs text-gray-700">
						Crafted with passion for clean code and elegant design
					</p>
				</div>
			</footer>
		</main>
	);
}
