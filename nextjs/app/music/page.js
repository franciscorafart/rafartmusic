import Link from 'next/link';
import albumsData from './albumData';
import './style.css';

const Albums = async () => {
    const albums = albumsData();

    return (
        <div className="container">
            <h1 className="text title">Releases</h1>
            <div className="album-container">
            { Object.entries(albums).map(([slug, albumData]) => {
                return <div className="album" key={slug}>
                    <h2 className="text">{`${albumData.title}`}</h2>
                    <h3 className='text'>{`${albumData.year || ''} - ${albumData.type}`}</h3>
                    <img className='album-img' src={albumData.cover}/>
                    <div>
                        <Link className="callToAction text" href={`music/${slug}`}>Listen</Link> 
                    </div>
                </div>;
            })}
            </div>
        </div>
    );
};

export default Albums;
