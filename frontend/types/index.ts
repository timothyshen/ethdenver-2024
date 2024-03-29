export type ModelProps = {
  name: string;
  numParam: string;
  parentID?: string;
};

type ModelNFTProps = {
  creator: `0x${string}`;
  createdAt: string;
  numParams: string;
  modelName: string;
};

export type ModelNFTMetadataProps = {
  tokenId: BigInt;
  owner: `0x${string}`;
  ipId: `0x${string}`;
  modelInfo: ModelNFTProps;
};

export type PolicyProps = {
  attribution: boolean;
  commercialUse: boolean;
  commercialAttribution: boolean;
  commercializerChecker: string; // Assuming address is meant to be a string (hexadecimal)
  commercializerCheckerData: string | Uint8Array; // 'bytes' could be a string representation or a Uint8Array
  commercialRevShare: number; // 'uint32' translates to number in TypeScript, assuming it fits within JavaScript's number range
  derivativesAllowed: boolean;
  derivativesAttribution: boolean;
  derivativesApproval: boolean;
  derivativesReciprocal: boolean;
  territories: string[];
  distributionChannels: string[];
  contentRestrictions: string[];
};
