import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import ModelNFTLiecnse from "@/contract/abi/ModelNFTLiecnse.json";
import { LICENSINGREGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";

export const useCreateLicense = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const createLicense = async () => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: LICENSINGREGISTRAR_ADDRESS,
        abi: ModelNFTLiecnse.abi,
        functionName: "mintLicense",
        args: [account],
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
    createLicense,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
