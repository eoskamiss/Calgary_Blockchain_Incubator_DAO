// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract OilToken is ERC20Votes {
    uint256 public s_maxSupply = 1000 * 10**18;

    constructor() ERC20("OilToken", "OIL") ERC20Permit("GovernanceToken") {
        _mint(msg.sender, s_maxSupply);
    }

    //The functions below are overrides required by Solidity to determine how many tokens
    //are held at each checkpoint

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20Votes) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20Votes)
    {
        super._burn(account, amount);
    }
}
