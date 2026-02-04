'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function MailPage() {
	const router = useRouter();

	const email = 'yoganadennn@gmail.com';
	const [copied, setCopied] = useState(false);

	const [status, setStatus] = useState<Status>('idle');
	const [form, setForm] = useState({
		name: '',
		fromEmail: '',
		message: '',
	});

	const canSubmit = useMemo(() => {
		return (
			form.name.trim().length >= 2 &&
			form.fromEmail.includes('@') &&
			form.message.trim().length >= 10
		);
	}, [form]);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			alert('Failed to copy. Please copy manually.');
		}
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!canSubmit) return;

		setStatus('sending');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});

			if (!res.ok) throw new Error('Failed');

			setStatus('sent');
			setForm({ name: '', fromEmail: '', message: '' });
		} catch {
			setStatus('error');
		}
	};

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="mx-auto max-w-5xl px-6 py-14">
				{/* Header */}
				<div className="flex items-center justify-between gap-4">
					<div>
						<p className="text-xs font-bold tracking-[0.25em] uppercase text-[#E58C8A]">
							Contact
						</p>
						<h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
							Let’s build something.
						</h1>
						<p className="mt-3 text-gray-400 max-w-xl">
							Send a message directly from the website. I will reply via email.
						</p>
					</div>

					<button
						onClick={() => router.back()}
						className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:border-[#E58C8A]/60 transition">
						Back
					</button>
				</div>

				{/* Content */}
				<div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6">
					{/* Left card: quick actions */}
					<div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
						<h2 className="text-lg font-bold">Quick actions</h2>
						<p className="mt-2 text-sm text-gray-400">
							If you want a quicker option, use these.
						</p>

						<div className="mt-5 space-y-3">
							<div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
								<span className="text-sm text-gray-200 truncate mr-3">
									{email}
								</span>
								<button
									onClick={handleCopy}
									className="text-xs font-bold uppercase tracking-wider text-[#E58C8A] hover:text-white transition">
									{copied ? 'Copied!' : 'Copy'}
								</button>
							</div>

							<a
								href={`mailto:${email}?subject=${encodeURIComponent(
									'Hello Yoga'
								)}`}
								className="block w-full rounded-xl bg-[#E58C8A] py-3 text-center text-sm font-bold text-black hover:bg-[#d47b79] transition">
								Open Mail App
							</a>

							<div className="pt-3 border-t border-white/10">
								<p className="text-xs text-gray-400">
									Prefer a faster channel?
								</p>

								<div className="mt-3 flex flex-col gap-2">
									<a
										className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-200 hover:border-[#E58C8A]/60 hover:text-white transition"
										href="https://www.linkedin.com/in/ynadennn/"
										target="_blank"
										rel="noreferrer">
										<span>Message me on LinkedIn</span>
										<span className="text-gray-500">↗</span>
									</a>

									<a
										className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-200 hover:border-[#E58C8A]/60 hover:text-white transition"
										href="https://wa.me/62895622843390?text=Hi%20Yoga%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
										target="_blank"
										rel="noreferrer">
										<span>Chat with me on WhatsApp</span>
										<span className="text-gray-500">↗</span>
									</a>

									<p className="text-xs text-gray-500 mt-1">
										WhatsApp: +62 895-6228-43390
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right card: contact form */}
					<div className="md:col-span-3 rounded-2xl border border-white/10 bg-[#0f0f0f] p-6">
						<h2 className="text-lg font-bold">Send a message</h2>
						<p className="mt-2 text-sm text-gray-400">
							Fill out this form, and the message will go to my inbox.
						</p>

						<form onSubmit={onSubmit} className="mt-6 space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="text-xs text-gray-400">Your name</label>
									<input
										value={form.name}
										onChange={e => setForm({ ...form, name: e.target.value })}
										className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#E58C8A]/70"
										placeholder="e.g. Andi"
										required
										minLength={2}
									/>
								</div>

								<div>
									<label className="text-xs text-gray-400">Your email</label>
									<input
										value={form.fromEmail}
										onChange={e =>
											setForm({ ...form, fromEmail: e.target.value })
										}
										className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#E58C8A]/70"
										placeholder="andi@email.com"
										required
										type="email"
									/>
								</div>
							</div>

							<div>
								<label className="text-xs text-gray-400">Message</label>
								<textarea
									value={form.message}
									onChange={e => setForm({ ...form, message: e.target.value })}
									className="mt-2 w-full min-h-[140px] rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#E58C8A]/70"
									placeholder="Write your message here..."
									required
									minLength={10}
								/>
							</div>

							<div className="flex items-center gap-3">
								<button
									disabled={!canSubmit || status === 'sending'}
									className="inline-flex items-center justify-center rounded-xl bg-white text-black font-bold text-sm px-5 py-3 hover:bg-[#E58C8A] hover:text-white transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black"
									type="submit">
									{status === 'sending' ? 'Sending...' : 'Send message'}
								</button>

								{status === 'sent' && (
									<p className="text-sm text-[#E58C8A]">
										Sent. I’ll reply soon.
									</p>
								)}
								{status === 'error' && (
									<p className="text-sm text-red-400">
										Failed to send. Please try again.
									</p>
								)}
							</div>
						</form>

						<p className="mt-6 text-xs text-gray-500">
							By sending, you agree to have the message sent to my email.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
