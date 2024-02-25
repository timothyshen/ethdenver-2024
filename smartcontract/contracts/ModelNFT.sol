// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import {symbol} from "filename";


contract ModelNFT is IERC721{

    struct ModelInfo {
        address creator;
        string createdAt;
        string numPrarams;
        string modelName;
    }

    mapping (address => ModelInfo) public modelInfo;

    function mint() public {
        _mint(msg.sender, totalSupply() + 1);
        modelInfo[msg.sender] = ModelInfo(msg.sender, "2021-10-10", "10", "model1");
    }
}