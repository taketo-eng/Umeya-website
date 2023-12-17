/** @type {import('next').NextConfig} */

module.exports = {
  //! reactStrictMode is 'false' for bug of react-big-calendar
  reactStrictMode: false,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  experimental: { nextScriptWorkers: true },
}
