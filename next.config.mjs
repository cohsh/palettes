/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/palettes/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/palettes' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;