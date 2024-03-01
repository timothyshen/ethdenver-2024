// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/registries/IPAssetRegistry.sol";
import "@story-protocol/core/contracts/resolvers/IPResolver.sol";

import "@story-protocol/core/contracts/lib/IP.sol";
import "./interface/IModelNFT.sol";

contract IPARegistrar {
    IModelNFT public immutable NFT;
    address public immutable IP_RESOLVER;
    IPAssetRegistry public immutable IPA_REGISTRY;

    mapping(uint256 => ModelInfo) private _modelInfos;
    mapping(uint256 => TokenModelInfo) private _tokenModelInfos;

    struct ModelInfo {
        address creator;
        string createdAt;
        string numParams;
        string modelName;
    }

    struct TokenModelInfo {
        uint256 tokenId;
        ModelInfo modelInfo;
    }

    event ModelNFTMint(uint256 indexed tokenId, address indexed to);

    uint256 private _tokenIdCounter;

    constructor(
        address ipAssetRegistry,
        address resolver,
        address nft
    ) {
        IPA_REGISTRY = IPAssetRegistry(ipAssetRegistry);
        IP_RESOLVER = resolver;
        NFT = IModelNFT(nft);
    }

    function register(string memory ipName, string memory createdAt, string memory numParams, string memory modelName) external returns (address) {
     
        ModelInfo memory modelInfo = ModelInfo({
            creator: msg.sender,
            createdAt: createdAt,
            numParams: numParams,
            modelName: modelName
        });

        _modelInfos[_tokenIdCounter] = modelInfo;
        _tokenModelInfos[_tokenIdCounter] = TokenModelInfo(_tokenIdCounter, modelInfo);
        
        uint256 tokenId = NFT.mintWithModelInfo(msg.sender);

        bytes memory metadata = abi.encode(
            IP.MetadataV1({
                name: ipName,
                hash: "",
                registrationDate: uint64(block.timestamp),
                registrant: msg.sender,
                uri: ""
            })
        );

        return IPA_REGISTRY.register(1, address(NFT), tokenId, IP_RESOLVER, true, metadata);
    }

    function _setModelInfo(uint256 tokenId, ModelInfo memory modelInfo) internal {

        _modelInfos[tokenId] = modelInfo;
    }

    function getModelInfo(uint256 tokenId) public view returns (ModelInfo memory) {
        return _modelInfos[tokenId];
    }

    function getAllModelInfo() public view returns (TokenModelInfo[] memory) {
        uint256 totalSupply = NFT.getTotalSupply();
        TokenModelInfo[] memory modelsInfo = new TokenModelInfo[](totalSupply);
        for (uint256 i = 0; i < totalSupply; i++) {
            uint256 tokenId = NFT.getTokenByIndex(i);
            ModelInfo memory modelInfo = getModelInfo(tokenId);
            modelsInfo[i] = TokenModelInfo(tokenId, modelInfo);
        }
        return modelsInfo;
    }
}