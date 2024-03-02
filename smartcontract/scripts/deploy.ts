import hre from "hardhat";
import { zeroAddress } from "viem";

async function main() {
  // const ModelNFT = await hre.viem.deployContract("ModelNFT", [
  //   "FLock Model NFT",
  //   "FLMT",
  // ]);

  // const LicenseNFT = await hre.viem.deployContract("LicenseNFT", [
  //   "FLock License NFT",
  //   "FLCT",
  // ]);

  // //@ts-ignore
  // const TokenFLOCK = await hre.viem.deployContract("FLockDenverToken", []);

  // console.log(`deployed ModelNFT to ${ModelNFT.address}`);
  // console.log(`deployed LicenseNFT to ${LicenseNFT.address}`);

  // //@ts-ignore
  // const ModelNFTRegistrar = await hre.viem.deployContract("IPARegistrar", [
  //   "0x292639452A975630802C17c9267169D93BD5a793",
  //   "0x3809f4128B0B33AFb17576edafD7D4F4E2ABE933",
  //   ModelNFT.address,
  // ]);

  // const ModelNFTRemix = await hre.viem.deployContract("IPARemixRegistrar", [
  //   "0x292639452A975630802C17c9267169D93BD5a793",
  //   "0x3809f4128B0B33AFb17576edafD7D4F4E2ABE933",
  // ]);

  // console.log(`deployed ModelNFTRemix to ${ModelNFTRemix.address}`);
  // console.log(`deployed ModelNFTRegistrar to ${ModelNFTRegistrar.address}`);

  //@ts-ignore
  const PolicyRegistrar = await hre.viem.deployContract<any>(
    "IPAPolicyCreation",
    [
      "0xeaabf2b80b7e069ee449b5629590a1cc0f9bc9c2",
      "0x950d766A1a0afDc33c3e653C861A8765cb42DbdC",
    ]
  );

  // @ts-ignore
  // const LicensingRegistrar = await hre.viem.deployContract("ModelNFTLiecnse", [
  //   zeroAddress,
  //   BigInt(0),
  //   zeroAddress,
  //   "0xeAABf2b80B7e069EE449B5629590A1cc0F9bC9C2",
  // ]);

  console.log(`deployed PolicyRegistrar to ${PolicyRegistrar.address}`);
  // console.log(`deployed LicensingRegistrar to ${LicensingRegistrar.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
