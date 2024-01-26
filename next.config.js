/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig, // Mantén cualquier otra configuración existente que puedas tener
  
    images: {
      domains: ['cdn.imagin.studio'],
    },
  };
