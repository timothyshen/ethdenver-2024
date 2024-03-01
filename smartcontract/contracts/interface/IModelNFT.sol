// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IModelNFT {
    // Define the ModelInfo struct to ensure interface compatibility

  
    function mintWithModelInfo(address to) external returns (uint256);

    function getTotalSupply() external view returns (uint256);

    function getTokenByIndex(uint256 index) external view returns (uint256);
}
