// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IModelNFT.sol";

contract ModelNFT is ERC721Enumerable{
    mapping(uint256 => ModelInfo) private _modelInfos;

    struct ModelInfo {
        address creator;
        string createdAt;
        string numParams;
        string modelName;
    }

    // Define the TokenModelInfo struct for returning token and model information
    struct TokenModelInfo {
        uint256 tokenId;
        ModelInfo modelInfo;
    }

    // Event to emit when a new model NFT is minted
    event ModelNFTMint(uint256 indexed tokenId, address indexed to);

    // Counter for tokenId generation
    uint256 private _tokenIdCounter;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    }

    function mintWithModelInfo(address to, ModelInfo memory modelInfo) public returns (uint256){
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        _setModelInfo(tokenId, modelInfo);
        emit ModelNFTMint(tokenId, to);
        return tokenId;
    }

    function _setModelInfo(uint256 tokenId, ModelInfo memory modelInfo) internal {

        _modelInfos[tokenId] = modelInfo;
    }

    function getModelInfo(uint256 tokenId) public view returns (ModelInfo memory) {
        return _modelInfos[tokenId];
    }

    // Updated function to return all models with their info
    function getAllModelInfo() public view returns (TokenModelInfo[] memory) {
        uint256 totalSupply = totalSupply();
        TokenModelInfo[] memory modelsInfo = new TokenModelInfo[](totalSupply);
        for (uint256 i = 0; i < totalSupply; i++) {
            uint256 tokenId = tokenByIndex(i); // Use tokenByIndex to get the token ID at index i
            ModelInfo memory modelInfo = getModelInfo(tokenId);
            modelsInfo[i] = TokenModelInfo(tokenId, modelInfo);
        }
        return modelsInfo;
    }
}
