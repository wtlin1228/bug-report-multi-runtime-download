import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "kirby",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
    "./Card": "./src/components/Card.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  getPublicPath: `function() { return 'http://localhost:3001/' }`,
});
