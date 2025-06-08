import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "pikmin",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
    "./Card": "./src/components/Card.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
