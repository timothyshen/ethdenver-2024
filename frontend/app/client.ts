import { http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createPublicClient, createWalletClient, custom } from "viem";

export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: sepolia,
  transport: custom((window as any).ethereum!),
});
