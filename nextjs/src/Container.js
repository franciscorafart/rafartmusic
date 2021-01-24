import React, {useState, useEffect} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Box, Typography} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronDown} from '@fortawesome/free-solid-svg-icons';

import Cover from './Cover';
import IndexPage from './IndexPage';
import Contact from './Contact';
import Albums from './Albums';
import About from './About';
import Posts from './Posts';
import Footer from './Footer';
import SignUp from './SignUp';
import Videos from './Videos';

import client from '../client';
import imageUrlBuilder from '@sanity/image-url'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    accordion: {
        backgroundColor: 'transparent',
        borderTop: '1px solid white',
    },
    summary: {
        '&.MuiAccordionSummary-content': {
            display: 'flex',
            padding: props => props.isMobile? '0 0 0 0' : '0 10px 0 10px',
        }
    },
    last: {
        borderBottom: '1px solid white',
    },
    text: {
        fontFamily: 'Encode Sans Expanded',
        fontSize: props => props.isMobile? '1em': '1.8em',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'None',
    },
    chevron: {
        color: 'white',
        width: '20px',
        height: '20px',
        margin: props => props.isMobile? '3px 0 0 3px' : '15px 0 0 5px',
    }
});

const builder = imageUrlBuilder(client)

const Page = props => {
    const [expanded, setExpanded] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth < 450)
        }
    
        window.addEventListener('resize', handleResize)
    })

    const urlFor = source => builder.image(source);

    const classes = useStyles({isMobile});

    const page = props.page;
    let content = <div></div>;

    // TODO: Add
    // Upcoming shows section
    const boxPadding = isMobile? 0 : 8;
    const boxMargin = isMobile? 8 : 10;
    if (page === 'home'){
        content = <Box pl={boxPadding} pr={boxPadding} pt={boxPadding/2} mt={boxMargin} mb={boxMargin}>
            <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={() => setExpanded(expanded === 'panel1' ? '' : 'panel1')}>
                <AccordionSummary className={classes.summary}>
                    <Typography className={classes.text}>Latest News</Typography>
                    <FontAwesomeIcon className={classes.chevron} icon={expanded === 'panel1' ? faChevronDown : faChevronLeft}/>
                </AccordionSummary>
                <AccordionDetails>
                    <Posts urlFor={urlFor} posts={props.posts} onlyLatest={true}/>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={() =>  setExpanded(expanded === 'panel2' ? '' : 'panel2')}>
                <AccordionSummary className={classes.summary}>
                    <Typography className={classes.text}>Latest Videos</Typography>
                    <FontAwesomeIcon className={classes.chevron} icon={expanded === 'panel2' ? faChevronDown : faChevronLeft}/>
                </AccordionSummary>
                <AccordionDetails>
                    <Videos videos={props.videos}/>
                </AccordionDetails>
            </Accordion>
            <Accordion className={`${classes.accordion} ${classes.last}`} expanded={expanded === 'panel3'} onChange={() =>  setExpanded(expanded === 'panel3' ? '' : 'panel3')}>
                <AccordionSummary className={classes.summary}>
                    <Typography className={classes.text}>Sign up Newsletter</Typography>
                    <FontAwesomeIcon className={classes.chevron} icon={expanded === 'panel3' ? faChevronDown : faChevronLeft}/>
                </AccordionSummary>
                <AccordionDetails>
                    <SignUp/>
                </AccordionDetails>
            </Accordion>
        </Box>
    } else if (page === 'contact'){
        content = <Contact/>
    } else if (page === 'albums'){
        content = <Albums urlFor={urlFor} albums={props.albums}/>
    } else if (page === 'about'){
        content = <About urlFor={urlFor} about={props.about}/>
    } else if (page === 'posts'){
        content = <Posts urlFor={urlFor} posts={props.posts}/>
    }

    return(
        <div className="website_div">
            <IndexPage urlFor={urlFor} favicon={props.favicon}/>
            <div>
                <Cover 
                    urlFor={urlFor} 
                    coverImage={props.coverImage}
                    rafart1={props.rafart1}
                    menu={props.menu}
                    logo={props.logo}
                    isMobile={isMobile}
                />
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
    )
}

export default Page;
