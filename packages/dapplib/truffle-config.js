require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain modify hockey prison obscure gesture'; 
let testAccounts = [
"0x7bf952d2e0d883fcd4eb2480dcdebd3e0b1142a7f25afff8dbefbab221de17c0",
"0xd93032d6f545c170a0dfa9f8cb59ff398d37d2663d5b9e9bff162ff34a35b31d",
"0xce3e0f61818c4a6341ef6d917e824bda6455e40a0b4ad9da3947fd497de32ccf",
"0xc8a80c99d133aa6a2d620cf198afb378ea05228ad5e841f4596e24dedc59257d",
"0x0c4f676618b3104a7f19429855896d4c70a5543d8c45e3ebedd64b7daf2fd883",
"0xddc138504fb48e5eaf3e7ff6803f8f92c894e39dfed7e7b5f27363d1aed66f71",
"0x9be72aea4df114e04b5c2229fecc5141849e6b3a62c62624e698f8b81884bcc9",
"0xf781823b0b1a0fadc8a67ecade0a42b454305b6cc7c215e647cc65a7eb1b77fb",
"0xd5014d4f68e143abb89d6097e519b07a24ed0c9ec54ec7a8fde7bca3a63461c2",
"0x4c285fcffd444dab3d1aa65fe88fe28fd5f0bead68ffc7c61167ad3c79d2aefe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

