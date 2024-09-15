/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: { remotePatterns: [{ protocol: 'http', hostname: 'localhost' }] },
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,

		// APP_URL: process.env.NEXT_PUBLIC_URL,
		// APP_ENV: process.env.NEXT_PUBLIC_ENV,
	},
}

export default nextConfig
