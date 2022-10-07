require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('solidity-coverage')
require('dotenv').config();

const {
  API_URL_KEY, 
  API_RINKEBY_KEY, 
  PRIVATE_KEY, 
  ETHERSCAN_APIKEY, 
  POLYGONSCAN_APIKEY,
  POLYGON_URL,
  ASTAR_URL 
} = process.env;

const GWEI = 1000 * 1000;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  /*
  etherscan: {
    apiKey: ETHERSCAN_APIKEY
  },
  */
  paths: {                         
    artifacts: './../client/src/contracts',  
  },
  etherscan: {
    apiKey: POLYGONSCAN_APIKEY
  },
  networks: {
    goerli: {
      url: API_URL_KEY,
      accounts: [PRIVATE_KEY],
    },
    rinkeby: {
      url: API_RINKEBY_KEY,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [PRIVATE_KEY]
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY]
    },
    shibuya: {
      url:"https://shibuya.public.blastapi.io",
      chainId:81,
      accounts:[PRIVATE_KEY],
    },
    shiden: {
      url:"https://shiden.api.onfinality.io/public",
      chainId:336,
      accounts:[PRIVATE_KEY],
    },
    astar: {
      url: "https://evm.astar.network",
      chainId: 592,
      accounts:[PRIVATE_KEY],
    }
  },
};
