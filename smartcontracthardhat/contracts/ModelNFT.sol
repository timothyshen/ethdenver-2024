// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IModelNFT.sol";

contract ModelNFT is ERC721Enumerable, Ownable, IModelNFT {
    mapping(uint256 => ModelInfo) private _modelInfos;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mintWithModelInfo(address to, uint256 tokenId, ModelInfo memory modelInfo) public override onlyOwner {
        _mint(to, tokenId);
        _setModelInfo(tokenId, modelInfo);
    }

    function _setModelInfo(uint256 tokenId, ModelInfo memory modelInfo) internal {
        require(_exists(tokenId), "ERC721Metadata: ModelInfo set of nonexistent token");
        _modelInfos[tokenId] = modelInfo;
    }

    function getModelInfo(uint256 tokenId) public view returns (ModelInfo memory) {
        require(_exists(tokenId), "ERC721Metadata: Query for nonexistent token");
        return _modelInfos[tokenId];
    }
}
