pragma solidity ^0.8.23;

import "@storyprotocol/contracts/contracts/registries/IPAssetRegistry.sol";
import "@storyprotocol/contracts/contracts/resolvers/IPResolver.sol";
import "@storyprotocol/contracts/contracts/lib/IP.sol";
import "./interface/IModelNFT.sol";

contract ExampleIPARemixRegistration {
   
  uint256 public constant MIN_ROYALTY = 10;
  
  IPResolver public resolver;
  IPAssetRegistry public immutable REGISTRY;
  
  constructor(address registry, address resolverAddr) {
    REGISTRY = IPAssetRegistry(registry);
    resolver = IPResolver(resolverAddr);
  }
  
  function remix(
  	    uint256[] licenseIds,
  	    address tokenContract, 
        uint256 tokenId
	) {
      bytes memory metadata = abi.encode(
        IP.MetadataV1({
          name: "name for your IP asset",
          hash:  bytes32("your IP asset content hash"),
          registrationDate: uint64(block.timestamp),
          registrant: msg.sender,
          uri: "https://yourip.xyz/metadata-regarding-its-ip",
        })
      );

      uint256 ipId = REGISTRY.register(
        licenses,
        ROYALTY_CONTEXT,
        block.chainid,
        tokenContract,
        tokenId,
        address(resolver),
        true,
        metadata
      );

  }
}
