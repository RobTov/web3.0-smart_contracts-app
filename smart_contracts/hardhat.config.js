require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/rDDU4DQvNhy0zXAGovpHF7decP2SxB94',
      accounts: ['464d75c42f1e9bd35ebf83d6dab017d8bbb51ada32e9df976e58feb106cb712c']
    }
  }
}