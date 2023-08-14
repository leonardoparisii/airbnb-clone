/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        domains:[
            'res.cloudinqry.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com'
        ]
    }
}

module.exports = nextConfig
