'use client';
import albumsData from '../albumData';
import { usePathname } from 'next/navigation';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import './style.css';

const Album = () => {
    const path = usePathname();
    const albums = albumsData();
    const slug = path.split("/").at(-1);
    const albumData = albums[slug];

    return (
        <div className="container">
            <div className="album" key={slug}>
            <h1 className="text">{albumData.title}</h1>
                <h2 className="text">{`${albumData.year || ''} - ${albumData.type}`}</h2>
                <div className="albumInfo">
                    <AudioPlayer data={albumData} /> 
                    <div className="textDiv">
                        {
                            albumData.description?.map((p, idx) => {
                            return <p key={`${slug}-paragraph-${idx}`} className="paragraph text">{p}</p>;
                        })
                        }
                    </div>
                </div>
            </div>;
        </div>
    );
};

export default Album;
