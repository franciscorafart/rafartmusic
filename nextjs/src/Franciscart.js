import React from 'react';

const Franciscart = props => {
    return(
        <div className="container">
            <h1 className="text title">Franciscart - Contemporary classical music</h1>
            <div className="aboutContainer">
                <div className="imageDiv">
                    {props && props.urlFor && <img src={props.urlFor(props.about.image.asset._ref)}/>}
                </div>
                <div className="textDiv">
                    {
                        <>
                        <p className='text'>Before the Rafart project came to life, I studied academic music composition at P. Universidad Catolica de Chile
                        between 2005 and 2009. While pursuing a classical composer path n those formative years, I wrote several scores for orchestras, ensembles,
                        quartets, and solo instrumentalists. These pieces were primarily written in an atonal language but with a strong sense of harmony.</p>
                            
                        <p className='text'>Due to a lack of access to performers that could play my music and the costs of recordings in those days, most of those pieces never got performed or recorded.
                        The ones that got recorded needed better audio quality. Most ended up many years kept in a drawer.</p>
                        
                        <p className='text'>Eventually, my classical composer path ended as I got frustrated with writing pieces and never seeing them performed, as well as the elitism and cultural deafness of academic music.</p>
                        <p className='text'>I have started the slow process of recreating those pieces digitally with the help of virtual orchestration and the lower cost of recording we have access to these days.
                        The purpose of this is personal - to document my early explorations and try to understand my evolution as a musician.</p>
                        
                        <p className='text'>I decided to publish them under the name <strong>Franciscart</strong>, my first and last name combined.</p>
                        <span className='text'>Check out the scores <a href="">here</a></span>
                        <br /><span className='text'>Follow Franciscart on Spotify <a href="">here</a></span></>
                    }
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    margin-top: 60px;
                    padding-bottom: 100px;
                }
                .aboutContainer {
                    display: flex;
                    flex-direction: row;
                    padding: 0 1% 0 1%;
                    justify-content: space-around;
                }
                .textDiv {
                    flex-basis: auto;
                    width: 60%;
                    margin-top: 10px;
                }
                .imageDiv {
                    width: 30%;
                    margin-top: 10px;
                }
                .imageDiv img {
                    width: 100%;
                }
                .text{
                    font-family: 'Encode Sans Expanded', sans-serif;
                    line-height: 1.5;
                    color: white;
                }
                .bold {
                    font-size: 1.3em;
                }
                .title {
                    text-align: center; 
                }
                @media all and (max-width: 750px) {
                    .aboutContainer {
                        flex-direction: column;
                        justify-content: center;
                    }
                    .textDiv {
                        width: 100%;
                    }
                    .text {
                        padding: 0 10px 0 10px;
                    }
                    .imageDiv {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                    .imageDiv img {
                        width: 50%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Franciscart;
