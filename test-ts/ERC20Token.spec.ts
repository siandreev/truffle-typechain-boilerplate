const ERC20Token = artifacts.require('ERC20Token');

contract('ERC20Token', accounts => {
    it('Mint 100 tokens', async () => {
        const sumToMint = 100;
        const erc20Token = await ERC20Token.deployed();

        const balanceBeforeMint = await erc20Token.balanceOf(accounts[0]);
        await erc20Token.mint(accounts[0], sumToMint, { from: accounts[0] });
        const balanceAfterMint = await erc20Token.balanceOf(accounts[0]);

        assert.isTrue(
            balanceAfterMint.eq(balanceBeforeMint.addn(sumToMint)),
            `The wrong amount of tokens was minted: expected ${sumToMint} but got ${balanceAfterMint
                .sub(balanceBeforeMint)
                .toNumber()}`
        );
    });

    it('Should send coin correctly', async () => {
        const erc20Token = await ERC20Token.deployed();

        // Setup 2 accounts.
        const account1 = accounts[0];
        const account2 = accounts[1];

        // Get initial balances of first and second account.
        const account1BalanceBefore = (await erc20Token.balanceOf(account1)).toNumber();
        const account2BalanceBefore = (await erc20Token.balanceOf(account2)).toNumber();

        // Make transaction from first account to second.
        const amount = 10;
        await erc20Token.transfer(account2, amount, { from: account1 });

        // Get balances of first and second account after the transactions.
        const account1BalanceAfter = (await erc20Token.balanceOf(account1)).toNumber();
        const account2BalanceAfter = (await erc20Token.balanceOf(account2)).toNumber();

        assert.equal(
            account1BalanceAfter,
            account1BalanceBefore - amount,
            "Amount wasn't correctly taken from the sender"
        );
        assert.equal(
            account2BalanceAfter,
            account2BalanceBefore + amount,
            "Amount wasn't correctly sent to the receiver"
        );
    });
});
