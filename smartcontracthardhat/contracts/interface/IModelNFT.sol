// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IModelNFT {
    struct ModelInfo {
        address creator;
        string createdAt;
        string numParams;
        string modelName;
    }

    function mintWithModelInfo(address to, uint256 tokenId, ModelInfo memory modelInfo) external;
}
