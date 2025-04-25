import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        emotion: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API}/api/:path*`,
            },
        ];
    },
    webpack: config => {
        const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            }
        );

        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

export default withBundleAnalyzer(nextConfig);
