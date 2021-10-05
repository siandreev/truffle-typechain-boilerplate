import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();
const web3 = new Web3();

async function main() {
    web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);

    const METHOD_SIGNATURE = "mint(address account,uint256 id,uint256 nonce)";
    const account = '0xecA0A3eFCf009519052Dc92306fE821b9c7A32A2';
    const id = 1;
    const nonce = 2;

    const _TYPEHASH = web3.utils.soliditySha3(web3.utils.toHex(METHOD_SIGNATURE));
    const dataToSign = web3.utils.soliditySha3(_TYPEHASH, account, id, nonce);

    const signature = await web3.eth.sign(dataToSign, web3.eth.accounts.wallet[0].address);
    console.log(signature);
}

main();
