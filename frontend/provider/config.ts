import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { createClient, createPublicClient, defineChain } from "viem";
import { injected, metaMask } from "wagmi/connectors";

const localhost = defineChain({
  id: 1,
  name: "Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
});

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const client = createPublicClient({
  chain: localhost,
  transport: http(),
});
