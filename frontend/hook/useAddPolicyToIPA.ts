import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPAPolicyCreation from "@/contract/abi/IPAPolicyCreation.json";
import { POLICY_REGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/app/client";
import { PolicyProps } from "@/types/index";



export const useAddPolicyToIPA = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const addPolicy = async (pilPolicy: PolicyProps, ipId: `0x${string}`) => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: POLICY_REGISTRAR_ADDRESS,
        abi: IPAPolicyCreation.abi,
        functionName: "addPolicyToIPA",
        args: [pilPolicy, ipId],
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
    addPolicy,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
