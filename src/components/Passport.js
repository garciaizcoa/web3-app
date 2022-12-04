import React from "react";
import "./Passport.css";
import IframeResizer from "iframe-resizer-react";
function Passport() {
    return (
        <div className = 'passport__container'>
            <h1>Passport</h1>
            <p>Climate Resiliency Passport</p>
           <div className = 'passport__iframe'>
            <IframeResizer
            src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc1155.html?contract=0x750EBeAC61991dF994c6f2B470f5874B57f62383&chainId=137&tokenId=0&rpcUrl=https%3A%2F%2Fpolygon-mainnet.g.alchemy.com%2Fv2%2FvAln0F5ruuf8rysRWCOJkntIMIVsVvym&biconomyApiKey=_blmxR9zu.1faec90b-2a3e-4392-8fdf-386e2b417366&biconomyApiId=bc97dc6d-5bc9-42de-a090-c557c4acd2cc"
            style={{ width: "1px", minWidth: "100%", height: "100vh" }}
            ></IframeResizer>
            </div>
            <h1>Badge</h1>
            <p>Weather Scout Badge</p>
            <div className = 'passport__iframe'>
            <IframeResizer
            src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc1155.html?contract=0x750EBeAC61991dF994c6f2B470f5874B57f62383&chainId=137&tokenId=49&rpcUrl=https%3A%2F%2Fpolygon-mainnet.g.alchemy.com%2Fv2%2FvAln0F5ruuf8rysRWCOJkntIMIVsVvym&biconomyApiKey=_blmxR9zu.1faec90b-2a3e-4392-8fdf-386e2b417366&biconomyApiId=bc97dc6d-5bc9-42de-a090-c557c4acd2cc"
            style={{ width: "1px", minWidth: "100%", height: "100vh" }}

            ></IframeResizer>
            </div>
        </div>
    )
}
export default Passport;