import './style.css';

const Links = () => {
        const links = [
            {url: 'https://rafartmusic.com/album', label: 'Albums and Releases'},
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
