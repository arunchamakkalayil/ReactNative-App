import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({bgColor,textColor,btnLabel,Press}) {
  return (
    <TouchableOpacity onPress={Press} style={{backgroundColor:bgColor,margin:10,borderRadius:100,justifyContent:'center',alignItems:'center',width:300}}>
<Text style={{fontSize:22,padding:5,color:textColor,fontWeight:'bold'}}>{btnLabel}</Text>
    </TouchableOpacity>
    
   
  )
}
