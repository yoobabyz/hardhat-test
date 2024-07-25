require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "0xc1628555477007bb37f6f718e9b9bb5fa02052da478b11a9b434bc7818fb6dda";
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.24",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xc1628555477007bb37f6f718e9b9bb5fa02052da478b11a9b434bc7818fb6dda"],
    },
  },
};