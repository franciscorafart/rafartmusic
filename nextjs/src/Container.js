import React, {Component} from 'react';
import Header from './Header';
import Cover from './Cover';
import MainMenu from './MainMenu';
import Intro from './Intro';
import Videos from './Videos';
import IndexPage from './IndexPage';

import SignUp from './SignUp';
import Contact from './Contact';

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
                <Intro urlFor={this.urlFor} logo={this.props.logo}/>
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
            content = <div>Albums perro</div>
        } else if (page === 'about'){
            content = <div>Bio</div>
        } else if (page === 'press'){
            content = <div>Press</div>
        } else if (page === 'sign-up'){
            content = <SignUp/>
        }

        return(
            <div>
                <IndexPage/>
                <div className="website_div">
                    <Header
                        urlFor={this.urlFor}
                        menu={this.props.menu}
                        logo={this.props.logo}
                        selectedPage={page}
                    />
                    {content}
                    <style jsx>{`
                          .website_div {
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
