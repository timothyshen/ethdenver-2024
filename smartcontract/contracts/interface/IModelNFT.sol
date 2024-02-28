// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IModelNFT {
    // Define the ModelInfo struct to ensure interface compatibility
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

    /**
     * @dev Mints a new NFT with associated model information.
     * @param to The address of the recipient who will own the newly minted NFT.
     * @param modelInfo The model information to associate with the minted NFT.
     */
    function mintWithModelInfo(address to, ModelInfo memory modelInfo) external returns (uint256);

    /**
     * @dev Retrieves model information for a given token ID.
     * @param tokenId The ID of the token for which to fetch model information.
     * @return ModelInfo memory Returns the model information associated with the specified token ID.
     */
    function getModelInfo(uint256 tokenId) external view returns (ModelInfo memory);

    /**
     * @dev Retrieves information for all models.
     * @return TokenModelInfo[] memory Returns an array of structs containing token IDs and their associated model information.
     */
    function getAllModelInfo() external view returns (TokenModelInfo[] memory);
}
