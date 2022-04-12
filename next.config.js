/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {

    reactStrictMode:true,
    images: {
        loader:'akamai',
        path:''
    },
    basePath: "/myrick",
    assetPrefix: "/myrick",
}

module.exports = nextConfig