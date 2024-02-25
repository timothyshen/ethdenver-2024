// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title FLock Denver Token (FLODT)
 * @dev Implementation of the basic standard ERC20 token.
 * This implementation includes all the required and some optional functionality of the ERC20 standard.
 * Moreover, it includes basic ownership with a minter role that allows for token minting (creation).
 */
contract FLockDenverToken is ERC20 {
    /**
     * @dev Sets the values for {name} and {symbol}.
     * All two of these values are immutable: they can only be set once during construction.
     */
    constructor() ERC20("FLock Denver Token", "FLODT") {
        // Initial mint can be done here if required
        // _mint(msg.sender, initialSupply);
    }

    /**
     * @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - only callable by the contract owner or specific roles if access control is setup.
     */
    function mint(address account, uint256 amount) public {
        // Access control checks or ownership verification can be added here
        _mint(account, amount);
    }

    // Additional functionalities like burn can be added here
    /**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
}
