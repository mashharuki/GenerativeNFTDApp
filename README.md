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

### コントラクトの検証結果
 ```cmd
 contracts/NFTCollectible.sol:NFTCollectible at 0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7
for verification on the block explorer. Waiting for verification result...

Successfully verified contract NFTCollectible on Etherscan.
https://rinkeby.etherscan.io/address/0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7#code
 ```

 <a href="https://rinkeby.etherscan.io/address/0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7#code">https://rinkeby.etherscan.io/address/0x587E68B8b22d803Ac0aAF568e87c6fE12DA103E7#code</a>