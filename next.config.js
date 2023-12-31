/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config,{builddId,ddev,isServer,defaultLoaders,webpack}) => {
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
        return config
    }
}

module.exports = nextConfig
