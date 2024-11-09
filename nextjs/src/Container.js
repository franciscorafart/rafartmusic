import React, {useState, useEffect} from 'react';
import {Box, Typography} from '@material-ui/core';

import Cover from './Cover';
import IndexPage from './IndexPage';
import Contact from './Contact';
import Albums from './Albums';
import About from './About';
import FastLinks from './FastLinks';
import Footer from './Footer';
import Posts from './Posts';
// import SignUp from './SignUp';
import Videos from './Videos';
import Catalogue from './Catalogue';
import Franciscart from './Franciscart';

import client from '../client';
import imageUrlBuilder from '@sanity/image-url';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        fontFamily: 'Encode Sans Expanded',
        fontSize: props => props && props.isMobile ? '1.4em': '1.8em',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'None',
    },
});

const builder = imageUrlBuilder(client);

const Page = props => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setIsMobile(window.innerWidth < 800);
            }

            window.addEventListener('resize', handleResize, {passive: true});

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); 

    const urlFor = source => builder.image(source);

    const classes = useStyles({isMobile});

    const page = props.page;

    // TODO: Add Upcoming shows section
    const boxPadding = isMobile ? 0 : 2;
    const boxMargin = isMobile ? 5 : 6;

    let content = <Box pl={boxPadding} pr={boxPadding} pt={boxPadding/2} mt={boxMargin} mb={boxMargin}>
        <Typography className={classes.text}>Latest News</Typography>
        <Posts urlFor={urlFor} posts={props.posts} onlyLatest={true}/>
        <Typography className={classes.text}>Latest Videos</Typography>
        <Videos videos={props.videos}/>
        {/* <Typography className={classes.text}>Sign up Newsletter</Typography> */}
        {/* <SignUp/> */}
    </Box>;

    let cover = <Cover
        urlFor={urlFor}
        coverImage={props.coverImage}
        rafart1={props.rafart1}
        menu={props.menu}
        logo={props.logo}
        isMobile={isMobile}
    />;
    
    if (page === 'contact'){
        content = <Contact/>;
    } else if (page === 'albums'){
        content = <Albums urlFor={urlFor} albums={props.albums}/>;
    } else if (page === 'about'){
        content = <About urlFor={urlFor} about={props.about}/>;
    } else if (page === 'posts'){
        content = <Posts urlFor={urlFor} posts={props.posts}/>;
    } else if (page === 'instagram'){
        content = <FastLinks urlFor={urlFor} logo={props.logo} />;
        cover = null;
    } else if (page === 'franciscart') {
        content = <Franciscart urlFor={urlFor} logo={props.logo} about={props.about} />;
    } else if (page === 'catalogue'){
        content = <Catalogue urlFor={urlFor} logo={props.logo} />;
        cover = null;
    }

    return(
        <div className="website_div">
            {props.favicon && urlFor && <IndexPage urlFor={urlFor} favicon={props.favicon}/>}
            <div>
                {cover}
                {content}
                <Footer
                    urlFor={urlFor}
                    menu={props.menu}
                    isMobile={isMobile}
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
                    }
                `}
                </style>

            </div>
        </div>
    );
};

export default Page;
