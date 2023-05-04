/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/core",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
])

const { i18n } = require("./next-i18next.config")

const nextConfig = {
  i18n,
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
