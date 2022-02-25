const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'resemble erupt boring glory venture utility upper style buffalo weasel segment glad',
  'https://rinkeby.infura.io/v3/07f5e8e4c6ab421c94bec476a46584e1'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('interface', compiledFactory.interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
