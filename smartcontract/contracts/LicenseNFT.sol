// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LicenseNFT is ERC721, Ownable {
    // Event to emit when a new license is minted
    event LicenseMinted(uint256 indexed tokenId, address indexed to, uint256 indexed originalNftId);

    // Counter for tokenId generation
    uint256 private _tokenIdCounter;

    // Mapping to store the original NFT ID associated with each license NFT
    mapping(uint256 => uint256) private _originalNftIds;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {}

    // Function to mint a new license NFT
    // `to` is the address receiving the license NFT
    // `originalNftId` is the ID of the original NFT for which the license is being granted
    function mintLicense(address to, uint256 originalNftId) public onlyOwner {
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        _originalNftIds[tokenId] = originalNftId;
        emit LicenseMinted(tokenId, to, originalNftId);
    }

    // Function to get the original NFT ID associated with a license NFT
    function getOriginalNftId(uint256 tokenId) public view returns (uint256) {
//        require(_exists(tokenId), "LicenseNFT: query for nonexistent token");
        return _originalNftIds[tokenId];
    }
}
