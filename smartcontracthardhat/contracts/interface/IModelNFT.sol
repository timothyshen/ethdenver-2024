// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

interface IModelNFT is IERC721Enumerable{
    struct ModelInfo {
        address creator;
        string createdAt;
        string numParams;
        string modelName;
    }

    function mintWithModelInfo(address to, uint256 tokenId, ModelInfo memory modelInfo) external;
}
