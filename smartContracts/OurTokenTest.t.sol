// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {DeployOurToken} from "../script/DeployOurToken.s.sol";
import {OurToken} from "../src/OurToken.sol";

contract TokenTest is Test {
    OurToken public ourToken;
    DeployOurToken public deployer;
    
    address bob = makeAddr("bob");
    address alice = makeAddr("alice");
    address InsuranceA = makeAddr("InsuranceA");

    function setUp() public {
        deployer = new DeployOurToken();
        ourToken = deployer.run();

        ourToken.grantRole(keccak256("MINTER_ROLE"), bob);
        vm.prank(bob); 
        ourToken.safeMint(bob, true,'0',"",'0',"01/12/2020"); // Minting a token to bob
        vm.prank(bob); 
        ourToken.safeMint(bob, true,'0',"",'0',"02/12/2020"); // Minting a token to bob
    }
    /*
    function testSenderBalance() public {
        //console.log(msg.sender); // 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38
        //console.log(address(this)); // 0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496
        assertEq(msg.sender, ourToken.ownerOf(0));
    }*/
    function testBobBalance() public {
        assertEq(bob, ourToken.ownerOf(1));
    }
    function testTransferBtoA() public {
        vm.prank(bob); //Permet de fix le owner à cette address donc (bob)
        ourToken.safeTransferFrom(bob, alice, 1); 
        console.log(ourToken.balanceOf(bob));
        assertEq(alice, ourToken.ownerOf(1));
    }
    /*
    function testburn() public { //Il faut importer lib openzeppelin
        console.log(ourToken.balanceOf(bob));
        vm.prank(bob);
        //ourToken.burn(1);
        console.log(ourToken.balanceOf(bob));
        assertEq(ourToken.balanceOf(bob),0);
    }*/
    function testViewTokenURI() public {
        //vm.prank(InsuranceA);
        ourToken.safeMint(InsuranceA,true, '', "", '',"10/12/2020");
        ourToken.safeMint(InsuranceA,false, '10', "Road", '2',"11/12/2020");
        console.log(ourToken.tokenURI(2));
        console.log(ourToken.tokenURI(3));
    }
    function testGrantRole() public {
        ourToken.grantRole(keccak256("MINTER_ROLE"), InsuranceA);
        vm.prank(InsuranceA); 
        ourToken.safeMint(InsuranceA, true,'0',"",'0',"02/12/2020");
        assertEq(ourToken.balanceOf(InsuranceA), 1);
    }
    function testGrantRole2() public {
        ourToken.hasRole(keccak256("MINTER_ROLE"), 0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496); // false (l'admin a pas les autres roles, il peut que grant revoke)
        ourToken.hasRole(keccak256("MINTER_ROLE"), bob);
        ourToken.hasRole(keccak256("MINTER_ROLE"), InsuranceA); // false
        ourToken.grantRole(keccak256("MINTER_ROLE"), 0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496);
        ourToken.hasRole(keccak256("MINTER_ROLE"), 0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496); //true
        ourToken.safeMint(InsuranceA, false,'10',"",'0',"03/12/2020");
    }

    function testEnumerable() public {
        console.log(ourToken.tokenOfOwnerByIndex(bob,1));
        ourToken.grantRole(keccak256("MINTER_ROLE"), alice);
        vm.prank(alice); 
        ourToken.safeMint(alice, true,'0',"",'0',"01/12/2020"); //id: 2
        vm.prank(bob); 
        ourToken.safeMint(bob, true,'0',"",'0',"01/12/2300"); //id:3 index:2
        console.log(ourToken.tokenOfOwnerByIndex(bob,2));
        console.log("balance bob:",ourToken.balanceOf(bob));
        console.log(ourToken.tokenOfOwnerByIndex(alice,0));
        console.log("balance alice:",ourToken.balanceOf(alice));
    }
}


