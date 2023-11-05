// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {InsuranceContract} from "src/autoContract.sol";

contract CounterScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        //vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        //vm.startBroadcast(vm.envUint("anvil"));
        InsuranceContract insuranceContract = new InsuranceContract(
            25,
            5,
            10,
            20000,
            true,
            10
        );
        // Perform actions with the insurance contract
        vm.stopBroadcast();
    }
}