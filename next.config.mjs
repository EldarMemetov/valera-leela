import path from "path";

const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://res.cloudinary.com",
      "media-src 'self' blob: https://res.cloudinary.com",
      "font-src 'self' data:",
      "connect-src 'self' https://res.cloudinary.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // SVG как React-компоненты: Turbopack
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // SVG как React-компоненты: webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src")],
    additionalData: `
    @use "shared/styles/breakpoints" as *;
    @use "shared/styles/mixins" as *;
    @use "shared/styles/variables" as *;
  `,
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
