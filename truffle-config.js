const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = 'violin tiny suggest gift crazy ahead file school enact open select aspect';
const infuraProjectId = '96f5567540a943b68cc4cbb60f5b56a8';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none) 
      port: 7545,        // Standard Ethereum port (default: none) 
      network_id: "*",   // Any network (default: none)
    },
    sepolia: {
      provider: () => new HDWalletProvider(`violin tiny suggest gift crazy ahead file school enact open select aspect`, `https://sepolia.infura.io/v3/96f5567540a943b68cc4cbb60f5b56a8`),
      network_id: 11155111,   // Sepolia's network id
      gas: 8000000,        // Gas limit
      gasPrice: 1000000000 // Gas price used for deploys
    }
  },
  compilers: {
    solc: {
      version: "0.8.20",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};