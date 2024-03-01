import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import LicenseNFT from "@/contract/abi/LicenseNFT.json";
import { LICENCE_NFT_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";

export const useCreateLicense = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const createLicense = async (
    pilPolicy: any,
    licensorIpId: `0x${string}`
  ) => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: LICENCE_NFT_ADDRESS,
        abi: LicenseNFT.abi,
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
    createLicense,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
