import './../css/App.css';
import React, { useEffect, useState } from "react";
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

        return (
            <div>
                { metadata ? <img src={metadata.image} /> : <></> }
            </div>
        );
    }

    return (
        <>
            {nfts.map((nft, i) => (
                viewNFT(nft)
            ))}
        </>
    );
}

export default View;