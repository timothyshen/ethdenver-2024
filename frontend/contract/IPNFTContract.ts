import { client } from "@/provider/client";
import IPARegistrar from "@/contract/abi/IPARegistrar.json";
import { IPA_REGISTRAR_ADDRESS } from "@/contract/contractAddress";

export async function getModelInfoByTokenId(tokenId: number) {
  const getModelInfo = await client.readContract({
    abi: IPARegistrar.abi,
    functionName: "getModelInfo",
    address: IPA_REGISTRAR_ADDRESS,
    args: [BigInt(tokenId)],
  });
  console.log("getModelInfo", getModelInfo);
  return getModelInfo;
}

export async function getAllModelInfo() {
  const getAllModelInfo = await client.readContract({
    abi: IPARegistrar.abi,
    functionName: "getAllModelInfo",
    address: IPA_REGISTRAR_ADDRESS,
  });
  console.log("getAllModelInfo", getAllModelInfo);
  return getAllModelInfo;
}
