import vitePreprocessor from "cypress-vite";
import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173",
	},
});
