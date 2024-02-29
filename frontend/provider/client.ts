import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createPublicClient, createWalletClient, custom } from "viem";
import { getDefaultConfig } from "connectkit";

export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: sepolia,
  //@ts-ignore
  transport: custom(window?.ethereum),
});

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
