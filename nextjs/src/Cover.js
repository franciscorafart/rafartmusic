import React, {useState} from 'react'
import {Button, Drawer, Typography} from '@material-ui/core';
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
    menuBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        padding: '0 40px'
    },
    introContainer: {
        maxWidth: props => props.isMobile ? '50%': '30%',
        marginLeft: props => props.isMobile ? '20px' : '40px',
        marginTop: props => props.isMobile ? '20px' : '40px',
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        maxHeight: props => props.isMobile? '60px' : '80px',
        maxWidth: props => props.isMobile? '200px' : '320px',
    },
    menuButton: {
        color: '#FFFFFF',   // Todo: Change color
    },
    paper: {
        padding: '32px 0 0 24px',
        backgroundColor: '#14171F',
        width: props => props.isMobile ? '100%' : '300px',
    },
    text: {
        fontFamily: 'Encode Sans Expanded',
        color: 'white', // TODO: Change text color to be less agressive.
        textAlign: 'center',
        textDecoration: 'None',
    },
    subHeader: {
        fontSize: props => props.isMobile? '0.7em' : '1em',
    },
    menuText: {
        fontSize: '1.1em',

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
                {!props.isMobile && <div className={classes.menuBar}>
                        {
                            props.menu.filter(item => item.headerMenu).sort((a,b) => a.order > b.order ? 1 : -1).map(
                            (item, idx) => <div key={`${item.title}-${idx}`}>
                                <a className={`${classes.text} ${classes.menuText}`} href={item.linkString}>
                                    {item.title}
                                </a>
                            </div>
                            )
                        }
                    </div>
                }
                {
                    props && props.coverImage ?
                    <div
                        className={classes.headerBg}
                        style = {{backgroundImage: `url(${props.urlFor(props.coverImage.mainImage.asset._ref)})`}}
                    > 
                        <div className={classes.introContainer}>
                            <img className={classes.logo} src={props.urlFor(props.logo.mainImage.asset._ref).url()}/>
                            <Typography className={`${classes.text} ${classes.subHeader}`}>Chapman Stick and Electronic Rock</Typography>
                        </div>
                        {props.isMobile &&
                            <>
                                {!menuOpen && <div>
                                        <Button onClick={() => setMenuOpen(true)}>
                                            <span className={classes.menuButton}><FontAwesomeIcon size='xl' icon={faBars}/></span>
                                        </Button>
                                    </div>
                                }
                                
                                <>
                                <Drawer 
                                        anchor='bottom'
                                        open={menuOpen} 
                                        classes={{
                                            paper: classes.paper,
                                        }}
                                        onClose={() => {
                                            setMenuOpen(false);
                                        }}
                                        >
                                        {props.menu.filter(item => item.headerMenu).sort((a,b) => a.order > b.order ? 1 : -1).map(
                                            (item, idx) => <div mb='15px' key={`${item.title}-${idx}`}>
                                                <a className={`${classes.text} ${classes.menuText}`} href={item.linkString}>
                                                    {item.title}
                                                </a>
                                            </div>
                                            )
                                        } 
                                    </Drawer>
                                </>
                            </>
                        }
                    </div>:
                    <span className={classes.text}>Loading...</span>
                }
                </section>
            </div>
    );
};

export default Cover;
