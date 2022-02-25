const path = require('path');
const solc  = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

// Delete all files inside build folder
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
const contracts = solc.compile(source, 1).contracts;

// Check if directory exists
fs.ensureDirSync(buildPath);

for (let contract in contracts) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    contracts[contract]
  )
}