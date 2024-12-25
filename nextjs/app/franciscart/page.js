import React from 'react';
import client from '../../client';
import { urlFor } from '../utils';
import './style.css';

const Franciscart = async () => {
    const about = await client.fetch('*[_type == "content" && slug.current == "about-franciscart"][0]{name, slug, image, paragraph}');
    
    return(
        <div className="container">
            <h1 className="text title">Franciscart - Contemporary classical music</h1>
            <div className="aboutContainer">
                <div className="imageDiv">
                    {urlFor && <img src={urlFor(about.image.asset._ref)}/>}
                </div>
                <div className="textDiv">
                    {about && about.paragraph.map(p => {

                        const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "text bold": "text"
                        return <p className={className}>{p.children[0]['text']}</p>;
                    })}
                    <span className='text'>Check out the scores <a className='text' href="https://www.risingtidemusicpress.com/composer-roster/francisco-rafart">here</a></span>
                    <br /><span className='text'>Follow Franciscart on Spotify <a className='text' href="https://open.spotify.com/artist/6R3qYhViTiAF0QWoabzbLy?si=D6F9eg7bTdKR9hz8BjS0Kw">here</a></span>
                </div>
            </div>
        </div>
    );
}

export default Franciscart;
