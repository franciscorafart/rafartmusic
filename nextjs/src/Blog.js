import React from 'react';
import { useRouter } from 'next/router';

const Blog = props => {
    const router = useRouter();
    const slug = router.query.slug;
    
    const filterdArticles = slug ? props.articles.filter(a => a.slug.current === slug) : props.articles;
    const article = filterdArticles.length ? filterdArticles[0] : null;

    // TODO: No article send 404

    return(
        <div className="container">
            {slug ? 
            <>
                <h1 className="text title">{article.name}</h1>
                <div className="blogContainer">
                    {article.image && <div className="imageDiv">
                        {props && props.urlFor && <img src={props.urlFor(article.image.asset._ref)}/>}
                    </div>}
                    {article && <div className="textDiv">
                        {article.paragraph.map(p => {
                            
                            const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "text bold": "text";
                            return <p className={className}>{p.children[0]['text']}</p>;
                        })}

                    </div>}
                </div> 
            </>
            : 
            <>
                <h1 className="text title">Blog</h1>
                <div className="blogContainer">
                    {<div className="articleDiv">
                        {filterdArticles.map(a => {
                            return <a href={`blog/${a.slug.current}`} className=''><div className='article'>{a.name}</div></a>;
                        })}

                    </div>}
                </div> 
            </>

                }
            <style jsx>{`
                .container {
                    width: 100%;
                    margin-top: 60px;
                    padding-bottom: 100px;
                }
                .blogContainer {
                    display: flex;
                    flex-direction: column;
                    padding: 0 1% 0 1%;
                    justify-content: space-around;
                }
                .textDiv {
                    flex-basis: auto;
                    margin-top: 10px;
                }
                a {
                    display: block;
                    width: 100%;
                }
                .articleDiv {
                    display: flex;
                    // flex-direction: column:
                    gap: 8px;
                }
                .article {
                    height: 30px;
                    width: 60%;
                    border: 1px solid white;
                    border-radius: 8px;
                }
                .imageDiv {
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
                    .blogContainer {
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
};

export default Blog;
