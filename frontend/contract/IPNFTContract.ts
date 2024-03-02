import IPARegistrar from "@/contract/abi/IPARegistrar.json";
import { createPublicClient, createWalletClient, custom } from "viem";
import { http } from "wagmi";
import { sepolia } from "viem/chains";
import { IPA_REGISTRAR_ADDRESS } from "@/contract/contractAddress";

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

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
  return await client.readContract({
    abi: IPARegistrar.abi,
    functionName: "getAllModelInfo",
    address: IPA_REGISTRAR_ADDRESS,
  });
}
