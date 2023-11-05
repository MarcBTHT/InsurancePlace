// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {OurToken} from "../src/OurToken.sol";

contract DeployOurToken is Script {
    //address public myAddress = 0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496; // Ca c'est l'address du contract OurTokenTest car c'est lui le owner !! Pas msg.sender car lui a appeler OurTokenTest ...
    //address public myAddress = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    //address public myAddress = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    address public myAddress = 0x2C4B7f7244e93523E770Bef9820E79Fa88d32F3f; 
    function run() external returns (OurToken) {
        vm.startBroadcast();
        OurToken ourToken = new OurToken(myAddress);
        vm.stopBroadcast();
        return ourToken;
    }
}