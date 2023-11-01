import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import preprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", '.svx'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	vite: {
		define: {
		  'process.env.OPENAI_API_KEY': process.env.OPENAI_API_KEY,
		},
		server: {
            fs: {
                allow: ["/home/user/super"]
            }
        },
	  },
};

export default config;
