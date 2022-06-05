const main = async () => {
    const NFTCollectibleFactory = await hre.ethers.getContractFactory("NFTCollectible");
    const NFTContract = await NFTCollectibleFactory.deploy("http://127.0.0.1:5001/ipfs/bafybeihcyruaeza7uyjd6ugicbcrqumejf6uf353e5etdkhotqffwtguva/#/files/json/0");

    const nftc = await NFTContract.deployed();

    console.log("NFTCollectible.address:", nftc.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();