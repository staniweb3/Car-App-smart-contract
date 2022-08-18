/**
 * We require the Hardhat Runtiime Environment explixitly here.
 * This is optional but useful for running
 * the script in a standalone fashion through `node <script>`.
 * When running the scripts with `npx hardhat run <script>`
 * you'll find the Hardhat Runtime Environment's
 * members available in the global scope.
 */

const hre = require("hardhat");

async function main() {
    /**
     * Hardhat always runs the compile task when running scripts
     * with its command line interface.
     * If this script is run directly using `node`
     * you may want to call compile 
     * manually to make sure everything is cpmpiled
     * await hre.run('compile');
     */

    // We get the contract to deploy
    const CarApp = await hre.ethers.getContractFactory("CarApp");
    const carApp = await CarApp.deploy();

    await carApp.deployed();

    console.log("CarApp deployed to: ", carApp.address);
}
 /**
  * I recommend this pattern to be able to use 
  * async/await everywhere and properly handle errors.
  */
 main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
 });