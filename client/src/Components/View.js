import './../css/App.css';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NFT from './NFT';
import superAgent from 'superagent';

/**
 * View component
 * @param contract address
 */
function View(props) {
    // get info from props    
    const { address, networkId, baseURI } = props;
    // state variable
    const [nfts, setNfts] = useState([]);

    // hook
    useEffect(() => { 
        superAgent
            .get('https://deep-index.moralis.io/api/v2/nft/' + address)
            .query({
                chain: `${networkId}`, 
                format: 'decimal'
            })
            .set({ 
                Accept: 'application/json',
                'x-api-key': `${process.env.REACT_APP_MORALIS_API_KEY}`, 
            })
            .end((err, res) => {
                if (err) {
                        console.log("NFTのデータ取得中にエラー発生", err)
                        return err;
                }
                console.log("データ取得成功！：", res.body);
                setNfts(res.body.result);
            });
    }, []);

    const viewNFT = (nft) => {
        //get metadata
        var metadata = JSON.parse(nft.metadata);
        console.log("metadata:", metadata);
        // image URL
        var imageURL;

        if(metadata) {
            var result = metadata.image.substr(7);
            imageURL = "https://gateway.pinata.cloud/ipfs/" + result;
        }

        return (
            <div>
                { metadata ? (
                    <NFT
                        name={metadata.name}
                        description={metadata.description}
                        imageURL={imageURL}
                    />
                ) : <></> }
            </div>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 4, md: 12 }}
            >
                {nfts.map((nft, i) => (
                    viewNFT(nft)
                ))}
            </Grid>
        </Box>
    );
}

export default View;