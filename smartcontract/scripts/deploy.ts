import hre from "hardhat";

async function main() {
  const ModelNFT = await hre.viem.deployContract("ModelNFT", [
    "FLock Model NFT",
    "FLMT",
  ]);

  console.log(`deployed to ${ModelNFT.address}`);

  //@ts-ignore
  const ModelNFTRegistrar = await hre.viem.deployContract("IPARegistrar", [
    "0x3809f4128B0B33AFb17576edafD7D4F4E2ABE933",
    "0x292639452A975630802C17c9267169D93BD5a793",
    ModelNFT.address,
  ]);

  console.log(`deployed to ${ModelNFTRegistrar.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
