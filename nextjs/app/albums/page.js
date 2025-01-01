import client from '../../client';
import './style.css';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import albumData from './albumData';

const Albums = async () => {
    const albums = albumData();
    // const albums = await client.fetch('*[_type == "albums"]{title, name, slug, releaseType, year, paragraph, cover, spotify, bandcamp, soundcloud, nft}');

    return (
        <div className="container">
            <h1 className="text albumTitle">Releases</h1>
            <div className="albumContainer">
            { Object.entries(albums).map(([slug, albumData]) => {
                return <div className="album" key={slug}>
                    <h2 className="text albumTitle">{`${albumData.title} - ${albumData.year || ''} ${albumData.type}`}</h2>
                    <div className="albumInfo">
                        <AudioPlayer data={albumData.tracks} /> 
                        
                                
                        <div className="textDiv">
                            {
                                albumData.description?.map((p, idx) => {
                                // const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "paragraph text bold": "paragraph text";
                                return <p key={`${slug}-paragraph-${idx}`} className="paragraph text">{p}</p>;
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
