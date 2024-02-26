// SPDX-license-identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/modules/licensing/LicensingModule.sol";
import "@story-protocol/periphery/contracts/StoryProtocolGateway.sol";
import "@story-protocol/core/contracts/modules/licensing/PILPolicyFrameworkManager.sol";
import "@story-protocol/core/contracts/registries/IPAssetRegistry.sol";

// This is the licensing contract for the IPA

contract ModelNFTLiecnse{
   
    bytes ROYALTY_CONTEXT = "This is loyalty fee for the license.";
    StoryProtocolGateway public SPG;
    address public ROYALTY_POLICY;
    uint256 public MINTING_FEE;
    address public MINTING_FEE_TOKEN;
  
    constructor(address spg, address royaltyPolicy, uint256 mintingFee, uint256 mintingFeeToken) {
        SPG = spg;
        ROYALTY_POLICY = royaltyPolicy;
        MINTING_FEE = mintingFee;
        MINTING_FEE_TOKEN = mintingFeeToken;
    }
  
    function createLicense(
  	    PILPolicy memory pilPolicy,
        address licensorIpId
	) {
        spg.mintLicensePIL(pilPolicy, licensorIpId, 1, ROYATY_CONTEXT, MINTING_FEE, MINTING_FEE_TOKNE);
    }
}
