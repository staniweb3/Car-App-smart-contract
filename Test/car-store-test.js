const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarApp", function () {
    let CarApp, carApp;

    before(async function () {
        /**
         * A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
         * so CarApp here is a factory for instances of our carApp contract
         */

        CarApp = await ethers.getContractFactory("CarApp");

        /**
         * Calling deploy() on a ContractFactory will start the deployment,
         * and return a promise that resolves to a Contract.
         * This is the object that has a method for each of your smart contract functions. 
         */ 

        carApp = await CarApp.deploy();
        await carApp.deployed();
    });

    it("should create a new car", async function () {
        await carApp.createCar("Bmw", "3 Series", "20", "true");
        let cars = await carApp.getAllCars();
        expect(cars[0].carName).to.equal("Bmw");
        expect(cars[0].carModel).to.equal("3 Series");
        expect(cars[0].carPrice).to.equal("20");
        expect(cars[0].available).to.equal(true);
    });

    it("should update car price", async function () {
        await carApp.updateCarPrice(0,4);
        let cars = await carApp.getAllCars();
        expect(cars[0].carPrice).to.equal(4);
    });

    it("should update car availability", async function() {
        await carApp.updateCarAvailability(0, false);
        let cars = await carApp.getAllCars();
        expect(cars[0].available).to.equal(false);
    });

    it("should return all cars", async function () {
        await carApp.createCar("Vauxhall", "Astra", "10", "true");
        await carApp.createCar("Aston Martin", "DBX", "75", "false");
        await carApp.createCar("Bentley", "Bentayga", "55", "true");
        await carApp.createCar("KIA", "EV6", "30", "true");
        await carApp.createCar("Land Rover", "Defender 110","70", "false");
        let cars = await carApp.getAllCars();
        expect(cars.length).to.equal(6);
    });
});