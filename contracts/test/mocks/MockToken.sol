// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(string memory name, string memory symbol, uint256 maxTokenSupply) ERC20(name, symbol) {
        _mint(msg.sender, maxTokenSupply);
    }
}
