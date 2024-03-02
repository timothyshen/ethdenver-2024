"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import ModelNFTLiecnse from "@/contract/abi/ModelNFTLiecnse.json";
import AccessControl from "@/contract/abi/AccessPermission.json";

import { IPA_LICENSING_REGISTRY_ADDRESS } from "@/contract/contractAddress";
import IPALicensing from "@/contract/abi/LicenseModule.json";

import { encodeFunctionData } from "viem";
import { useContext } from "react";
import { WalletContext } from "@/contexts/WalletContext";
import { sepolia } from "wagmi/chains";

export const useCreateLicense = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { walletClient } = useContext(WalletContext);

  const createLicense = async (pilPolicy: any, licensorIpId: `0x${string}`) => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client not found");
      }
      const [account] = await walletClient.getAddresses();

      const setPermissionHash = encodeFunctionData({
        abi: AccessControl.abi,
        functionName: "setPermission",
        args: [
          ipId,
          account,
          IPA_LICENSING_REGISTRY_ADDRESS,
          "0x00000000",
          BigInt(1),
        ],
      });
      return walletClient.writeContract({
        address: IPA_LICENSING_REGISTRY_ADDRESS,
        abi: IPALicensing.abi,
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
