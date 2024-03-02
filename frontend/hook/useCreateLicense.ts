import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import ModelNFTLiecnse from "@/contract/abi/ModelNFTLiecnse.json";
import { LICENSING_REGISTRAR_ADDRESS } from "@/contract/contractAddress";
import { walletClient } from "@/app/client";
import { zeroAddress } from "viem";

export const useCreateLicense = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const createLicense = async (pilPolicy: any, licensorIpId: `0x${string}`) => {
    try {
      const [account] = await walletClient.getAddresses();
      const registrationParams = {
        transferable: true, // Whether or not attribution is required when reproducing the work
        royaltyPolicy: zeroAddress, // Address of a royalty policy contract that will handle royalty payments
        mintingFee: BigInt(0),
        mintingFeeToken: zeroAddress,
        policy: pilPolicy,
      };

      console.log("account", account);
      console.log("pilPolicy", pilPolicy);
      console.log("licensorIpId", licensorIpId);
      const res = await walletClient.writeContract({
        address: LICENSING_REGISTRAR_ADDRESS,
        abi: ModelNFTLiecnse.abi,
        functionName: "createLicense",
        args: [registrationParams, licensorIpId],
        account: account,
      });
      console.log("res", res);
      console.log("res", error);
      return res;
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
