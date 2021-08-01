import React, {useEffect, useState} from 'react';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar:{
        background: '0',
        backgroundColor: '#191B19',
        
        //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/shipt.png'})`,
    },
    appbarWrapper:{
        width: '80%',
        margin: '0 auto'
    },
    appbarTitle:{
        flexGrow: '1',
        //backgroundColor: '#191B19', //NiceBlack
        //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/shipt.png'})`,
    },
    container:{        
        textAlign: 'center',
    },
    icon:{
        color: '#fff',
        fontSize: '2rem',
    },
    goDown:{
        color: '#6ECC5E',
        fontSize: '4rem',
        background: 'rgba(0,0,0,0.8)',
        height: 44, 
        width: 44, 
        borderRadius: 22  
    },
    title:{
        color: '#fff',
        fontSize: '4rem',
        background: 'rgba(0,0,0,0.9)',
        borderRadius: 10,
        borderWidth: 1,
    },
    colorTitle:{
        color: '#6ECC5E',
    }
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    },[])
    return(
     <div className={classes.root} id ='header'>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                <span className={classes.colorTitle}>Shipt</span> to you.</h1>
                <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton>
            </Toolbar>  
        </AppBar>

        <Collapse 
            in={checked} 
            {...(checked ? {timeout: 1000} : {})} 
            collapsedHeight={50}>
        <div className={classes.container}>
            <h1 className={classes.title}>
             Forgot the drinks?<br />
            <span className={classes.colorTitle}> We've got you.</span>
            </h1>

                <Scroll to="information-cards" smooth={true}>
                    <IconButton>
                    <   ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>
                </Scroll>
        </div>
        </Collapse>
    </div>
    );
}