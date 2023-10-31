import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import preprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", '.svx'],

<<<<<<< HEAD
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
=======
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },

  vite: {
    define: {
      "process.env.OPENAI_API_KEY": process.env.OPENAI_API_KEY,
    },
  },
>>>>>>> efe93bdb22ab27e9e0076a5126f29b1ef325d29c
};

export default config;
