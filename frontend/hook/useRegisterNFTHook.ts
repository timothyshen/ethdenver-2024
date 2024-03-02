import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPARegistrar from "@/contract/abi/IPARegistrar.json";
import IPAssetsRegistry from "@/contract/abi/IPAssetRegistry.json";
import {
  IPA_REGISTRAR_ADDRESS,
  IPA_ASSETS_REGISTRY_ADDRESS,
} from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";

export const useRegistrarIP = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const registerIP = async (
    ipName: string,
    createdAt: string,
    numParams: string,
    modelName: string
  ) => {
    try {
      const [account] = await walletClient.getAddresses();

      await walletClient.writeContract({
        address: IPA_ASSETS_REGISTRY_ADDRESS,
        abi: IPAssetsRegistry.abi,
        functionName: "setApprovalForAll",
        args: [IPA_REGISTRAR_ADDRESS, true],
        account: account,
      });

      console.log("account", account);
      const res = await walletClient.writeContract({
        address: IPA_REGISTRAR_ADDRESS,
        abi: IPARegistrar.abi,
        functionName: "register",
        args: [ipName, createdAt, numParams, modelName],
        account: account,
      });
      console.log("res", res);
    } catch (error) {
      console.error("error", error);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    registerIP,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
