import { Text, TouchableOpacity, View, TextInput,Toast } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constants";

import Btn from "./Btn";
import { useState , useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
 
  const onNameChange = (text) => {setName(text) };
  const onEmailChange = (email) => {setEmail(email)};
  const onPasswordChange = (password) => { setPassword(password)};

useEffect(()=>{
    const checkData = async() =>{
        let value = await AsyncStorage.getItem("user") ;
        setCheckEmail(JSON.parse(value))
     }
    checkData()
    
},[])
  const handleSubmit = async() =>{
  let user ={
    name: name,
    email:email,
    password:password

}
console.log(checkEmail)
try {
    
    if (checkEmail != null && checkEmail.email == email ){
        
        alert('User already registered')
    }
    else {
        await AsyncStorage.setItem('user',JSON.stringify(user))
        alert("Account Created");
       
                    props.navigation.navigate("Login");
    }
} catch (error) {
console.log(error)
}

  


  }
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
            paddingTop: 50,
          }}
        >
          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 28,
              width: "80%",
              height: 50,
              backgroundColor: "rgb(220,220,220)",
              marginTop: 20,
            }}
            placeholderTextColor={darkGreen}
            placeholder={"Name"}
            value={name}
            onChangeText={onNameChange}
            
          ></TextInput>

           <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 28,
              width: "80%",
              height: 50,
              backgroundColor: "rgb(220,220,220)",
              marginTop: 20,
            }}
            placeholderTextColor={darkGreen}
            placeholder={"Email"}
            value={email}
            keyboardType={"email-address"}
            onChangeText={onEmailChange}
          ></TextInput>

           <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 28,
              width: "80%",
              height: 50,
              backgroundColor: "rgb(220,220,220)",
              marginTop: 20,
            }}
            placeholderTextColor={darkGreen}
            placeholder={"Password"}
            value={password}
            secureTextEntry={true}
            onChangeText={onPasswordChange}
          ></TextInput>

          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, color: "grey", fontWeight: "bold" }}>
                By signing in you are agreed to our{" "}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                paddingTop: 10,
              }}
            >
              <Text
                style={{ fontSize: 14, color: darkGreen, fontWeight: "bold" }}
              >
                Terms & Conditions{" "}
              </Text>
              <Text style={{ fontSize: 14, color: "grey", fontWeight: "bold" }}>
                and{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: darkGreen, fontWeight: "bold" }}
              >
                Privacy policy
              </Text>
            </View>
          </View>

          <View style={{ paddingTop: 130 }}>
            <Btn
              bgColor={darkGreen}
              textColor="white"
              btnLabel={"Signup"}
              Press={handleSubmit}
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: darkGreen,
                  paddingLeft: 5,
                }}
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
