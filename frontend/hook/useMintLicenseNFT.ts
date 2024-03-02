import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import LicenseNFT from "@/contract/abi/LicenseNFT.json";
import { LICENCE_NFT_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/app/client";

export const useMintLicenseNFT = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const mintLicense = async () => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: LICENCE_NFT_ADDRESS,
        abi: LicenseNFT.abi,
        functionName: "mint",
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
    mintLicense,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
