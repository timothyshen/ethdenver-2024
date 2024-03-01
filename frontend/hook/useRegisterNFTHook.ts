import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPARemixRegistrar from "@/contract/abi/IPARemixRegistrar.json";
import { IPAREGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";
import { config } from "@/provider/client";

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

      return walletClient.writeContract({
        address: IPAREGISTRAR_ADDRESS,
        abi: IPARemixRegistrar.abi,
        functionName: "register",
        args: [ipName, createdAt, numParams, modelName],
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
    registerIP,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
