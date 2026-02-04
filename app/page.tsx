// app/page.tsx

'use client';

import Experience from './components/Experience';
import Hero from './components/Hero';
import TechStack from './components/TechStack';

export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			<Hero />
			<TechStack />
			<Experience />

			{/* Simple Footer */}
			<footer className="py-10 text-center text-gray-600 text-sm">
				<p>© 2026 Yoga Naden. Built with Next.js & Tailwind.</p>
			</footer>
		</main>
	);
}
