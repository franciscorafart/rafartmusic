
import React from 'react';

const Contact = (props) => {
        
        // TODO: Replace with CMS content
        const links = [
            {url: 'https://open.spotify.com/album/0VtCqZSkEXMNVWCkvhTlNB?', label: 'Andes Haze'},
            {url: '/', label: 'Rafart Website'},
            {url: 'https://www.youtube.com/franciscorafart', label: 'Youtube'},
            {url: 'https://open.spotify.com/artist/3EIxblOsWLuH54ZRWDuw1m?si=bg0n-AiKSFOhQ_cJmMszUw&nd=1', label: 'Spotify'},
            {url: 'https://www.facebook.com/fjrafart/', label: 'Facebook'},
            {url: 'https://www.ampled.com/artist/rafart', label: 'Support me on Ampled'},
        ];

        return (
            <div className="fastLinkContainer">
                <img className='logo' src={props.urlFor(props.logo.mainImage.asset._ref)}/>
                {links.map(link => (
                    <a href={link.url} target="_blank" className='linkContainer' key={link.url}>
                        <span className="text">{link.label}</span>
                    </a>
                ))}
            <style jsx>
            {`
                .fastLinkContainer{
                    padding-top: 40px;
                    min-height: 500px;
                    background: black;
                    display: flex;
                    flex-direction: column; 
                    align-items: center;
                }
                .linkContainer {
                    display: block;
                    margin-bottom: 30px;
                    padding: 10px;
                    border: 1px solid white;
                    width: 30%;

                    display: flex;
                    justify-content: center;
                }
                .text{
                    font-family: 'Encode Sans Expanded', sans-serif;
                    font-size: 1em;
                    color: white;
                    align-text: center;
                }
                .logo{
                    max-width: 200px;
                    max-height: 60px;
                    margin-bottom: 50px;
                }
                @media all and (max-width: 750px) {
                    .linkContainer {
                        width: 70%;
                    }
                }
            `}</style>
            </div>
        );
}

export default Contact;
