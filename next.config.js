/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basepath:'/nextjs-pages',
    assetPrefix:'/nextjs-pages',
    reactStrictMode:true,
    images: {
        loader:'akamai',
        path:''
    },
}

module.exports = nextConfig