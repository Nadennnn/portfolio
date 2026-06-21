// app/layout.tsx

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://ynadennnporto.vercel.app'),
	title: 'Yoga Naden | Full-Stack Developer',
	description:
		'Portfolio of Yoga Naden, a Junior Full-Stack Developer creating seamless web & mobile experiences. Experienced in Angular, React/Next.js, Vue/Nuxt.js, and Ionic/Capacitor.',
	keywords: [
		'Yoga Naden',
		'Yoga Naden Portfolio',
		'Yoga Naden Developer',
		'Full-Stack Developer Indonesia',
		'Junior Full-Stack Developer',
		'Angular Developer',
		'React Developer',
		'Next.js Developer',
		'Ionic Developer',
		'Capacitor Mobile Developer',
		'PT Adhikari Inovasi Indonesia',
		'PT Agro Deli Serdang',
	],
	authors: [{ name: 'Yoga Naden' }],
	creator: 'Yoga Naden',
	alternates: {
		canonical: 'https://ynadennnporto.vercel.app',
	},
	openGraph: {
		title: 'Yoga Naden | Full-Stack Developer',
		description:
			'Portfolio of Yoga Naden, a Junior Full-Stack Developer experienced in Angular, React, Vue, and Ionic/Capacitor.',
		url: 'https://ynadennnporto.vercel.app',
		siteName: 'Yoga Naden Portfolio',
		locale: 'id_ID',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Yoga Naden | Full-Stack Developer',
		description:
			'Portfolio of Yoga Naden, a Junior Full-Stack Developer experienced in Angular, React, Vue, and Ionic/Capacitor.',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// JSON-LD Structured Data
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Yoga Naden',
		url: 'https://ynadennnporto.vercel.app',
		jobTitle: 'Full-Stack Developer',
		knowsAbout: [
			'Software Engineering',
			'Web Development',
			'Mobile Development',
			'Angular',
			'React',
			'Next.js',
			'Vue',
			'Nuxt.js',
			'Ionic',
			'Capacitor',
			'Laravel',
			'TypeScript',
			'JavaScript',
		],
		worksFor: {
			'@type': 'Organization',
			name: 'PT Adhikari Inovasi Indonesia',
		},
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'Telkom University',
		},
		sameAs: [
			'https://github.com/Nadennnn',
			'https://www.linkedin.com/in/ynadennn/',
		],
	};

	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${poppins.variable} font-sans bg-black text-white antialiased`}>
				{children}
			</body>
		</html>
	);
}

