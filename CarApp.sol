// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CarApp {
    //Cars info
    struct Car {
        string carName;
        string carModel;
        uint256 carPrice;
        bool available;
    }

    // Car list
    Car[] public cars;

    // Create a new car to add to cars list
    function createCar(
        string memory _name,
        string memory _model,
        uint256 _price,
        bool _available
    ) external {
        cars.push(Car(_name, _model, _price, _available));
    }

    //Update car price by cars list index
    function updateCarPrice(uint _index, uint256 _newPrice) external {
        cars[_index].carPrice = _newPrice;
    }

    // Update car avalibility by cars list index
    function updateCarAvailability(uint _index, bool _isAvailable) external {
        cars[_index].available = _isAvailable;
    }

    // Gell all car

    function getAllCars() external view returns (Car[] memory) {
        return cars;
    }
}
