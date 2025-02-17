const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = () => ({
  mode: 'production',
  output : {
    filename : "macos.[id].js"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'PORTFOLIO',
      filename: 'remoteEntry.js',
      remotes: {
        PORTFOLIO: 'PORTFOLIO@https://strek.netlify.app/remoteEntry.js',
        VSCODE: 'VSCODE@https://vsclone.netlify.app/remoteEntry.js',
        INSTA: 'INSTA@https://strek-insta.netlify.app/remoteEntry.js',
        ITERM: 'ITERM@https://terminal-clone.netlify.app/remoteEntry.js',
      },
      shared: [{
        react: {
          requiredVersion: '^17.0.2',
          singleton: true,
        },
      }],
    }),
  ],
});
