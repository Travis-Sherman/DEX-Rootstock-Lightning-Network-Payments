require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.0",
  networks: {
    rsk: {
      url: `https://public-node.rsk.co`, // Rootstock mainnet
      accounts: [`0x${YOUR_PRIVATE_KEY}`]
    },
    rskTestnet: {
      url: `https://public-node.testnet.rsk.co`, // Rootstock testnet
      accounts: [`0x${YOUR_PRIVATE_KEY}`]
    }
  }
};
