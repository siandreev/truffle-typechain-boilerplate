require('dotenv').config();
const {
    MINTER_ROLE,
    BASE_URI
} = process.env;

const FactoryErc1155 = artifacts.require("ERC1155Rubic");

module.exports = async function (deployer) {
    await deployer.deploy(
        FactoryErc1155,
        BASE_URI,
        MINTER_ROLE
    );
    let erc1155Rubic = await FactoryErc1155.deployed();
    console.log("ERC1155Rubic address:", erc1155Rubic.address);
};
