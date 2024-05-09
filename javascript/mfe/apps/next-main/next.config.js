const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            remote: "remote@http://localhost:3001/remote.js",
            remote2: "remote2@http://localhost:4173/assets/remote2.js",
          },

          filename: "static/chunks/remote.js",
        }),
      );
    } else {
      config.resolve.alias["remote"] = false;
    }

    return config;
  },
};
