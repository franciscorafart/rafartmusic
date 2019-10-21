import React, {Component} from 'react';
import Header from './Header';
import Cover from './Cover';
import MainMenu from './MainMenu';
import Intro from './Intro';
import Videos from './Videos';
import IndexPage from './IndexPage';
import Footer from './Footer';

import SignUp from './SignUp';
import Contact from './Contact';
import Albums from './Albums';
import About from './About';
import Posts from './Posts';

import client from '../client';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

class Container extends Component {
    constructor(props){
        super(props)

        this.urlFor = this.urlFor.bind(this)
        this.titleCase = this.titleCase.bind(this)
    }

    urlFor = (source) => {
        return builder.image(source)
    }

    titleCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        const page = this.props.page;
        let content = <div></div>

        if (page === 'home'){
            content = <div>
                <Cover urlFor={this.urlFor} coverImage={this.props.coverImage}/>
                <Intro urlFor={this.urlFor} rafart1={this.props.rafart1} logo={this.props.logo}/>
                <Posts urlFor={this.urlFor} posts={this.props.posts} onlyLatest={true}/>
                <MainMenu
                    urlFor={this.urlFor}
                    menu={this.props.menu}
                    menuBackground={this.props.menuBackground}
                />
                <Videos videos={this.props.videos}/>
            </div>
        } else if (page === 'contact'){
            content = <Contact/>
        } else if (page === 'albums'){
            content = <Albums urlFor={this.urlFor} albums={this.props.albums}/>
        } else if (page === 'about'){
            content = <About urlFor={this.urlFor} about={this.props.about}/>
        } else if (page === 'press'){
            content = <div>Press</div>
        } else if (page === 'sign-up'){
            content = <SignUp/>
        } else if (page === 'posts'){
            content = <Posts urlFor={this.urlFor} posts={this.props.posts}/>
        }

        return(
            <div className="website_div">
                <IndexPage urlFor={this.urlFor} favicon={this.props.favicon}/>
                <div>
                    <Header
                        urlFor={this.urlFor}
                        menu={this.props.menu}
                        logo={this.props.logo}
                        selectedPage={page}
                    />
                    {content}
                    <Footer
                        urlFor={this.urlFor}
                        menu={this.props.menu}
                    />
                    <style jsx global>{`
                        body {
                            margin: 0;
                            padding: 0;
                            background-color: black;
                        }
                    `}
                    </style>
                    <style jsx>{`
                        .website_div{
                            width:100%;
                            background-color: black;
                        }
                    `}
                    </style>

                </div>
            </div>
        )
    }
}

export default Container;
