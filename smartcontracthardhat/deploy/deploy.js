const { getNamedAccounts, deployments, network, run, artifacts } = require("hardhat")
const {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config")
const { verify } = require("../helper-functions")
const path = require("path")
const fs = require("fs")

async function deployContract(contractName, ...params) {
  const Contract = await ethers.getContractFactory(contractName)
  const contract = await Contract.deploy(...params)

  const abi = await artifacts.readArtifact(contractName)
  const address = contract.address
  const jsonToExport = { address, ...abi }
  const jsonString = JSON.stringify(jsonToExport, null, 2)
  const exportPath = path.resolve(__dirname) + `/../deployments/${network.name}/${contractName}.json`
  fs.writeFile(exportPath, jsonString, function (err) {
    if (err) throw err
    console.log("File is created successfully.")
  })
  // // Verify the deployment
  // console.log("Verifying...")
  // await verify(contract.address, [...params])
  return contract
}

module.exports = async ({ getNamedAccounts, deployments }) => {
  const ModelNFT = await deployContract("ModelNFT", "name","symbol")
  console.log("ModelNFT deployed to:", ModelNFT)
}
