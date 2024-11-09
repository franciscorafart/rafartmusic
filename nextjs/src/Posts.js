import React from 'react';

const Posts = props => {
    const onlyLatest = props.onlyLatest || false;
    let allPosts = [];
    if (props.posts && props.posts.length>0){
        allPosts = props.posts.filter(a => a.visible).sort(
            (a,b) => {
                let dateA = new Date(a.publishedAt);
                let dateB = new Date(b.publishedAt);

                return dateA<dateB? 1: -1;
        });

        allPosts = onlyLatest && allPosts.length>0? [allPosts[0]]: allPosts;
    }

    return (
        <div className="background">
            { onlyLatest? <div></div>
                :
                    <div><h2 className="text bigText centeredTitle">Posts and News</h2></div>
            }
            <div className="container">
                <div className="postsContainer">
                {
                    allPosts.map(post => {

                    let date = post.publishedAt;
                    date = date && date.length > 0? date.substring(0,10).split('-').join('-'): '';

                    return <div className="album" key={post.slug}>
                        <h3 className="text centeredTitle">{post.title}</h3>
                        <h4 className="text centeredTitle">{date}</h4>
                        <div className="albumInfo">
                            <div className="imageDiv">
                                <img src={props.urlFor(post.mainImage.asset._ref)}/>
                            </div>
                            <div className="textDiv">
                                {
                                    post.paragraph.map(p => {
                                    const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "paragraph text bold": "paragraph text";
                                    return <p key={p._key} className={className}>{p.children[0]['text']}</p>;
                                })
                                }
                            </div>
                        </div>
                        {post.link? <div>
                            <form action={post.link}>
                                <input className="callToAction text mediumText" type="submit" value="Check it out"/>
                            </form>
                        </div>: <div></div>}
                    </div>
                })}
                {
                    !onlyLatest && allPosts.length===0?
                        <h4 className="text centeredTitle">No news right now</h4>
                    :
                        <div></div>
                }
                </div>
        </div>
        <style jsx>{`
            .background {
                width: 100%;
                margin: 60px 0 40px 0;
            }
            .container {
                display: flex;
                justify-content: center;
            }
            img {
                width: 80%;
                padding-left: 10%;
            }
            .postsContainer {
                display: flex;
                flex-direction: column;
                padding: 0 1% 0 1%;
                width: 60%;
            }
            .album {
                margin: 10px 0 10px 0;
                border: 1px solid gray;
            }
            .albumInfo {
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 10px 0 10px 0;
                align-items: center;
            }
            .textDiv {
                flex-basis: auto;
                margin-top: 10px;
                float: left;
            }
            .paragraph {
                padding: 0 2% 0 2%;
            }
            .imageDiv {
                width: 360px;
            }
            form {
                width: 100%;
                display: flex;
                justify-content: flex-end;
            }
            .text{
                font-family: 'Encode Sans Expanded', sans-serif;
                line-height: 1.5;
                color: white;
            }
            .mediumText {
                font-size: 1em;
            }
            .bigText {
                font-size: 2em;
            }
            .centeredTitle {
                text-align: center;
            }
            .bold {
                font-size: 1.3em;
            }
            .callToAction {
                min-width: 160px;
                margin: 20px 20px 20px 0;
                height: 60px;
                background-color: #1db954;
                border-radius: 20px;
                cursor: pointer;
            }
            @media all and (max-width: 750px) {
                .textDiv {
                    width: 100%;
                }
                .imageDiv {
                    width: 100%;
                }
                img {
                    width: 50%;
                    padding-left: 25%;
                }
                form {
                    justify-content: center;
                }
                .callToAction {
                    margin: 20px 0 20px 0;
                    width: 40%;
                }
                .postsContainer {
                    width: 100%;
                }
            }
        `}</style>
        </div>
    );
};

export default Posts;
