// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/lib/PILFlavors.sol";
import "@story-protocol/core/contracts/modules/licensing/PILPolicyFrameworkManager.sol";
import "@story-protocol/core/contracts/modules/licensing/LicensingModule.sol";
import "@story-protocol/core/contracts/IPAccountImpl.sol";

contract IPAPolicyCreation {
    PILPolicyFrameworkManager public PIL_POLICY_MANAGER;
    LicensingModule public LICENSING_MODULE;
    IPAccountImpl public IPA_IMP;

    address public ROYALTY_POLICY;
    uint256 public MINTING_FEE;
    address public MINTING_FEE_TOKEN;

    enum PolicyFlavor {
        Default,
        NonCommercialSocialRemixing,
        CommercialUse,
        CommercialRemix
    }

    constructor(
        address pilPolicyManager,
        address licensingModule,
        address ipaRegistry
    ) {
        PIL_POLICY_MANAGER = PILPolicyFrameworkManager(pilPolicyManager);
        LICENSING_MODULE = LicensingModule(licensingModule);
        IPA_IMP = IPAccountImpl(ipaRegistry);
    }

    function getFlavorEnum() public pure returns (PolicyFlavor) {
        return PolicyFlavor.Default;
    }

    function registerPolicy(PolicyFlavor flavor) public returns (uint256) {
        //

        RegisterPILPolicyParams
            memory policyConfiguration = getPolicyConfiguration(flavor);
        IIPAccount ipAccount = IIPAccount(payable(account));

        bytes memory encodedAbi = abi.encode("registerPolicy(uint256)", 1);
        uint256 policyID = IPA_IMP.Execute({
                    to: address(module),
                    value: 0,
                    data: abi.encodeWithSignature("registerPolicy(uint256)", 1),
                    nonce: ipAccount.state() + 1,
                    deadline: deadline
                });
        uint256 policyID = PIL_POLICY_MANAGER.registerPolicy(
            policyConfiguration
        );
        return policyID;
    }

    function addPolicyToIPA(
        uint256 policyID,
        // Token Bound A IPID
        address ipId
    ) public returns (uint256) {
        uint256 indexOpt = LICENSING_MODULE.addPolicyToIPA(ipId, policyID);
        return indexOpt;
    }

    // internal functions

    function getPolicyConfiguration(
        PolicyFlavor flavor
    ) internal returns (RegisterPILPolicyParams memory) {
        if (flavor == PolicyFlavor.Default) {
            return PILFlavors.defaultValuesPolicy();
        } else if (flavor == PolicyFlavor.NonCommercialSocialRemixing) {
            return PILFlavors.nonCommercialSocialRemixing();
        } else if (flavor == PolicyFlavor.CommercialUse) {
            // Assuming some default arguments are provided or handled differently
            return PILFlavors.commercialUse(0, address(0), address(0));
        } else if (flavor == PolicyFlavor.CommercialRemix) {
            // Assuming some default arguments are provided or handled differently
            return PILFlavors.commercialRemix(0, address(0));
        } else {
            revert("Invalid policy flavor");
        }
    }
}
