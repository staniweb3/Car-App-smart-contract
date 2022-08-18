# Car-App smart contract

I created a CarApp smart contract where I can test and deploy on the ropsten test network, the contract contains my cars and gives us information about listed cars like the car name, model, price and availability.

To test the contract I ran npx hardhat test in my terminal which all test came to passing, deploying the contract I created a deploy file in the scripts folder, hardhat always runs the compile task when running scripts with its command line interface, npx hardhat node helps start a local blockchain where I deployed the contract. After I opened another terminal to run the script file using npx hardhat run and the contract deployed successfully.

I used Infura which provides the tools and infrastructure that allow developers to easily take their blockchain application from testing to scaled deployment and added the API key to my hardhat config file which after I ran npx hardhat run ./scripts/deployCarApp.js --network ropsten after running that the contract deployed on the ropsten network.
