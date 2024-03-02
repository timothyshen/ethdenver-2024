"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

// TBA calls
// import IPAPolicyCreation from "@/contract/abi/IPAPolicyCreation.json";
// import { POLICY_REGISTRAR_ADDRESS } from "@/contract/contractAddress";

import {
  IPA_LICENSING_REGISTRY_ADDRESS,
  LICENSING_REGISTRAR_ADDRESS,
  PERMISSIONED_ADDRESS,
  IPA_ACCOUNTS_ADDRESS,
} from "@/contract/contractAddress";
import IPALicensing from "@/contract/abi/LicenseModule.json";
import AccessControl from "@/contract/abi/AccessPermission.json";
import IPAccount from "@/contract/abi/IPAccount.json";

import { useContext } from "react";
import { WalletContext } from "@/contexts/WalletContext";
import { sepolia } from "wagmi/chains";
import { encodeFunctionData, parseEther } from "viem";

export const useAddPolicyToIPA = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { walletClient } = useContext(WalletContext);

  const addPolicy = async (pilPolicy: number, ipId: `0x${string}`) => {
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
      console.log("setPermissionHash", setPermissionHash);

      const addPolicyToIpHash = encodeFunctionData({
        abi: IPALicensing.abi,
        functionName: "addPolicyToIp",
        args: [ipId, BigInt(pilPolicy)],
      });

      walletClient.writeContract({
        address: ipId,
        abi: IPAccount.abi,
        functionName: "execute",
        args: [PERMISSIONED_ADDRESS, parseEther("0"), setPermissionHash],
        account: account,
        chain: sepolia,
      });

      // walletClient.writeContract({
      //   address: PERMISSIONED_ADDRESS,
      //   abi: AccessControl.abi,
      //   functionName: "setPermission",
      //   args: [ipId, account, IPA_LICENSING_REGISTRY_ADDRESS, "0x00000000", 1],
      //   account: account,
      //   chain: sepolia,
      // });

      // return walletClient.writeContract({
      //   address: IPA_LICENSING_REGISTRY_ADDRESS,
      //   abi: IPALicensing.abi,
      //   functionName: "addPolicyToIp",
      //   args: [ipId, BigInt(pilPolicy)],
      //   account: account,
      //   chain: sepolia,
      // });
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
