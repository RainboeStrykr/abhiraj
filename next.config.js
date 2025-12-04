module.exports = {
  env: {
    instagram: "abhiraj.fr",
    twitter: "rainboestrykr",
  }
}

// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { crypto: false };
    return config;
  },
};
