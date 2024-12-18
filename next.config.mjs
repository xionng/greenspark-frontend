/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true
          }
        }
      ]
    });

    return config;
  },
  images: {
    domains: ["img1.kakaocdn.net", "img.freepik.com", "drive.google.com"]
  }
};

export default nextConfig;
