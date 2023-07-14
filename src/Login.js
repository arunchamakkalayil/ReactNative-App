import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constants";
import { useState, useEffect } from "react";

import Btn from "./Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [checkUser, setCheckUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (email) => {
    setEmail(email);
  };
  const onPasswordChange = (password) => {
    setPassword(password);
  };
  useEffect(() => {
    const checkData = async () => {
      let value = await AsyncStorage.getItem("user");
      setCheckUser(JSON.parse(value));
      console.log(checkUser);
    };
    checkData();
  }, []);
  const onSubmit = () => {
    if (email != "" && password != "") {
      if (checkUser.email == email && checkUser.password == password) {
        alert("Logged In");
        props.navigation.navigate("Account");
      } else {
        alert("Invalid Email or Password");
      }
    } else {
      alert("enter email and password");
    }
  };
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
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 400,
            borderTopLeftRadius: 110,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: darkGreen,
              fontSize: 35,
              fontWeight: "bold",
              paddingTop: 80,
            }}
          >
            Welcome Back
          </Text>
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "bold" }}>
            Login to your account
          </Text>
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
            secureTextEntry={true}
            value={password}
            onChangeText={onPasswordChange}
          ></TextInput>

          <View
            style={{ alignItems: "flex-end", width: "80%", paddingTop: 10 }}
          >
            <Text
              style={{ fontSize: 16, color: darkGreen, fontWeight: "bold" }}
            >
              Forgot Password ?
            </Text>
          </View>
          <View style={{ paddingTop: 200 }}>
            <Btn
              bgColor={darkGreen}
              textColor="white"
              btnLabel={"Login"}
              Press={onSubmit}
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
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: darkGreen,
                  paddingLeft: 5,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;

// const styles = StyleSheet.create({})
