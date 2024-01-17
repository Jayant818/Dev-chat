/** @type {import('next').NextConfig} */
const nextConfig = {
	// Allowing all patterns of images - from clerk we are receiving image url with some embedding in it
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
			},
			{
				protocol: "http",
				hostname: "*",
			},
		],
	},
};

module.exports = nextConfig;
