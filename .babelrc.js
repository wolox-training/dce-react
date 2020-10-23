module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~assets": "./src/app/assets",
          "~components": "./src/app/components",
          "~config": "./src/config",
          "~hooks": "./src/app/hooks",
          "~screens": "./src/app/screens",
          "~utils": "./src/utils"
        }
      }
    ]
  ]
}
