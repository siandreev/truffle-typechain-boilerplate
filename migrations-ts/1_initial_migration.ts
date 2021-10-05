import Deployer = Truffle.Deployer;

const Migrations = artifacts.require("Migrations");

module.exports = function(deployer: Deployer) {
    deployer.deploy(Migrations);
} as Truffle.Migration;

export {};
