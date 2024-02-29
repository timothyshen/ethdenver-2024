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
        IModelNFT.ModelInfo memory modelInfo = IModelNFT.ModelInfo({
            creator: msg.sender,
            createdAt: createdAt,
            numParams: numParams,
            modelName: modelName
        });

        uint256 tokenId = NFT.mintWithModelInfo(msg.sender, modelInfo);

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
}