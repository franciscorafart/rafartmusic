import React, {Component} from 'react';
import Header from './Header';
import Cover from './Cover';
import MainMenu from './MainMenu';
import Intro from './Intro';
import Videos from './Videos';

import client from '../client';
// import Skills from './Skills'
// import MyContacts from './MyContacts'
// import Footer from './Footer'
// import Applications from './Applications'
// import OtherProjects from './OtherProjects'
import imageUrlBuilder from '@sanity/image-url'

import Head from 'next/head';

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
        console.log('this.props in Container', this.props)
        return(
            <div>
                <Head>
                    <title>Foo</title>
                    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap" rel="stylesheet"/>
                    <script src="https://kit.fontawesome.com/0b202351e9.js" crossorigin="anonymous"></script>
                </Head>

                <div className="website_div">
                    <Header urlFor={this.urlFor} menu={this.props.menu} logo={this.props.logo}/>
                    <Cover urlFor={this.urlFor} coverImage={this.props.coverImage}/>
                    <Intro urlFor={this.urlFor} logo={this.props.logo}/>
                    <MainMenu
                        urlFor={this.urlFor}
                        menu={this.props.menu}
                        menuBackground={this.props.menuBackground}
                    />
                    <Videos videos={this.props.videos}/>
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
