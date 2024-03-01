import hre from "hardhat";

async function main() {
  const ModelNFT = await hre.viem.deployContract("ModelNFT", [
    "FLock Model NFT",
    "FLMT",
  ]);

  const LicenseNFT = await hre.viem.deployContract("LicenseNFT", [
    "FLock License NFT",
    "FLCT",
  ]);

  //@ts-ignore
  const TokenFLOCK = await hre.viem.deployContract("FLockDenverToken", []);

  console.log(`deployed ModelNFT to ${ModelNFT.address}`);
  console.log(`deployed LicenseNFT to ${LicenseNFT.address}`);

  //@ts-ignore
  const ModelNFTRegistrar = await hre.viem.deployContract("IPARegistrar", [
    "0x292639452A975630802C17c9267169D93BD5a793",
    "0x3809f4128B0B33AFb17576edafD7D4F4E2ABE933",
    ModelNFT.address,
  ]);

  const ModelNFTRemix = await hre.viem.deployContract("IPARemixRegistrar", [
    "0x292639452A975630802C17c9267169D93BD5a793",
    "0x3809f4128B0B33AFb17576edafD7D4F4E2ABE933",
  ]);

  console.log(`deployed ModelNFTRemix to ${ModelNFTRemix.address}`);
  console.log(`deployed ModelNFTRegistrar to ${ModelNFTRegistrar.address}`);

  //@ts-ignore
  const LicensingRegistrar = await hre.viem.deployContract(
    "IPAPolicyCreation",
    [
      "0xA6bEf9CC650A16939566c1da5d5088f3F028a865",
      5,
      TokenFLOCK.address,
      "0xf82EEe73c2c81D14DF9bC29DC154dD3c079d80a0",
    ]
  );

  // @ts-ignore
  const PolicyRegistrar = await hre.viem.deployContract("ModelNFTLiecnse", [
    "0xA6bEf9CC650A16939566c1da5d5088f3F028a865",
    "0x3809f4128B0B33AFb17576edafD7D4F4E2ABE933",
    5,
    TokenFLOCK.address,
  ]);

  console.log(`deployed PolicyRegistrar to ${PolicyRegistrar.address}`);
  console.log(`deployed LicensingRegistrar to ${LicensingRegistrar.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
