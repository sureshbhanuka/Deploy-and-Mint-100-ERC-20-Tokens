require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${PRIVATE_KEY}`], // Make sure only "0x" is prefixed here
    },
  },
};
