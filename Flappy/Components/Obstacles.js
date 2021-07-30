import React from 'react';
import { View } from 'react-native';

const Obstacles = ({obstacleLeft, obstacleWidth, obstacleHeight, gap}) => {


    return(
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstacleHeight,
                height: obstacleHeight,
                left :obstacleLeft,
                bottom: 0 + obstacleHeight + gap,
            }}/> 

            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstacleHeight,
                height: obstacleHeight,
                left :obstacleLeft,
                bottom: 0,
            }}/>
        </>
    )
}

export default Obstacles