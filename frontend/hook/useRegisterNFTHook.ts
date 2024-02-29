import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPARegstrar from "@/contract/abi/IPARegistrar.json";
import { IPAREGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { parseEther } from "viem";

export const useRegistrarIP = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const registerIP = (
    ipName: string,
    createdAt: string,
    numParams: string,
    modelName: string
  ) => {
    try {
      return writeContract({
        address: IPAREGISTRAR_ADDRESS,
        abi: IPARegstrar.abi,
        functionName: "register",
        args: [ipName, createdAt, numParams, modelName],
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
