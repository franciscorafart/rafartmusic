import React, {useState, Fragment} from 'react'
import {Button, Box, Drawer, Typography} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    headerBg: {
        width: '100%',
        minHeight: props => props.isMobile? '200px' : '420px',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-between',
    },
    introContainer: {
        maxWidth: props => props.isMobile ? '50%': '30%',
        marginLeft: props => props.isMobile ? '10px' : '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        maxHeight: props => props.isMobile? '60px' : '80px',
        maxWidth: props => props.isMobile? '200px' : '320px',
    },
    menuButton: {
        color: '#FFFFFF',
        width: props => props.isMobile? '35px' : '45px',
        height: props => props.isMobile? '35px' : '45px',
    },
    paper: {
        padding: '32px 0 0 24px',
        backgroundColor: '#14171F',
        width: props => props.isMobile ? '100%' : '300px',
    },
    text: {
        fontFamily: 'Encode Sans Expanded',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'None',
    },
    subHeader: {
        fontSize: props => props.isMobile? '0.7em' : '1em',
    },
    menuText: {
        fontSize: props => props.isMobile? '1.2em' : '1.4em',

        '&:hover': {
            color: '#c4ed21',
        }
    }
});

const Cover = props => {
    const [menuOpen, setMenuOpen] = useState(false);
    const classes = useStyles({isMobile: props.isMobile});
    return(
            <div>
                <section>
                {
                    props && props.coverImage ?
                    <div
                        className={classes.headerBg}
                        style = {{backgroundImage: `url(${props.urlFor(props.coverImage.mainImage.asset._ref)})`}}
                    > 
                        <Box pt='20px' pl='2%' className={classes.introContainer}>
                            <img className={classes.logo} src={props.urlFor(props.logo.mainImage.asset._ref).url()}/>
                            <Typography className={`${classes.text} ${classes.subHeader}`}>Chapman Stick and Electronic Prog-Rock</Typography>
                        </Box>
                        {!menuOpen && <Box p='20px'>
                                <Button onClick={() => setMenuOpen(true)}>
                                    <span className={classes.menuButton}><FontAwesomeIcon icon={faBars}/></span>
                                </Button>
                            </Box>
                        }
                        
                        <Fragment>
                            <Drawer 
                                anchor={props.isMobile ? 'bottom': 'right'}
                                open={menuOpen} 
                                classes={{
                                    paper: classes.paper,
                                }}
                                onClose={() => {
                                    setMenuOpen(false);
                                }}
                            >
                                {props.menu.filter(item => item.headerMenu).sort((a,b) => a.order > b.order ? 1 : -1).map(
                                    (item, idx) => <Box mb='15px' key={`${item.title}-${idx}`}>
                                        <a className={`${classes.text} ${classes.menuText}`} href={item.linkString}>
                                            {item.title}
                                        </a>
                                    </Box>
                                    )
                                } 
                            </Drawer>
                        </Fragment>
                    </div>:
                    <span className={classes.text}>Loading...</span>
                }
                </section>
            </div>
    );
};

export default Cover;
