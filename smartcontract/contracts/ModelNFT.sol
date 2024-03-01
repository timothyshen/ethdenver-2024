// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IModelNFT.sol";

contract ModelNFT is ERC721Enumerable{

    // Event to emit when a new model NFT is minted
    event ModelNFTMint(uint256 indexed tokenId, address indexed to);

    // Counter for tokenId generation
    uint256 private _tokenIdCounter;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    }

    function mintWithModelInfo(address to) public returns (uint256){
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        emit ModelNFTMint(tokenId, to);
        return tokenId;
    }

    

    function getTotalSupply() public view returns (uint256) {
        return totalSupply();
    }

    function getTokenByIndex(uint256 index) public view returns (uint256) {
        return tokenByIndex(index);
    }

}
