"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import LicenseNFT from "@/contract/abi/LicenseNFT.json";
import { LICENCE_NFT_ADDRESS } from "@/contract/contractAddress";
import { useContext } from "react";
import { WalletContext } from "@/contexts/WalletContext";
import { sepolia } from "wagmi/chains";

export const useMintLicenseNFT = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { walletClient } = useContext(WalletContext);
  const mintLicense = async () => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client not found");
      }
      
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: LICENCE_NFT_ADDRESS,
        abi: LicenseNFT.abi,
        functionName: "mint",
        args: [account],
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
    mintLicense,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
