require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const API_URL = "https://ropsten.infura.io/v3/8b89c09c56a54c1fb6ac7160ebe56f4a";
const PRIVATE_KEY = "8b78a7121272840e051a7eb1352e9f9b758c00c0ed4d28328fe6ca83d32a41d8";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: API_URL.env,
      accounts: [`0x${PRIVATE_KEY}.env`],
    },
  },
};
