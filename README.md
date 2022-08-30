# GenerativeNFTDApp
generative-nft-libraryを利用してNFT生成＆発行DApp用のリポジトリになります。

### Generative Art NFT とは？？

さまざまな特徴を画像として作成した後、コードよってそれらを組み合わせ生成する NFT のこと

## Generative NFTの参考例

Scrappy Squirrelsは、Generative NFT Artの代表例
※ 下のgifはそのサンプル

![Scrrappy](./GenerativeNFT/squirrels.gif)

## サンプル画像の生成コマンド
 `cd GenerativeNFT`  
 `python nft.py`  

 何体分の画像データを生成するか確認されるので適当な数字を入力する。

## IPFSにアップロードしたメタデータのURI
　http://127.0.0.1:5001/ipfs/bafybeihcyruaeza7uyjd6ugicbcrqumejf6uf353e5etdkhotqffwtguva/#/files/json  

## テストネットにデプロイした例
 下記はRinkebyにデプロイした際のターミナルの出力例

 ```cmd
NFTCollectible.address: 0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7
10 NFTs have been reserved
Owner has tokens:  [
  BigNumber { value: "0" },
  BigNumber { value: "1" },
  BigNumber { value: "2" },
  BigNumber { value: "3" },
  BigNumber { value: "4" },
  BigNumber { value: "5" },
  BigNumber { value: "6" },
  BigNumber { value: "7" },
  BigNumber { value: "8" },
  BigNumber { value: "9" },
  BigNumber { value: "10" },
  BigNumber { value: "11" },
  BigNumber { value: "12" }
]
 ```

 下記は、Mumbaiネットワークへのデプロイ記録
 ```cmd
 NFTCollectible.address: 0xfe03B6a6B4B095248F06Ed9528e913995ED58f97
 Owner has tokens:  [] 
 ```

 下記は、Shibuya Network(Astar networkのテストネット)へのデプロイ記録
 ```cmd
 NFTCollectible.address: 0xAa363921A48Eac63F802C57658CdEde768B3DAe1
Owner has tokens:  []
 ```

### コントラクトの検証結果(Rinkeby)
 ```cmd
 contracts/NFTCollectible.sol:NFTCollectible at 0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7
for verification on the block explorer. Waiting for verification result...

Successfully verified contract NFTCollectible on Etherscan.
https://rinkeby.etherscan.io/address/0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7#code
 ```

 <a href="https://rinkeby.etherscan.io/address/0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7#code">https://rinkeby.etherscan.io/address/0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7#code</a>

### コントラクトの検証結果(Mumbai)
 ```cmd
 Successfully submitted source code for contract
contracts/NFTCollectible.sol:NFTCollectible at 0xfe03B6a6B4B095248F06Ed9528e913995ED58f97
for verification on the block explorer. Waiting for verification result...

Successfully verified contract NFTCollectible on Etherscan.
https://mumbai.polygonscan.com/address/0xfe03B6a6B4B095248F06Ed9528e913995ED58f97#code 
 ```

 <a href="https://mumbai.polygonscan.com/address/0xfe03B6a6B4B095248F06Ed9528e913995ED58f97#code">https://mumbai.polygonscan.com/address/0xfe03B6a6B4B095248F06Ed9528e913995ED58f97#code</a>

## コントラクトのアドレス

|ネットワーク|コントラクトアドレス|
|---|---|
|Munbai Network|0xfe03B6a6B4B095248F06Ed9528e913995ED58f97|
|Shibuya Network|0xAa363921A48Eac63F802C57658CdEde768B3DAe1|
|Shiden|0xAa363921A48Eac63F802C57658CdEde768B3DAe1|

### 参考文献
1. [わたしの Solidity 開発で最初にやっておくこと with hardhat](https://zenn.dev/linnefromice/articles/my-solidity-dev-environment-with-hardhat)
2. [Astar Docs](https://docs.astar.network/docs/wasm/stack/smart-contract-wasm)