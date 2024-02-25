// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface ILicenseNFT {
    function mintLicense(address to, uint256 originalNftId) external;
}