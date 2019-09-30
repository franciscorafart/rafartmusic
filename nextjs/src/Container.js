import React, {Component} from 'react';
import Header from './Header';
import Cover from './Cover';
import MainMenu from './MainMenu';
import client from '../client';
// import Skills from './Skills'
// import MyContacts from './MyContacts'
// import Footer from './Footer'
// import Applications from './Applications'
// import OtherProjects from './OtherProjects'
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
        return(
            <div className="website_div">
                <div >
                    <span className="text">Hey Rafart</span>
                </div>
                <Header urlFor={this.urlFor} menu={this.props.menu}/>
                <Cover urlFor={this.urlFor} coverImage={this.props.coverImage}/>
                <MainMenu urlFor={this.urlFor} menu={this.props.menu}/>
                <style jsx>{`
                      .website_div {
                        background-color: black;
                      }
                      .text{
                          font-family: 'Lato', sans-serif;
                          font-size: 4em;
                      }
                    `}
                </style>
            </div>

        )
    }
}

export default Container;
