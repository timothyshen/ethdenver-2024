// SPDX-license-identifier: MIT
pragma solidity ^0.8.23;

import "@storyprotocol/periphery/contracts/StoryProtocolGateway.sol";


contract ModelNFTLiecnse{
   
    bytes ROYALTY_CONTEXT = "This is loyalty fee for the license.";
    StoryProtocolGateway public SPG;
    address public ROYALTY_POLICY;
    uint256 public MINTING_FEE;
    address public MINTING_FEE_TOKEN;
  
    constructor(address spg, address royaltyPolicy, uint256 mintingFee, address mintingFeeToken) {
        SPG = StoryProtocolGateway(spg);
        ROYALTY_POLICY = royaltyPolicy;
        MINTING_FEE = mintingFee;
        MINTING_FEE_TOKEN = mintingFeeToken;
    }
  
    function createLicense(
  	    PILPolicy memory pilPolicy,
        address licensorIpId
	) public{
        SPG.mintLicensePIL(pilPolicy, licensorIpId, 1, ROYALTY_CONTEXT,false,ROYALTY_POLICY, MINTING_FEE, MINTING_FEE_TOKEN);
    }
}
