import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	resolve: {
		alias: {
			"./runtimeConfig": "./runtimeConfig.browser"
		}
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				login: resolve(__dirname, "login.html"),
				register: resolve(__dirname, "register.html")
			},
			// plugins: [
			// 	nodeResolve({
			// 		browser: true,
			// 		preferBuiltins: false
			// 	}),
			// 	json()
			// ]
		}
	}
})