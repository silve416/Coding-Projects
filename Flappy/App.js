import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './Components/Bird'
import Obstacles from './Components/Obstacles'

export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight/2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const obstacleWidth = 60
  const obstacleHeight = 300
  const gap = 50  
  const gravity = 3
  let gameTimerID
  let obstaclesLeftTimerID
  
  //Start bird falling
  useEffect(() => {
    if (birdBottom > 0){
      gameTimerID = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerID)
      }
    }
  }, [birdBottom])
  console.log(birdBottom)

  //Start first obstacles
  useEffect(()  => {
    if (obstaclesLeft > 0) {
      obstaclesLeftTimerID = setInterval(()  => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
    }

  return () =>{
    clearInterval(obstaclesLeftTimerID)
  }

  }, [obstaclesLeft])


  return (
    <View style={styles.container}>          
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles 
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}        
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
