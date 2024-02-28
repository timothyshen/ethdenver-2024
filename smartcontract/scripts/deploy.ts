import hre from "hardhat";

async function main() {
  const ModelNFT = await hre.viem.deployContract("ModelNFT", [
    "FLock Model NFT",
    "FLMT",
  ]);

  console.log(`deployed to ${ModelNFT.address}`);

  const 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
