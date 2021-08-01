import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import information from '../static/information';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]:{
            flexDirection:"column"
        }
    },
}));

export default function ShiptFeatures() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="information-cards">
            <ImageCard information={information[0]} checked={checked}/>
            <ImageCard information={information[1]} checked={checked}/>
        </div>
    );
}