// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/interfaces/modules/licensing/ILicensingModule.sol";
import "@story-protocol/periphery/contracts/StoryProtocolGateway.sol";
import "@story-protocol/core/contracts/modules/licensing/PILPolicyFrameworkManager.sol";


// This is the policy creation contract for the IPA

contract ExampleIPAPolicyCreation {
   
  StoryProtocolGateway public SPG;
  address public ROYALTY_POLICY;
  uint256 public MINTING_FEE;
  address public MINTING_FEE_TOKEN;
  
  constructor(address royaltyPolicy, uint256 mintingFee, address mintingFeeToken, address spg) {
    ROYALTY_POLICY = royaltyPolicy;
    MINTING_FEE = mintingFee;
    MINTING_FEE_TOKEN = mintingFeeToken;
    SPG = StoryProtocolGateway(spg);
  }
  
  function registerPolicy(
  		PILPolicy memory pilPolicy
	) {
     spg.createPolicyPIL(pilPolicy, true, ROYALTY_POLICY, MINTING_FEE, MINTING_FEE_TOKEN);

  }
 
  
  function addPolicyToIPA(
  	PILPolicy memory pilPolicy,
    address ipId
  ) {
      return spg.addPILPolicyToIp(pilPolicy, true, ROYALTY_POLICY, MINTING_FEE, MINTING_FEE_TOKEN, ipId);
    }
}
