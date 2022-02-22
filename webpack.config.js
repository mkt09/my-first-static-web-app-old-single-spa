const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);


module.exports = {
  output: {
    uniqueName: "psmUi",
    publicPath: "auto",
  },
  devServer: {
    proxy: require("./proxy.conf")
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({

      name: "psmUi",
      library: { type: "var", name: "psmUi" },
      filename: "remoteEntry.js",
      exposes: {
        './PsmSatdApp': "./src/main.single-spa.ts"
      },

      remotes: {
        // shared libraray
        // remote entry move to cdn
        psmDeployment: "psmDeployment@https://cdn.jsdelivr.net/gh/mkt09/module-fed-psm-deployment/dist/psm-deployment/remoteEntry.js",
        psmOverview: "psmOverview@https://cdn.jsdelivr.net/gh/mkt09/module-fed-overview/dist/psm-overview/remoteEntry.js",
        psmInsight: "psmInsight@https://cdn.jsdelivr.net/gh/mkt09/module-fed-insight/dist/psm-insight/remoteEntry.js"
      },

      shared: share(
        {
        "@angular/core": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          eager: true,
          requiredVersion: "auto",
        },
        "@angular/platform-browser": {
          singleton: true,
          eager: true
        },
        "@angular/platform-browser-dynamic": {
          singleton: true,
          eager: true
        },
        'single-spa-angular':{
          singleton: true,
          eager: true,
        },
        'single-spa':{
          singleton: true,
          eager: true,
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
