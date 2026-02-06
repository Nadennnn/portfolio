// app/components/Hero.tsx

import Image from 'next/image';
import Link from 'next/link';
import HeroRightColumn from './HeroRightColumn';
import HeroLeftColumn from './HeroLeftColumn';
import { useState } from 'react';

export default function Hero() {
	const primarySrc = '/profile.png';
	// const fallbackSrc = 'https://i.ibb.co.com/KjVp32wq/profile.png';

	// State untuk mengontrol src mana yang digunakan
	const [imgSrc, setImgSrc] = useState(primarySrc);
	return (
		<section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.2fr] items-center pt-10 lg:pt-0 relative overflow-hidden bg-black text-white">
			{/* --- DEKORASI BACKGROUND (GLOW EFFECT) --- */}
			{/* Cahaya Pink di belakang tengah */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#E58C8A] opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>

			{/* --- KOLOM KIRI: Identitas Utama --- */}
			<HeroLeftColumn />

			{/* --- KOLOM TENGAH: Foto Profil (Hero Image) --- */}
			<div className="h-[50vh] lg:h-screen relative flex items-end justify-center order-1 lg:order-2">
				{/* Container Foto dengan Masking Arch dan Border Tipis */}
				<div className="relative w-[85%] h-[75%] lg:h-[85%] z-20 transition-transform duration-500 hover:scale-[1.02]">
					{/* Garis Border Arch */}
					<div className="absolute inset-0 rounded-t-full  z-30 pointer-events-none"></div>

					{/* Foto */}
					<div className="w-full h-full rounded-t-full overflow-hidden bg-linear-to-b from-[#1a1a1a] to-black relative">
						<Image
							alt="Yoga Naden"
							src={imgSrc}
							fill
							className="object-cover object-top"
							priority
							// Fungsi ini terpanggil jika src pertama error
							// onError={() => setImgSrc(fallbackSrc)}
						/>

						{/* linear Overlay di bawah agar foto menyatu dengan section bawah */}
						<div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-20"></div>
					</div>
				</div>
			</div>

			{/* --- KOLOM KANAN: Stats & Highlights (Diaktifkan Kembali) --- */}
			<div className="order-3">
				<HeroRightColumn />
			</div>
		</section>
	);
}
