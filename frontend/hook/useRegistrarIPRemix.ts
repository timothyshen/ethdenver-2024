"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPAssetRemix from "@/contract/abi/IPARemixRegistrar.json";
import { IPA_REMIX_REGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { useContext } from "react";
import { WalletContext } from "@/contexts/WalletContext";
import { sepolia } from "wagmi/chains";

export const useRegistrarIPRemix = () => {
  const { walletClient } = useContext(WalletContext);
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const registerIPRemix = async (
    licenseIds: BigInt[],
    tokenContract: `0x${string}`,
    tokenId: BigInt
  ) => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client not found");
      }

      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: IPA_REMIX_REGISTRAR_ADDRESS,
        abi: IPAssetRemix.abi,
        functionName: "remix",
        args: [licenseIds, tokenContract, tokenId],
        account: account,
        chain: sepolia,
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
