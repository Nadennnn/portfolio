/** @type {import('next').NextConfig} */
const nextconfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextconfig;
