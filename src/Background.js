import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View >
      <ImageBackground source={require("../assets/image.jpg")} style={{width: '100%', height: '100%'}} />
      <View style={{position:"absolute"}}>
      {children} 
     
    </View>
   
    
    </View>
  
  )
}

export default Background

const styles = StyleSheet.create({})