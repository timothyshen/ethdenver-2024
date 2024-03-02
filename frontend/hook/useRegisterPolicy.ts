"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPAPolicyCreation from "@/contract/abi/IPAPolicyCreation.json";
import { POLICY_REGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { useContext } from "react";
import { WalletContext } from "@/contexts/WalletContext";
import { sepolia } from "wagmi/chains";

export const useRegisterPolicy = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { walletClient } = useContext(WalletContext);

  const registerPolicy = async (pilPolicy: number) => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client not found");
      }

      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: POLICY_REGISTRAR_ADDRESS,
        abi: IPAPolicyCreation.abi,
        functionName: "registerPolicy",
        args: [pilPolicy],
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
    registerPolicy,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
