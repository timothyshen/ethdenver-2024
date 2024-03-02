"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPAssetRemix from "@/contract/abi/IPARemixRegistrar.json";
import { IPA_REMIX_REGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/app/client";

export const useRegistrarIPRemix = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const registerIPRemix = async (
    licenseIds: BigInt[],
    tokenContract: `0x${string}`,
    tokenId: BigInt
  ) => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: IPA_REMIX_REGISTRAR_ADDRESS,
        abi: IPAssetRemix.abi,
        functionName: "remix",
        args: [licenseIds, tokenContract, tokenId],
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
    registerIPRemix,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
