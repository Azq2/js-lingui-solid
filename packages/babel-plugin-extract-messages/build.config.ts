import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  externals: ["@babel/core", "@babel/types", "@babel/traverse", "@lingui-solid/babel-plugin-lingui-macro"],
  failOnWarn: false
})
