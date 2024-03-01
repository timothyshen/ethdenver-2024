import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPAPolicyCreation from "@/contract/abi/IPAPolicyCreation.json";
import { POLICYREGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";
import { PolicyProps } from "@/types/index";

export const useRegisterPolicy = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const registerPolicy = async (pilPolicy: PolicyProps) => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: POLICYREGISTRAR_ADDRESS,
        abi: IPAPolicyCreation.abi,
        functionName: "registerPolicy",
        args: [pilPolicy],
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
    registerPolicy,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
