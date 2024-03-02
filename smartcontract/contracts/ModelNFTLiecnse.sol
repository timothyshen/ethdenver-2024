// SPDX-license-identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/modules/licensing/LicensingModule.sol";

contract ModelNFTLiecnse {
    bytes ROYALTY_CONTEXT = "This is loyalty fee for the license.";
    LicensingModule SPG;

    constructor(address licensingModule) {
        SPG = LicensingModule(licensingModule);
    }

    function createLicense(
        uint256 pilPolicy,
        // Token Bound Account IPID
        address licensorIpId,
        uint256 amount,
        address receiver
    ) public returns (uint256) {
        uint256 working = SPG.mintLicense(
            pilPolicy,
            licensorIpId,
            amount,
            receiver,
            ROYALTY_CONTEXT
        );
        return working;
    }
}
