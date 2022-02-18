
import React from 'react';

const Nfts = () => {
        return (
            <div className="instagramContainer">
                <div>
                    <nft-card
                        contractAddress="0x2953399124f0cbb46d2cbacd8a89cf0599974963"
                        tokenId="33295537617419401189972956961766626164882755454860255883972926859746310356993"
                        network="mainnet"
                        referrerAddress="0x499c9b4135b3211a40f6a4fefdf84f52ffb6e919"
                    />
                </div>
                {/* <div>
                    <nft-card 
                        contractAddress="0x2953399124f0cbb46d2cbacd8a89cf0599974963" 
                        tokenId="33295537617419401189972956961766626164882755454860255883972926861945333612545" 
                    />
                </div>
                <div>
                    <nft-card 
                        contractAddress="0x2953399124f0cbb46d2cbacd8a89cf0599974963" 
                        tokenId="33295537617419401189972956961766626164882755454860255883972926860845821984769"
                    />
                </div>
                <div>
                    <nft-card 
                        contractAddress="0x2953399124f0cbb46d2cbacd8a89cf0599974963" 
                        tokenId="33295537617419401189972956961766626164882755454860255883972926858646798729217" 
                    />
                </div> */}
            <style jsx>
            {`
                .instagramContainer{
                    padding-top: 40px;
                    min-height: 500px;
                    background: black;
                    display: flex;
                    flex-direction: column; 
                    align-items: center;
                }
            `}</style>
            </div>
        );
};

export default Nfts;
