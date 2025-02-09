import './style.css';

const Links = () => {
        const links = [
            {url: 'https://rafartmusic.com/albums/godless', label: 'Godless Priest EP'},
            {url: 'https://rafartmusic.com/albums', label: 'Albums and Releases'},
            {url: '/', label: 'Rafart Website'},
            {url: 'https://www.youtube.com/franciscorafart', label: 'Youtube'},
            {url: 'https://app.rafartmusic.com/alienation-dance', label: 'Alienation Dance Web Song'},
        ];

        return (
            <div className="instagramContainer">
                {links.map(link => (
                    <a href={link.url} target="_blank" className='anchorContainer' key={link.url}>
                        <span className="text">{link.label}</span>
                    </a>
                ))}
            </div>
        );
};

export default Links;
