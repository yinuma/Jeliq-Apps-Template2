import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [reactRouter()],
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
});
