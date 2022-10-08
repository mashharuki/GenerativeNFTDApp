const fs = require('fs');
const solgraph = require('solgraph');

const dot = solgraph.solgraph(fs.readFileSync('./../contracts/NFTCollectible.sol'))
console.log(dot);