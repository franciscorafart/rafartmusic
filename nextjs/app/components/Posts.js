import React from 'react';
import './Posts.css';

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
                })
                }
                {
                    !onlyLatest && allPosts.length===0?
                        <h4 className="text centeredTitle">No news right now</h4>
                    :
                        <div></div>
                }
                </div>
            </div>
        </div>
    );
};

export default Posts;
