import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Bird from './Components/Bird'
import Obstacles from './Components/Obstacles'

export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight/2)
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth)
  const [obstacleLeftTwo, setObstacleLeftTwo] = useState(screenWidth + screenWidth/2 + 30) 
  const [obstacleNegHeight, setObstacleNegHeight] = useState(0)
  const [obstacleNegHeightTwo, setObstacleNegHeightTwo] = useState(0)
  const [score, setScore] = useState(0)
  const obstacleWidth = 60
  const obstacleHeight = 300
  const gap = 200  
  const gravity = 3
  let gameTimerID
  let obstacleLeftTimerID
  let obstacleLeftTimerIDTwo  
  const [isGameOver, setIsGameOver] = useState(false)


  //console.log(screenWidth)
  //console.log(screenHeight)
  
  //Start bird falling
  useEffect(() => {
    if (birdBottom > 0){
      gameTimerID = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      },30)

      return () => {
        clearInterval(gameTimerID)
      }
    }
  }, [birdBottom])
  //console.log(birdBottom)

  const jump = () => {
    if (!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log('jumped')
    }
  }


  //Start first obstacles
  useEffect(()  => {
    if (obstacleLeft > -obstacleWidth) {
      obstacleLeftTimerID = setInterval(() => {
        setObstacleLeft(obstacleLeft => obstacleLeft - 5)
      },30)  
  return () =>{
    clearInterval(obstacleLeftTimerID)
    }
  } else {
    setObstacleLeft(screenWidth)
    setObstacleNegHeight( - Math.random() * 100)
    setScore(score => score + 1)
  }
}, [obstacleLeft])


 //Start second obstacles
 useEffect(()  => {
  if (obstacleLeftTwo > -obstacleWidth) {
    obstacleLeftTimerIDTwo = setInterval(() => {
      setObstacleLeftTwo(obstacleLeftTwo => obstacleLeftTwo - 5)
    },30)  
return () =>{
  clearInterval(obstacleLeftTimerIDTwo)
  }
} else {
  setObstacleLeftTwo(screenWidth)
  setObstacleNegHeightTwo( - Math.random() * 100 + 2)
  setScore(score => score + 1)
  }
}, [obstacleLeftTwo])

//Check for collisions
useEffect(()  => {
  if (
  ((birdBottom <  (obstacleNegHeight + obstacleHeight + 30)  ||
  birdBottom > (obstacleNegHeight + obstacleHeight + gap -30)) &&
  (obstacleLeft > screenWidth/2 -30 && obstacleLeft < screenWidth/2 + 30)
  )
  ||
  ((birdBottom <  (obstacleNegHeightTwo + obstacleHeight + 30)  ||
  birdBottom > (obstacleNegHeightTwo + obstacleHeight + gap -30)) &&
  (obstacleLeft > screenWidth/2 -30 && obstacleLeftTwo < screenWidth/2 + 30) 
  )
  )
  {
    console.log('game over')
    gameOver()    
  }
  
})

const gameOver = () => {
  clearInterval(gameTimerID)
  clearInterval(obstacleLeftTimerID)
  clearInterval(obstacleLeftTimerIDTwo)
  setIsGameOver(true)
}



  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>   
        {isGameOver && <Text>{score}</Text>}       
        <Bird 
          birdBottom={birdBottom}
          birdLeft={birdLeft}
        />
        <Obstacles 
          color={'green'}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          randomBottom={obstacleNegHeight}
          gap={gap}
          obstacleLeft={obstacleLeft}        
        />
        <Obstacles 
          color={'yellow'}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          randomBottom={obstacleNegHeightTwo}
          gap={gap}
          obstacleLeft={obstacleLeftTwo}        
        />
      </View>
    </TouchableWithoutFeedback>
    
    
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
