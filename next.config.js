// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// const nextConfiguration = {
//   target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
// };

// module.exports = withPlugins([optimizedImages], nextConfiguration);

// next.config.js

// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// }
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'file-loader',
    });

    return config;
  },
});