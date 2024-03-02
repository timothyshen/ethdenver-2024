import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { getDefaultConfig } from "connectkit";

export const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Next.js demo",
    chains: [sepolia],

    // Required API Keys
    walletConnectProjectId: "",

    // Optional App Info
    appDescription: "FLock Model NFT Minting App",
    appUrl: "https://flock.io", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

