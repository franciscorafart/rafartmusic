import client from '../../client';
import './style.css';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import albumData from './albumData';

const Albums = async () => {
    const albums = await client.fetch('*[_type == "albums"]{title, name, slug, releaseType, year, paragraph, cover, spotify, bandcamp, soundcloud, nft}');

    const sortedAlbums = albums && [...albums].sort((a, b) => Number(a.year) < Number(b.year) ? 1 : -1);
    const albumDataInstane = albumData();
    return (
        <div className="container">
            <h1 className="text albumTitle">Releases</h1>
            <div className="albumContainer">
            {sortedAlbums && sortedAlbums.map(a => {
                const data = albumDataInstane[a.slug]
                return <div className="album" key={a.slug}>
                    <h2 className="text albumTitle">{`${a.title} - ${a.year || ''} ${a.releaseType}`}</h2>
                    <div className="albumInfo">
                        <AudioPlayer data={data} /> 
                        
                                
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
