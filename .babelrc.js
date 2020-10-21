module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~components": "./src/app/components",
          "~screens": "./src/app/screens",
          "~hooks": "./src/app/hooks",
          "~assets": "./src/app/assets",
          "~config": "./src/config"
        }
      }
    ]
  ]
}
