// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@storyprotocol/contracts/registries/IPAssetRegistry.sol";
import "@storyprotocol/contracts/lib/IP.sol";
import "./IModelNFT.sol";

contract IPARegistrar {
    IModelNFT public immutable NFT;
    address public immutable IP_RESOLVER;
    IPAssetRegistry public immutable IPA_REGISTRY;

    constructor(
        address ipAssetRegistry,
        address resolver,
        IModelNFT nft
    ) {
        IPA_REGISTRY = IPAssetRegistry(ipAssetRegistry);
        IP_RESOLVER = resolver;
        NFT = nft;
    }

    function register(string memory ipName, string memory createdAt, string memory numParams, string memory modelName) external returns (address) {
        uint256 tokenId = NFT.totalSupply() + 1; // Assuming token IDs are sequential starting from 1
        IModelNFT.ModelInfo memory modelInfo = IModelNFT.ModelInfo({
            creator: msg.sender,
            createdAt: createdAt,
            numParams: numParams,
            modelName: modelName
        });

        NFT.mintWithModelInfo(msg.sender, tokenId, modelInfo);

        bytes memory metadata = abi.encode(
            IP.MetadataV1({
                name: ipName,
                hash: "",
                registrationDate: uint64(block.timestamp),
                registrant: msg.sender,
                uri: ""
            })
        );

        return IPA_REGISTRY.register(block.chainId, address(NFT), tokenId, IP_RESOLVER, true, metadata);
    }
}
