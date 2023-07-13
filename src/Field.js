import {  TextInput  } from 'react-native'
import React from 'react'
import { darkGreen } from './Constants'

const Field = (props) => {
  return (
    <TextInput  {...props} style={{borderRadius:100,color:darkGreen,paddingHorizontal:28,width:'80%',height:50,backgroundColor:'rgb(220,220,220)',marginTop:20}} placeholderTextColor={darkGreen}>
      
    </TextInput>
  )
}

export default Field

