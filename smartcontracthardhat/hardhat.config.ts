import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-foundry";

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    // sepolia: {
    //   url: "https://sepolia.dev",
    //   accounts: ["0x..."],
    // },
  },
};

export default config;
