/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: isDev
			? [{ protocol: 'http', hostname: 'localhost' }]
			: [{ protocol: 'https', hostname: 'project-links-innab10.netlify.app' }],
	},

	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		NEXT_PUBLIC_URL: process.env.REACT_APP_URL,
	},
}

export default nextConfig
