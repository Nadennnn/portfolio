// app/layout.tsx

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Yoga Naden | Full-Stack Developer',
	description:
		'Portfolio of Yoga Naden, a Junior Full-Stack Developer experienced in Angular and React.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${poppins.variable} font-sans bg-black text-white antialiased`}>
				{children}
			</body>
		</html>
	);
}
