// SPDX-License-Identifier: GPL-3.0

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

pragma solidity ^0.8.3;

contract ERC1155Rubic is ERC1155, AccessControl {
    using ECDSA for bytes32;

    bytes32 public MINTER_ROLE = keccak256("MINTER_ROLE");

    bytes32 public constant _TYPEHASH =
        keccak256("mint(address account,uint256 id,uint256 nonce)");

    mapping(address => mapping(uint256 => bool)) private _nonces;

    constructor(string memory baseUri, address signer) ERC1155(baseUri) {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, signer);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControl, ERC1155)
        returns (bool)
    {
        return
        ERC1155.supportsInterface(interfaceId) ||
        AccessControl.supportsInterface(interfaceId);
    }

    function setURI(string memory newuri) external onlyRole(MINTER_ROLE) {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 nonce,
        bytes calldata signature
    ) external {
        address signer = _verifySigner(account, id, nonce, signature);
        _mint(account, id, 1, "");
        _nonces[signer][nonce] = true;
    }

    function mint(
        address account,
        uint256 id
    ) external onlyRole(MINTER_ROLE) {
        _mint(account, id, 1, "");
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    )
        internal
        override(ERC1155)
    {
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            require(balanceOf(to, id) == 0, 'ERC1155Rubic: User can own only 1 token of each token type');
        }
    }

    function _verifySigner (
        address account,
        uint256 id,
        uint256 nonce,
        bytes calldata signature
    ) private view returns(address) {
        address signer = keccak256(abi.encodePacked(_TYPEHASH, account, id, nonce))
            .toEthSignedMessageHash()
            .recover(signature);
        require(
            hasRole(MINTER_ROLE, signer),
            "ERC1155Rubic: transaction should be signed by mintable_role address"
         );
        require(
            _nonces[signer][nonce] == false,
            "ERC1155Rubic: the signature has already been used"
        );
        return signer;
    }
}
