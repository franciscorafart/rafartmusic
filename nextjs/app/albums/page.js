import Link from 'next/link'
import albumsData from './albumData';
import './style.css';

const Albums = async () => {
    const albums = albumsData();

    return (
        <div className="container">
            <h1 className="text albumTitle">Releases</h1>
            <div className="albumContainer">
            { Object.entries(albums).map(([slug, albumData]) => {
                return <div className="album" key={slug}>
                    <h2 className="text albumTitle">{`${albumData.title} - ${albumData.year || ''} ${albumData.type}`}</h2>
    
                        
                        <Link href={`albums/${slug}`}>Listen</Link>
                
                </div>;
            })}
            </div>
        </div>
    );
};

export default Albums;
