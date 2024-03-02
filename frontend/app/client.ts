"use client";

import { http } from "wagmi";
import { sepolia } from "wagmi/chains";
import "viem/window";
import { createPublicClient, createWalletClient, custom } from "viem";

export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

// export const walletClient = createWalletClient({
//   chain: sepolia,
//   // @ts-ignore
//   transport: custom(window.ethereum!),
// });
