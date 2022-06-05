import './App.css';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Contract from "./contracts/contracts/NFTCollectible.sol/NFTCollectible.json";
import Footer from './Components/Footer';
import { ethers } from "ethers";

// コントラクトのアドレスとABIを設定
const CONTRACT_ADDRESS = "0xfe03B6a6B4B095248F06Ed9528e913995ED58f97";
const ABI = Contract.abi;
const MAX_SUPPLY = 30;

/**
 * StyledPaperコンポーネント
 */
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 600,
  height: 300,
  backgroundColor: '#fde9e8',
}));


/**
 * Appコンポーネント
 */
function App() {
  // ステート変数
  const [supply, setSupply] = useState(0);
  const [currentAccount, setCurrentAccount] = useState(null);

  /**
   * ウォレットの接続状態を確認するメソッド
   */
  const checkWalletIsConnected = async() => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    // アカウント情報を要求する
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  /**
   * ウォレットを接続するためのイベントハンドラー
   */
  const connectWalletHandler = async() => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
    }

    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Found an account! Address: ", accounts[0]);
      // アカウント情報をステート変数にセットする。
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * NFTを実際にMintするためのメソッド
   */
  const mintNftHandler = async() => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        // コントラクトにアクセスするための準備
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(
          CONTRACT_ADDRESS, 
          ABI, 
          signer
        );
  
        console.log("Initialize payment");
        // NFTを一つMintする。
        let nftTxn = await nftContract.mintNFTs(1, {
          value: ethers.utils.parseEther("0.01"),
        });
  
        console.log("Mining... please wait");
        await nftTxn.wait();
  
        console.log(`Mined, see transaction: ${nftTxn.hash}`);
        alert("Mint Success!!")
      } else {
        console.log("Ethereum object does not exist");
        alert("Mint failed...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Connect Walletボタンコンポーネント
   */
  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  /**
   * NFTMintボタンコンポーネント
   */
  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className="cta-button mint-nft-button">
        Mint NFT
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className="main-app">
      <h1>Let's Mint Generative NFT !!</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, mt: 10}}>
          <StyledPaper sx={{my: 1, mx: "auto", p: 0, paddingTop: 10, borderRadius: 4}}>  
            <Box sx={{ flexGrow: 1, overflow: "hidden", mt: 10, my: 5}}>
              <strong>発行状況：{supply} / {MAX_SUPPLY}</strong>
            </Box>
            { currentAccount ? mintNftButton() : connectWalletButton()}
          </StyledPaper>
          <Footer/>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
