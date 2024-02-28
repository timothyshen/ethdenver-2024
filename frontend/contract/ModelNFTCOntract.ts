import { client } from "@/provider/client";
import ModelNFT from "./abi/ModelNFT.json";
import { MODEL_NFT_ADDRESS } from "./contractAddress";

export async function getModelInfoByTokenId(tokenId: number) {
  const getModelInfo = await client.readContract({
    abi: ModelNFT.abi,
    functionName: "getModelInfo",
    address: MODEL_NFT_ADDRESS,
    args: [BigInt(tokenId)],
  });
  console.log("getModelInfo", getModelInfo);
  return getModelInfo;
}

export async function getAllModelInfo() {
  const getAllModelInfo = await client.readContract({
    abi: ModelNFT.abi,
    functionName: "getAllModelInfo",
    address: MODEL_NFT_ADDRESS,
  });
  console.log("getAllModelInfo", getAllModelInfo);
  return getAllModelInfo;
}
