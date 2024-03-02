"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import ModelNFTLiecnse from "@/contract/abi/ModelNFTLiecnse.json";
import { LICENSING_REGISTRAR_ADDRESS } from "@/contract/contractAddress";

import { zeroAddress } from "viem";
import {useContext} from "react";
import {WalletContext} from "@/contexts/WalletContext";
import {sepolia} from "wagmi/chains";

export const useCreateLicense = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const {walletClient} =  useContext(WalletContext)

  const createLicense = async (pilPolicy: any, licensorIpId: `0x${string}`) => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client not found");
      }
      const [account] = await walletClient.getAddresses();
      return walletClient.writeContract({
        address: LICENSING_REGISTRAR_ADDRESS,
        abi: ModelNFTLiecnse.abi,
        functionName: "createLicense",
        args: [pilPolicy, licensorIpId],
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
    createLicense,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
