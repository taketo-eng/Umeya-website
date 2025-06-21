import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    //! reactStrictMode is 'false' for bug of react-big-calendar
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.microcms-assets.io',
            },
        ],
    },
    rewrites: async () => [
        { source: '/', destination: '/ja' },
        // 静的ファイル（画像、SVG等）のリライト
        { source: '/ja/:path*.svg', destination: '/:path*.svg' },
        { source: '/ja/:path*.png', destination: '/:path*.png' },
        { source: '/ja/:path*.jpg', destination: '/:path*.jpg' },
        { source: '/ja/:path*.jpeg', destination: '/:path*.jpeg' },
        { source: '/ja/:path*.gif', destination: '/:path*.gif' },
        { source: '/ja/:path*.webp', destination: '/:path*.webp' },
        { source: '/ja/:path*.ico', destination: '/:path*.ico' },

        { source: '/en/:path*.svg', destination: '/:path*.svg' },
        { source: '/en/:path*.png', destination: '/:path*.png' },
        { source: '/en/:path*.jpg', destination: '/:path*.jpg' },
        { source: '/en/:path*.jpeg', destination: '/:path*.jpeg' },
        { source: '/en/:path*.gif', destination: '/:path*.gif' },
        { source: '/en/:path*.webp', destination: '/:path*.webp' },
        { source: '/en/:path*.ico', destination: '/:path*.ico' },

        { source: '/de/:path*.svg', destination: '/:path*.svg' },
        { source: '/de/:path*.png', destination: '/:path*.png' },
        { source: '/de/:path*.jpg', destination: '/:path*.jpg' },
        { source: '/de/:path*.jpeg', destination: '/:path*.jpeg' },
        { source: '/de/:path*.gif', destination: '/:path*.gif' },
        { source: '/de/:path*.webp', destination: '/:path*.webp' },
        { source: '/de/:path*.ico', destination: '/:path*.ico' },
        // { source: '/:locale(en|ja)/:path*', destination: '/:path*', has: [{ type: 'header', key: 'accept', value: '.*image.*|.*svg.*' }] },
    ]
    // experimental: { nextScriptWorkers: true },
}

export default nextConfig