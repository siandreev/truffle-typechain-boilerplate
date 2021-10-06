import Deployer = Truffle.Deployer;

require('dotenv').config();
const { TOKEN_NAME, TOKEN_SYMBOL } = process.env;
const ERC20Token = artifacts.require('ERC20Token');

module.exports = async function (deployer: Deployer) {
    await deployer.deploy(ERC20Token, TOKEN_NAME as string, TOKEN_SYMBOL as string);
    const erc20Token = await ERC20Token.deployed();
    console.info('ERC1155Rubic address:', erc20Token.address);
} as Truffle.Migration;

export {};
