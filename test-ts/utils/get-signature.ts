export function getSignature(
    web3: Web3,
    signerAddress: string,
    parameters: {
        typeHash: string;
        account: string;
        id: number;
        nonce: number;
    }): Promise<string> {
    const dataToSign = web3.utils.soliditySha3(parameters.typeHash, parameters.account, parameters.id, parameters.nonce) as string;
    return web3.eth.sign(dataToSign, signerAddress);
}
