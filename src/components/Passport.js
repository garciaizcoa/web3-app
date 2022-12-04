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
            src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc1155.html?contract=0x92e3cb435d506Ba33fcd49A7184a50E6D8D304f4&chainId=80001&tokenId=0&rpcUrl=https%3A%2F%2Fpolygon-mumbai.g.alchemy.com%2Fv2%2FOAWQOKleuXiNq30SwezrP20LaF5TR7e5&biconomyApiKey=UhTFeppCd.e7a56bcd-65b4-4bdf-a1d4-3b15cc4f929f&biconomyApiId=ab7eef4f-22da-4669-bb81-d746ddeb8073"
            style={{ width: "1px", minWidth: "100%", height: "100vh" }}
            ></IframeResizer>
            </div>
            <h1>Badge</h1>
            <p>Weather Scout Badge</p>
            <div className = 'passport__iframe'>
            <IframeResizer
            src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc1155.html?contract=0x92e3cb435d506Ba33fcd49A7184a50E6D8D304f4&chainId=80001&tokenId=0&rpcUrl=https%3A%2F%2Fpolygon-mumbai.g.alchemy.com%2Fv2%2FOAWQOKleuXiNq30SwezrP20LaF5TR7e5&biconomyApiKey=UhTFeppCd.e7a56bcd-65b4-4bdf-a1d4-3b15cc4f929f&biconomyApiId=ab7eef4f-22da-4669-bb81-d746ddeb8073"
            style={{ width: "1px", minWidth: "100%", height: "100vh" }}

            ></IframeResizer>
            </div>
        </div>
    )
}
export default Passport;