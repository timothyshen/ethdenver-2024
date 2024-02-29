// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@storyprotocol/periphery/contracts/StoryProtocolGateway.sol";

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
	) public{
    SPG.createPolicyPIL(pilPolicy, true, ROYALTY_POLICY, MINTING_FEE, MINTING_FEE_TOKEN);

  }
 
  
  function addPolicyToIPA(
  	PILPolicy memory pilPolicy,
    address ipId
  ) public{
      SPG.addPILPolicyToIp(pilPolicy, true, ROYALTY_POLICY, MINTING_FEE, MINTING_FEE_TOKEN, ipId);
    }
}