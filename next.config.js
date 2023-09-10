/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['localhost', 'res.cloudinary.com'],
    },
}

module.exports = nextConfig
