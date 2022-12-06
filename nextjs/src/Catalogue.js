
import React from 'react';

const makeRows = (rows) => rows.map(
    r => <tr className='tr'>
        <td></td>
        <td>{r.title}</td>
        <td>{r.year}</td>
        <td>{r.type}</td>
        <td><a href={r.link} target="_blank">link</a></td>
    </tr>
);

const Catalogue = props => {
        const albums = [
            { title: "The Handbook of the Acid Rider", year: 2013, type: "Recording", link: "https://open.spotify.com/album/5h4UvZvpk3FxxjVXLrfj6T?si=DDOI87GJQ9Gk9US6G5LK9g"}
        ];

        const eps = [
            { title: "Dasein", year: 2019, type: "Recording", link: "https://open.spotify.com/album/2e7gnYHaf0YMJ8xd9pK4N5?si=Xr7QtBLqRGKQ6HWminE3SQ"},
            { title: "Get in the grid", year: 2015, type: "Recording", link: "https://soundcloud.com/f-j-rafart/sets/get-in-the-grid-ep-2015"},
            { title: "The Dark Night of the Soul", year: 2014, type: "Recording", link: "https://open.spotify.com/album/4NmmX3KvSsi13dUBS11Lz7?si=HKQYgVHjSRafk01Txpp8qw"},
        ];

        const singles = [
            { title: "Thanatos", year: 2012, type: "Recording", link: "https://open.spotify.com/track/7dNB3n5q67Yr4bkt6HZPXv?si=6504257582204c86"},
            { title: "Zappateada II", year: 2022, type: "Recording", link: "https://open.spotify.com/track/1Pd1N8DPRJ6D9xMpvV191B?si=60d64756c8b243b9"},
            { title: "Andes Haze", year: 2021, type: "Recording", link: "https://open.spotify.com/album/0VtCqZSkEXMNVWCkvhTlNB?si=tCifaeB1R66E-W1ajekxLg"},
            { title: "Roll The Dice", year: 2022, type: "Recording", link: "https://open.spotify.com/album/6rQlALTD5i5udd3BXTsHMe?si=mAsv0u1vRnuR-jfEJgyneQ"},
            { title: "Void", year: 2022, type: "Recording", link: "https://open.spotify.com/track/5f01lFvmGSfNa9zQnx7CQI?si=a395171e094040af"},
            { title: "Magic Concepts", year: 2016, type: "Recording", link: "https://open.spotify.com/track/0rJDvosJZuKHC7II10LwT4?si=8a3559de0bf141e9"},
            { title: "Caminito del Turia", year: 2018, type: "Recording", link: "https://open.spotify.com/track/79iwCjIs6Il2f1MI2iTiFf?si=261ff06d470044b6"},
            { title: "Organized Sound", year: 2018, type: "Recording", link: "https://open.spotify.com/track/6XOUG9VbJ6fxlWLUhcyUsD?si=662ca83d8eb44c46"},
        ];

        const unreleased = [
            { title: "Infected Mushroom - Demons Of Pain", year: 2017, type: "Remix", link: "https://soundcloud.com/f-j-rafart/infected-mushroom-demons-of-pain-remix-by-rafart"},
            { title: "Sunken Living area - Heathered Pearls", year: 2015, type: "Remix", link: "https://soundcloud.com/f-j-rafart/sunken-living-area-by-heathered-pearls-remix-by-rafart"},
            { title: "Staring Into The Distance - TheSource & Rafart", year: 2014, type: "Recording", link: "https://soundcloud.com/f-j-rafart/thesource-rafart-staring-into"},
            { title: "Solea - Flamenco", year: null, type: "Recording", link: "https://soundcloud.com/f-j-rafart/solea-flamenco-on-the-chapman-stick"},
        ];

        const ensemble = [
            { title: "Synapsis III - for saxophone quartet (2009)", year: 2022, type: "Recording", link: "https://open.spotify.com/track/1GDq44rl1KaqFHTP7lAMaF?si=e8f73d22cf61487b"},
            { title: "Inefable - for Jazz Ensemble", year: 2012, type: "Recording", link: "https://youtu.be/ail_Ao3xJns"},
            { title: "Zappateada I", year: 2011, type: "Live Performance", link: "https://youtu.be/M39U-1Wh58I"},
            { title: "Quinteto - for Piano and string quartet", year: 2010, type: "Live Performance", link: "https://youtu.be/WAIkc1ZgNKw"},
            { title: "Continuum - solo guitar", year: 2009, type: "Performance", link: "https://youtu.be/5b5Ijk2G-dg"},
            { title: "Sinapsis II - for chamber orchestra", year: 2007, type: "Performance Video", link: "https://youtu.be/NTujjr6vqWI"},
        ];
        
        const scores = [
            { title: "Ecce Hommo - for ensemble", year: 2011, type: "Score", link: "https://www.risingtidemusicpress.com/catalog/p/ecce-homo"},
            { title: "Zappateada II - for Jazz ensemble", year: 2010, type: "Score", link: "https://www.risingtidemusicpress.com/catalog/p/zappateada-ii"},
            { title: "Sinapsis IV - for Ensemble", year: 2010, type: "Score", link: "https://www.risingtidemusicpress.com/catalog/p/sinapsis-iv"},
            { title: "Inefable - for Jazz ensemble", year: 2010, type: "Score", link: "https://www.risingtidemusicpress.com/catalog/p/inefable"},
            { title: "Continuum - for solo Guitar", year: 2009, type: "Score", link: "https://www.risingtidemusicpress.com/catalog/p/continuum"},
            { title: "Quinteto - for Piano and string quartet", year: 2009, type: "Score", link: "https://www.risingtidemusicpress.com/catalog/p/rafart-quinteto"},
        ];

        const apps = [
            { title: "The Alienation Dance", year: 2016, type: "App", link: "https://app.rafartmusic.com/the-alienation-dance"},
            { title: "Kurku MIDI controller", year: 2016, type: "Recording", link: "https://app.kurku.tech"},
        ];

        const rafartVideos = [
            { title: "Get in the Grid - Sala Russafa", year: 2015, type: "Live Performance", link: "https://youtu.be/47O19L_4jUM"},
            { title: "Thanatos", year: 2021, type: "Live Performance", link: "https://www.youtube.com/watch?v=jV81mNJ9Oro"},
            { title: "The Alienation Dance - Live Looping", year: 2021, type: "Live Performance", link: "https://youtu.be/nj0_B1NjJx4"},
            { title: "The Great Refusal - Dorchester Arts Project", year: 2020, type: "Live Performance", link: "https://youtu.be/zkDYKirV4LU"},
            { title: "Eros - Live looping", year: 2020, type: "Live Perfomance", link: "https://youtu.be/kIdGkHos1pk"},
            { title: "Buleria - Flamenco", year: 2020, type: "Live Performance", link: "https://youtu.be/YlIayXUN0eI"},
            { title: "Jarmasti", year: 2019, type: "Palythrough", link: "https://youtu.be/xj5Ts2a7Ohk"},
            { title: "Roll the Dice", year: 2016, type: "Live Performance", link: "https://youtu.be/4vSrFJOo668"},
            { title: "Solea - Flamenco", year: 2016, type: "Recording", link: "https://youtu.be/JRXdL8ifLPk"},
            { title: "Roll the Dice", year: 2016, type: "Playthrough", link: "https://youtu.be/oGYiFY5h5Lg"},
            { title: "La Cumparsita", year: 2016, type: "Playthrough", link: "https://youtu.be/EXXO9UG8DIE"},
            { title: "Get In the Grid", year: 2016, type: "Live Performance", link: "https://youtu.be/4D_x0C-ToMo"},
            { title: "Red Bull skiing", year: 2016, type: "Musicalization", link: "https://youtu.be/GtrdPYexc4c"},
            { title: "Isochronic - Innovation en Vivo - feat. DJ kTunes ", year: 2014, type: "Live Performance", link: "https://youtu.be/X5WT5mylZdU"},
            { title: "Caminito del Turia- feat. Schipper, Pazmiño", year: 2015, type: "Music video", link: "https://youtu.be/jkCHQZ_NOz0"},
            { title: "Drum n Space - Innovation en Vivo", year: 2015, type: "Live Performance", link: "https://youtu.be/bqmPloVb1Cg"},
            { title: "Union", year: 2015, type: "Music video", link: "https://youtu.be/Z0g3MxO-qdY"},
            { title: "Changing currents - TEDx theme - Saalfeld &  Rafart", year: 2015, type: "Theme music", link: "https://youtu.be/neqASvgL-uM"},
            { title: "Vortex", year: 2014, type: "Music video", link: "https://youtu.be/CXT9ZdO2xgc"},
            { title: "Axis Mundi", year: 2014, type: "Music video", link: "https://youtu.be/nbq7Oh-KWAY"},
            { title: "Drum n Space (Santiago)", year: 2013, type: "Live Performance", link: "https://youtu.be/z-ZIWyjcMB4"},
            { title: "Pepperoni Atmosphere", year: 2016, type: "Playthrough", link: "https://youtu.be/1dBxc1CIkeA"},
            { title: "Chironex Fleckeri", year: 2013, type: "Music video", link: "https://youtu.be/AdLdGm8GGbY"},
            { title: "Escombrock", year: 2016, type: "Playthrough", link: "https://youtu.be/lEtlWaTTpoQ"},
        ];

        const philosophyVideos = [
            { title: "Content Algorithms", year: 2021, type: "Talk", link: "https://youtu.be/FIwixk20WJ0"},
            { title: "Music and reality perception", year: 2021, type: "Talk", link: "https://youtu.be/woT2NFW1STc"},
            { title: "Are you too old for music?", year: 2021, type: "Talk", link: "https://youtu.be/9VIp6o1nzR8"},
            { title: "Are you an artist or an entertainer?", year: 2021, type: "Talk", link: "https://youtu.be/FEe-SowgTHg"},
            { title: "Why are so many coders musicians?", year: 2021, type: "Talk", link: "https://youtu.be/gxdjRbtHzfQ"},
        ];

        const coverVideos = [
            { title: "Hurt (Reznor / Cash)", year: 2021, type: "Cover video", link: "https://youtu.be/kXI_0Ca2l3E"},
            { title: "Two Become One - Spice Girls", year: 2021, type: "Cover video", link: "https://youtu.be/18VMobBvvWg"},
            { title: "Tu Nombre Sobre Mi Nombre - Spinetta", year: 2021, type: "Cover video", link: "https://youtu.be/TMHYHvFAf9o"},
            { title: "No woman no cry - Bob Marley", year: 2021, type: "Cover video", link: "https://youtu.be/PIBcfwZ7dIY"},
            { title: "Love of My Life - Queen", year: 2020, type: "Cover video", link: "https://youtu.be/wLceW2HT_Io"},
            { title: "La Balada del Diablo y la Muerte - La Renga", year: 2016, type: "Cover video", link: "https://youtu.be/OhL3CjzD04M"},
            { title: "Balderrama - Folklore", year: 2020, type: "Cover video", link: "https://youtu.be/8OBF2s-iWL0"},
            { title: "Forever - Stratovarius", year: 2019, type: "Cover video", link: "https://youtu.be/ZdWFRYdj2Mk"},
            { title: "Billie Jean - Michael Jackson", year: 2018, type: "Cover video", link: "https://youtu.be/H5fSekuhMVY"},
            { title: "Tears of the Dragon - Bruce Dickinson", year: 2016, type: "Cover video", link: "https://youtu.be/ql0hSte0FbA"},
            { title: "Demons of Pain - Infected Mushroom", year: 2016, type: "Cover video", link: "https://youtu.be/6e8NT0Lg0VU"},
            { title: "Papel de Plata - Andean Folk", year: 2018, type: "Cover video", link: "https://youtu.be/LEhKcpY5lHk"},
            { title: "Himno de Chile", year: 2016, type: "Cover", link: "https://youtu.be/r74s6CuT2q8"},
        ];

        const tutorials = [
            { title: "Kurku Demo - Hooking up to Ableton Live", year: 2022, type: "Demo", link: "https://youtu.be/ilXhMrsUQ7w"},
            { title: "Alienation Dance  - Interactive web song", year: 2021, type: "Demo", link: "https://youtu.be/W56Tg-YsIiM"},
            { title: "How to make the Chapman Stick sound awesome", year: 2018, type: "Tutorial", link: "https://youtu.be/9sAeBdz34QU"},
            { title: "How to remove noise from old tape recording", year: 2017, type: "Tutorial", link: "https://youtu.be/7AfqiVkhXPs"},
            { title: "El Nene Custom Midi Controller", year: 2016, type: "Demo", link: "https://youtu.be/-n-B0IKmSvQ"},
            { title: "How I Produced Caminito del Turia", year: 2015, type: "Tutorial", link: "https://youtu.be/OvOH4zvrp9Y"},
            { title: "The Stick Sustainer", year: 2015, type: "Demo", link: "https://youtu.be/9vGIzDSwyNQ"},
        ];

        return (
            <div className="catalogueContainer text">
                <img className='logo' src={props.urlFor(props.logo.mainImage.asset._ref)}/>
                <table>
                    <tr className='firstTr'>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Type</th>
                        <th>Link</th>
                    </tr>
                    <tbody>

                    <tr>
                        <td className='headerText'>Albums</td>
                    </tr>
                    {makeRows(albums)}
                    <tr>
                        <td className='headerText'>EPs</td>
                    </tr>
                    {makeRows(eps)}
                    <tr>
                        <td className='headerText'>Singles</td>
                    </tr>
                    {makeRows(singles)}
                    <tr>
                        <td className='headerText'>Unreleased</td>
                    </tr>
                    {makeRows(unreleased)}
                    <tr>
                        <td className='headerText'>Rafart Videos</td>
                    </tr>
                    {makeRows(rafartVideos)}
                    <tr>
                        <td className='headerText'>Covers</td>
                    </tr>
                    {makeRows(coverVideos)}
                    <tr>
                        <td className='headerText'>Ensemble music (Franciscart)</td>
                    </tr>
                    {makeRows(ensemble)}
                    <tr>
                        <td className='headerText'>Scores</td>
                    </tr>
                    {makeRows(scores)}
                    <tr>
                        <td className='headerText'>Apps</td>
                    </tr>
                    {makeRows(apps)}
                    <tr>
                        <td className='headerText'>Music Philosophy videos</td>
                    </tr>
                    {makeRows(philosophyVideos)}
                    <tr>
                        <td className='headerText'>Tutorials and Demos</td>
                    </tr>
                    {makeRows(tutorials)}
                </tbody>
                </table>
            <style jsx>
            {`
                .catalogueContainer{
                    padding: 80px 0;
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
                .headerText {
                    color: yellow;
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

export default Catalogue;
