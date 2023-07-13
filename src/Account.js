import {  Text, View } from 'react-native'

import React from 'react'
import { darkGreen } from './Constants'

const Account = (props) => {
  return (
    <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
      <Text style={{color:darkGreen,fontSize:30,fontWeight:'bold'}}>My Account</Text>

    </View>
  )
}

export default Account

