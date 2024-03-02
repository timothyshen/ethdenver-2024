import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-foundry";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  etherscan: {
    apiKey: "GC8SX5ATPASN4R1SS55FQ1RGDEQTP3PK72",
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/2C2lesFvWRqHSDJXJRwY72hTKIH`,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

export default config;
