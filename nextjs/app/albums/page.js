import client from '../../client';
import { urlFor } from '../utils';
import './style.css';

const Albums = async () => {
    const albums = await client.fetch('*[_type == "albums"]{title, name, slug, releaseType, year, paragraph, cover, spotify, bandcamp, soundcloud, nft}');

    const sortedAlbums = albums && [...albums].sort((a, b) => Number(a.year) < Number(b.year) ? 1 : -1);
    return (
        <div className="container">
            <h1 className="text albumTitle">Releases</h1>
            <div className="albumContainer">
            {sortedAlbums && sortedAlbums.map(a => {
                return <div className="album" key={a.slug}>
                    <h2 className="text albumTitle">{`${a.title} - ${a.year || ''} ${a.releaseType}`}</h2>
                    <div className="albumInfo">
                        <div className="imageDiv">
                            {urlFor && <img src={urlFor(a.cover.asset._ref)}/>}
                            {
                            a.bandcamp?
                                <form action={a.bandcamp}>
                                    <input className="callToAction text" type="submit" value="Buy on Bandcamp"/>
                                </form>: <div></div>
                            }
                            {
                                a.spotify?
                                <form action={a.spotify}>
                                    <input className="callToAction text" type="submit" value="Listen on Spotify"/>
                                </form>: <div></div>
                            }
                            {
                                a.soundcloud?
                                <form action={a.soundcloud}>
                                    <input className="callToAction text" type="submit" value="Listen on Soundcloud"/>
                                </form>: <div></div>

                            }
                            {
                                a.nft?
                                <form action={a.nft}>
                                    <input className="callToAction text" type="submit" value="Get the NFT"/>
                                </form>: <div></div>

                            }
                        </div>
                        <div className="textDiv">
                            {
                                a.paragraph.map((p, idx) => {
                                const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "paragraph text bold": "paragraph text";
                                return <p key={`${a.slug}-paragraph-${idx}`} className={className}>{p.children[0]['text']}</p>;
                            })
                            }
                        </div>
                    {/* <iframe src="https://stream.resonate.coop/embed/track/256" frameborder="0" width="400px" height="600" style={{margin:0, border:'none', width:'400px', height:'600px', border: '1px solid #000'}}></iframe> */}

                    </div>
                </div>;
            })}
            </div>
        </div>
    );
};

export default Albums;
