import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import IPARegstrar from "@/contract/abi/IPARegistrar.json";
import { IPAREMIXREGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/provider/client";

export const useRegistrarIPRemix = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const registerIPRemix = async (
    licenseIds: BigInt[],
    tokenContract: `0x${string}`,
    tokenId: BigInt
  ) => {
    try {
      const [account] = await walletClient.getAddresses();

      return walletClient.writeContract({
        address: IPAREMIXREGISTRAR_ADDRESS,
        abi: IPARegstrar.abi,
        functionName: "remix",
        args: [licenseIds, tokenContract, tokenId],
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
    registerIPRemix,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
