import React, {Component} from 'react';

class Posts extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const onlyLatest = this.props.onlyLatest || false;
        let allPosts = [];
        if (this.props.posts && this.props.posts.length>0){
            allPosts = this.props.posts.filter(a => a.visible).sort(
                (a,b) => {
                    let dateA = new Date(a.publishedAt);
                    let dateB = new Date(b.publishedAt);

                    return dateA<dateB? 1: -1;
            });

            allPosts = onlyLatest && allPosts.length>0? [allPosts[0]]: allPosts;
        }

        return (
            <div className="container">
            <div>
                {

                    onlyLatest?
                        allPosts.length>0?
                            <div><h2 className="text bigText centeredTitle">Latest news</h2></div>
                        :
                            <div></div>
                    :
                        <div><h2 className="text bigText centeredTitle">Posts and News</h2></div>
                }
                <div className="postsContainer">
                {
                    allPosts.map(post => {

                    let date = post.publishedAt;
                    date = date.length>0? date.substring(0,10).split('-').join('-'): '';

                    return <div className="album" key={post.slug}>
                        <h3 className="text centeredTitle">{post.title}</h3>
                        <h4 className="text centeredTitle">{date}</h4>
                        <div className="albumInfo">
                            <div className="imageDiv">
                                <img src={this.props.urlFor(post.mainImage.asset._ref)}/>
                            </div>
                            <div className="textDiv">
                                {
                                    post.paragraph.map(p => {
                                    // NOTE: is exposing _key safe?
                                    const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "paragraph text bold": "paragraph text";
                                    return <p key={p._key} className={className}>{p.children[0]['text']}</p>
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
                .container {
                    width: 100%;
                    margin: 60px 0 40px 0;
                }
                img {
                    width: 80%;
                    padding-left: 10%;
                }
                .postsContainer {
                    display: flex;
                    flex-direction: column;
                    padding: 0 1% 0 1%;
                }
                .album {
                    margin: 10px 0 10px 0;
                    border: 1px solid gray;
                }
                .albumInfo {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    padding: 10px 0 10px 0;
                    justify-content: space-around;
                }
                .textDiv {
                    flex-basis: auto;
                    width: 60%;
                    margin-top: 10px;
                    float: left;
                }
                .paragraph {
                    padding: 0 2% 0 2%;
                }
                .imageDiv {
                    width: 40%;
                    margin-top: 10px;
                }
                form {
                    width: 100%;
                    padding-left: 10%;
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
                .callToAction {
                    width: 80%;
                    height: 30px;
                    background-color: #519ead;
                    margin: 10px 0 10px 0;
                }
                .bold {
                    font-size: 1.3em;
                }
                .callToAction {
                    width: 20%;
                    margin: 20px 0 20px 65%;
                    height: 60px;
                    background-color: #519ead;
                }
                @media all and (max-width: 750px) {
                    .albumInfo {
                        flex-direction: column;
                        justify-content: center;
                    }
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
                    .callToAction {
                        margin: 20px 0 20px 30%;
                    }
                }
            `}</style>
            </div>
        )
    }
}

export default Posts;
