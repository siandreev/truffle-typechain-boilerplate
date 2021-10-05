require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const BN = require("bn.js");
const Web3 = require("web3");

const {
    ETHERSCAN_API_KEY,
    PRIVATE_KEY,
    ALICE_PRIVATE_KEY,
    BOB_PRIVATE_KEY,
    DEPLOY_GAS_LIMIT,
    DEPLOY_GAS_PRICE,
    INFURA_ID_PROJECT,
    QUICKNODE_RPC,
    MNEMONIC
} = process.env;

const privateKeys = [PRIVATE_KEY, ALICE_PRIVATE_KEY, BOB_PRIVATE_KEY];

const web3 = new Web3();

module.exports = {
    plugins: [
        'truffle-plugin-verify',
        'truffle-contract-size'
    ],

    api_keys: {
        etherscan: ETHERSCAN_API_KEY
    },

    networks: {
        dev: {
            provider: () => new HDWalletProvider(MNEMONIC, 'http://localhost:7777'),
            network_id: 5777,
            gas: DEPLOY_GAS_LIMIT,
            gasPrice: DEPLOY_GAS_PRICE,
            confirmations: 0,
            skipDryRun: true
        },
        eth_mainnet: {
            provider: () => new HDWalletProvider({
                privateKeys: [PRIVATE_KEY],
                providerOrUrl: 'https://mainnet.infura.io/v3/' + INFURA_ID_PROJECT
            }),
            network_id: 1,
            gasPrice: web3.utils.toWei(new BN(DEPLOY_GAS_PRICE), 'gwei'),
            gas: DEPLOY_GAS_LIMIT,
            skipDryRun: false
        },
        kovan: {
            provider: () => new HDWalletProvider({
                privateKeys: privateKeys,
                providerOrUrl: QUICKNODE_RPC
            }),
            network_id: 42,
            confirmations: 0,
            gas: DEPLOY_GAS_LIMIT,
            skipDryRun: true
        },
        matic_testnet: {
            provider: () => new HDWalletProvider({
                privateKeys: privateKeys,
                providerOrUrl: 'https://polygon-mumbai.infura.io/v3/' + INFURA_ID_PROJECT
            }),
            network_id: 80001,
            confirmations: 0,
            gas: DEPLOY_GAS_LIMIT,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        matic_mainnet: {
            provider: () => new HDWalletProvider({
                privateKeys: privateKeys,
                providerOrUrl: 'https://rpc-mainnet.matic.network'
            }),
            network_id: 137,
            confirmations: 2,
            gas: DEPLOY_GAS_LIMIT,
            timeoutBlocks: 200,
            skipDryRun: true
        },
    },

    compilers: {
        solc: {
            version: "0.8.3",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 999999
                },
            }
        }
    },
};
