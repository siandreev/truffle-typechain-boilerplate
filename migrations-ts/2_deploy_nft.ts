import Deployer = Truffle.Deployer;

require('dotenv').config();
const {
    MINTER_ROLE,
    BASE_URI
} = process.env;
const ERC1155Rubic = artifacts.require("ERC1155Rubic");

module.exports = async function(deployer: Deployer) {
    await deployer.deploy(
        ERC1155Rubic,
        BASE_URI as string,
        MINTER_ROLE as string
    );
    let erc1155Rubic = await ERC1155Rubic.deployed();
    console.log("ERC1155Rubic address:", erc1155Rubic.address);
} as Truffle.Migration;

export {}
