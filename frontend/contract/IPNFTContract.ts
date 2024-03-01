import { client } from "@/provider/client";
import IPARemixRegistrar from "@/contract/abi/IPARemixRegistrar.json";
import { IPAREGISTRAR_ADDRESS } from "@/contract/contractAddress";

export async function getModelInfoByTokenId(tokenId: number) {
  const getModelInfo = await client.readContract({
    abi: IPARemixRegistrar.abi,
    functionName: "getModelInfo",
    address: IPAREGISTRAR_ADDRESS,
    args: [BigInt(tokenId)],
  });
  console.log("getModelInfo", getModelInfo);
  return getModelInfo;
}

export async function getAllModelInfo() {
  const getAllModelInfo = await client.readContract({
    abi: IPARemixRegistrar.abi,
    functionName: "getAllModelInfo",
    address: IPAREGISTRAR_ADDRESS,
  });
  console.log("getAllModelInfo", getAllModelInfo);
  return getAllModelInfo;
}
