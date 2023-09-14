module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: [
      "src/test/features/",
    ],
    dryRun: false,
    require: [
      "src/test/steps/*.ts",
      "src/hooks/hooks.ts"
    ],
    requireModule: [
      "ts-node/register"
    ]
  }
}
