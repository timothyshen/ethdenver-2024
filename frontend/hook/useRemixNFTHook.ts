import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import ModelNFTLiecnse from "@/contract/abi/ModelNFTLiecnse.json";
import { LICENSINGREGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";

export const useRegistrarIPRemix = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const purchaseLicence = async (
    pilPolicy: any,
    licensorIpId: `0x${string}`
  ) => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: LICENSINGREGISTRAR_ADDRESS,
        abi: ModelNFTLiecnse.abi,
        functionName: "createLicense",
        args: [pilPolicy, licensorIpId],
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
    purchaseLicence,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
