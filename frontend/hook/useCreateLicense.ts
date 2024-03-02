"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import ModelNFTLiecnse from "@/contract/abi/ModelNFTLiecnse.json";
import { LICENSING_REGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/app/client";
import { zeroAddress } from "viem";

export const useCreateLicense = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const createLicense = async (pilPolicy: any, licensorIpId: `0x${string}`) => {
    try {
      const [account] = await walletClient.getAddresses();
      return walletClient.writeContract({
        address: LICENSING_REGISTRAR_ADDRESS,
        abi: ModelNFTLiecnse.abi,
        functionName: "createLicense",
        args: [pilPolicy, licensorIpId],
        account: account,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    createLicense,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
