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
        width: props => props.isMobile ? '55%': '30%',
        marginLeft: props => props.isMobile ? '10px' : '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        maxHeight: '100px',
    },
    menuButton: {
        color: '#FFFFFF',
        width: '45px',
        height: '45px',
    },
    paper: {
        padding: '32px 0 0 24px',
        backgroundColor: '#14171F',
        width: props => props.isMobile ? '100%' : '300px',
    },
    text: {
        fontFamily: 'Encode Sans Expanded',
        fontSize: '1em',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'None',

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
                    props.coverImage?
                    <div
                        className={classes.headerBg}
                        style = {{backgroundImage: `url(${props.urlFor(props.coverImage.mainImage.asset._ref)})`}}
                    > 
                        <Box pt='20px' pl='2%' className={classes.introContainer}>
                            <img className={classes.logo} src={props.urlFor(props.logo.mainImage.asset._ref)}/>
                            <Typography className={classes.text}>Chapman Stick and Electronic Prog-Rock</Typography>
                        </Box>
                        {!menuOpen && <Box p='20px'>
                                <Button onClick={() => setMenuOpen(true)}>
                                    <span className={classes.menuButton}><FontAwesomeIcon icon={faBars}/>Menu</span>
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
                                {props.menu.filter(item => item.mainMenu || item.headerMenu).map(
                                    item => <Box mb='15px'>
                                        <a className={classes.text} href={item.linkString}>
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
    )
}

export default Cover
