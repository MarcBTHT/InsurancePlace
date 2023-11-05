// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import "lib/openzeppelin-contracts/contracts/utils/Base64.sol";
import "lib/openzeppelin-contracts/contracts/access/AccessControl.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract OurToken is ERC721, ERC721Enumerable, ERC721URIStorage, AccessControl { //0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496  Appeler par 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId;
    string public constant s_bonus = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjQwMCIgIGhlaWdodD0iNDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9Ijc4IiBmaWxsPSJyZ2IoMjMxLDIzMiwyMDkpIiAvPgo8L3N2Zz4gCg==";
    string public constant s_malus = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjQwMCIgIGhlaWdodD0iNDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9Ijc4IiBmaWxsPSJyZ2IoMTg0LDgwLDY2KSIgLz4KPC9zdmc+IA==";
    string public imageURI;
    string public gravity;
    string public accidentType;
    string public responsibility;
    string public date;

    constructor(address defaultAdmin) ERC721("MyToken", "MTK") {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }
    
    function safeMint(
        address to, bool isBonus, string memory _gravity, string memory _accidentType, string memory _responsibility, string memory _date) 
        public onlyRole(MINTER_ROLE) {
        
        uint256 tokenId = _nextTokenId++;
        gravity = _gravity;
        accidentType = _accidentType;
        responsibility = _responsibility;
        date = _date;
        if (isBonus) {
            imageURI = s_bonus;
        } else {
            imageURI = s_malus;
        }
        string memory uri = string(
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name":"',
                            name(), //A la place on pourra mettre le nom de l'assurance (l'address puis on le recup dans le front le nom car on aura une liste d'address avec le nom liée)
                            '", "gravity":"',
                            gravity,
                            '", "type":"',
                            accidentType,
                            '", "responsibility":"',
                            responsibility,
                            '", "date":"',
                            date,
                            '", "image":"',
                            imageURI,
                            '"}'
                        )
                    )
                )    
        );
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
    
    //auth c'est celui qui execute le fonction (si == owner du token alors ok)
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Enumerable) returns (address) {
        require(auth == address(0) || to == address(0), "This a Soulbound token. It cannot be transferred. It can only be burned by the token owner.");
        return super._update(to,tokenId,auth); 
    }

    /*DATA ON-CHAIN*/
    function _baseURI() internal pure override returns (string memory) {
        return "data:application/json;base64,";
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    //Enumerate
    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage, ERC721Enumerable, AccessControl) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    
}