const fs = require('fs');
const solograph = require('solgraph');

const dot = solgraph(fs.readFileSync('./../contracts/NFTCollectible.sol'))
console.log(dot)
