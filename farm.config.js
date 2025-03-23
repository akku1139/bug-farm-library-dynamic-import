import { defineConfig } from "@farmfe/core"

export default defineConfig({
  compilation: {
    presetEnv: false,
    sourcemap: false,
    minify: false,
    input: {
      entry: "src/entry.js",
    },
    output: {
      targetEnv: "library",
    },
  }
})
