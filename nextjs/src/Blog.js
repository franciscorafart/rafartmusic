import React from 'react';
import { useRouter } from 'next/router';

const Blog = props => {
    const router = useRouter();
    const slug = router.query.slug;
    
    const filterdArticles = props.articles.filter(a => a.slug.current === slug);
    const article = filterdArticles.length ? filterdArticles[0] : null;

    return(
        <div className="container">
            <h1 className="text title">Blog</h1>
            <div className='contentContainer'>
            {slug &&
                <>
                    <div className="blogContainer">
                        <h2 className="text title">{article.name}</h2>
                        {article.image && <div className="imageDiv">
                            {props && props.urlFor && <img src={props.urlFor(article.image.asset._ref)}/>}
                        </div>}
                        {article && <div className="textDiv">
                            {article.paragraph.map(p => {
                                const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "text bold": "text";
                                return <p key={p.children[0]['text'].split(0,10)} className={className}>{p.children[0]['text']}</p>;
                            })}
                        </div>}
                    </div>
                </>}
                <div className="articleDiv">
                    <h3 className='text title'>Articles</h3>
                    {props.articles.map(a => {
                        return <a key={`${a.slug.current}-link`} className='text article' href={`${slug ? '' : 'blog/'}${a.slug.current}`}>{a.name}</a>;
                    })}
                </div>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 60px;
                    padding-bottom: 100px;
                }
                .contentContainer {
                    display: flex;
                    gap: 40px;
                    width: 60%;
                }
                .blogContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 2;
                    justify-content: space-around;
                }
                .textDiv {
                    flex-basis: auto;
                    margin-top: 10px;
                }
                a {
                    padding: 10px;
                    text-decoration: none;
                    border: 1px solid white;
                    border-radius: 8px;
                    height: 40px;
                }
                .articleDiv {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .imageDiv {
                    margin-top: 10px;
                    width: 300px;
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
                    .container {
                        margin-top: 0;
                        width: 100%;
                    }
                    .contentContainer {
                        flex-direction: column;
                        width: 100%;
                    }
                    .blogContainer {
                        flex-direction: column;
                        justify-content: center;
                        padding: 0 10px;
                    }
                    .articleDiv {
                        padding: 0 10px;
                    }
                    .textDiv {
                        width: 100%;
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
