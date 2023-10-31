import { defineMDSveXConfig as defineConfig } from "mdsvex";
import math from 'remark-math'
import ktx from 'rehype-katex-svelte'

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [math],
  rehypePlugins: [ktx]
});

export default config;
