import { getSignature } from  "./utils/get-signature";

const ERC1155Rubic = artifacts.require("ERC1155Rubic");

contract('ERC1155Rubic', accounts => {
    const minter = accounts[0];
    const alice = accounts[1];
    const bob = accounts[2];

    it('Should mint token', async () => {
        const erc1155Rubic = await ERC1155Rubic.deployed();

        const typeHash = await erc1155Rubic._TYPEHASH();
        const account = alice;
        const id = 1;
        const nonce = 1;
        const signature = await getSignature(web3, minter, { typeHash, account, id, nonce });

        await erc1155Rubic.methods["mint(address,uint256,uint256,bytes)"](account, id, nonce, signature, { from: alice });
        const balance = await erc1155Rubic.balanceOf(alice, id);
        assert.isTrue(
            balance.eqn(1),
            "Token wasn't minted correctly"
        )
    });
});
