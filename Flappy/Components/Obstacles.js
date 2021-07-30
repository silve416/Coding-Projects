import React from 'react';
import { View } from 'react-native';

const Obstacles = ({
    color, 
    obstacleLeft, 
    obstacleWidth, 
    obstacleHeight, 
    gap,
    randomBottom}) => {

    return(
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left :obstacleLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}/> 

            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left :obstacleLeft,
                bottom: randomBottom,
            }}/>
        </>
    )
}

export default Obstacles