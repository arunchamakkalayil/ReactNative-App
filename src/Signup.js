import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";
import { useState } from "react";
const Signup = (props) => {

   
  return (
    <Background>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 400,
          paddingTop: 100,
        }}
      >
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
          Register
        </Text>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Create a new account
          </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 400,
            borderTopLeftRadius: 110,
            marginTop: 20,
            alignItems: "center",
            paddingTop:50
          }}
        >
        
          <Field placeholder={"Name"}  />
          <Field placeholder={"Phone"}  />
          <Field placeholder={"Email"} keyboardType={"email-address"} />
          <Field placeholder={"Password"} secureTextEntry={true} />
          <Field placeholder={"Confirm Password"} secureTextEntry={true} />
          <View style={{paddingTop:10}}>
          <View
            style={{display:'flex',flexDirection:'row', width: "80%", paddingTop: 10 }}
          >
            <Text
              style={{ fontSize: 16, color: 'grey', fontWeight: "bold" }}
            >
              By signing in you are agreed to our{" "}
            </Text>
          
           
          </View>
          <View style={{display:'flex',flexDirection:'row', width: "80%", paddingTop: 10 }}>
          <Text
              style={{ fontSize: 14, color: darkGreen, fontWeight: "bold" }}
            >
              Terms & Conditions{' '}
            </Text>
            <Text
              style={{ fontSize: 14, color: 'grey', fontWeight: "bold" }}
            >
              and{' '}
            </Text>
            <Text
              style={{ fontSize: 14, color: darkGreen, fontWeight: "bold" }}
            >
              Privacy policy
            </Text>
          </View>
          </View>
          
          <View style={{ paddingTop: 40 }}>
            <Btn
              bgColor={darkGreen}
              textColor="white"
              btnLabel={"Signup"}
              Press={() => {
                alert("Account Created")
props.navigation.navigate("Login")
                }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ? 
            </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
              
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: darkGreen,paddingLeft:5 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;

// const styles = StyleSheet.create({})
