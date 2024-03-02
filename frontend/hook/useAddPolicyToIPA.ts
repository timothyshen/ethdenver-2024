"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

// TBA calls
// import IPAPolicyCreation from "@/contract/abi/IPAPolicyCreation.json";
// import { POLICY_REGISTRAR_ADDRESS } from "@/contract/contractAddress";

import { IPA_LICENSING_REGISTRY_ADDRESS } from "@/contract/contractAddress";
import IPALicensing from "@/contract/abi/LicenseModule.json";

import { useContext } from "react";
import { WalletContext } from "@/contexts/WalletContext";
import { sepolia } from "wagmi/chains";

export const useAddPolicyToIPA = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { walletClient } = useContext(WalletContext);

  const addPolicy = async (pilPolicy: number, ipId: `0x${string}`) => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client not found");
      }

      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: IPA_LICENSING_REGISTRY_ADDRESS,
        abi: IPALicensing.abi,
        functionName: "addPolicyToIp",
        args: [ipId, BigInt(pilPolicy)],
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
    addPolicy,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
