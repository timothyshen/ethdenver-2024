"use client";

import { http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createPublicClient } from "viem";

export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});
