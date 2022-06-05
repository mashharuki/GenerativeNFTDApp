async function main() {
    // baseURI
    const baseTokenURI = "ipfs://bafybeihcyruaeza7uyjd6ugicbcrqumejf6uf353e5etdkhotqffwtguva/";
    const [owner] = await hre.ethers.getSigners();
    // コントラクトをデプロイする。
    const contractFactory = await hre.ethers.getContractFactory("NFTCollectible");
    const contract = await contractFactory.deploy(baseTokenURI);
    await contract.deployed();

    // コントラクトアドレスをターミナルに出力
    console.log("NFTCollectible.address:", contract.address);

    // 無料配布用のNFTをMintする。
    let txn = await contract.reserveNFTs();
    await txn.wait();
    console.log("10 NFTs have been reserved");

    // 0.03 ETH を送信して3つ NFT を mint する
    txn = await contract.mintNFTs(3, { value: hre.ethers.utils.parseEther("0.03"),});
    await txn.wait();

    // コントラクト所有者の保有するtokenIdsを取得
    let tokens = await contract.tokensOfOwner(owner.address);
    console.log("Owner has tokens: ", tokens);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});