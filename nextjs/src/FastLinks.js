
import React from 'react';

const Contact = props => {
        // TODO: Replace with CMS content
        const links = [
            {url: 'https://share.amuse.io/track/rafart-zappateada-ii', label: 'Zappateada II (Pre-release save)'},
            {url: 'https://open.spotify.com/album/6rQlALTD5i5udd3BXTsHMe?si=N_4JhQJdQ56AL11RJJ1IYQ', label: 'Roll The Dice (Song)'},
            // {url: 'https://discord.gg/RWF8P7yHaJ', label: 'Join my Discord'},
            {url: 'https://app.rafartmusic.com/alienation-dance', label: 'Alienation Dance Web Song'},
            {url: '/', label: 'Rafart Website'},
            {url: 'https://www.youtube.com/franciscorafart', label: 'Youtube'},
            {url: 'https://open.spotify.com/artist/3EIxblOsWLuH54ZRWDuw1m?si=bg0n-AiKSFOhQ_cJmMszUw&nd=1', label: 'Spotify'},
        ];

        return (
            <div className="instagramContainer">
                <img className='logo' src={props.urlFor(props.logo.mainImage.asset._ref)}/>
                {links.map(link => (
                    <a href={link.url} target="_blank" className='anchorContainer' key={link.url}>
                        <span className="text">{link.label}</span>
                    </a>
                ))}
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
                .anchorContainer {
                    display: block;
                    margin-bottom: 30px;
                    padding: 10px;
                    border: 1px solid white;
                    width: 30%;
                    text-decoration: none;
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
                    .anchorContainer {
                        width: 70%;
                    }
                }
            `}</style>
            </div>
        );
};

export default Contact;
