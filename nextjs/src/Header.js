import React, {Component} from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'


class Cover extends Component{

    constructor(props){
        super(props)
    }

    render(){
        // console.log(this.props.menu)
        return(
                <div>
                    <ul>
                    {
                        this.props.menu?
                        this.props.menu.filter(item => item.headerMenu).map(item => {

                            return <li key={item.slug} className="text"><a href={item.linkString}>{item.title}</a></li>
                        })
                        :
                        <li className="text">Menu Loading...</li>
                    }
                    </ul>
                    <style jsx>{`
                        .text{
                            font-family: 'Lato', sans-serif;
                            color: white;
                        }
                        `}
                    </style>
                </div>
            )
    }
}

export default Cover
