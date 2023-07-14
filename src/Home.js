import { View, Text } from "react-native";
import React from "react";
import Background from "./Background";
import Btn from "./Btn";
import { green, white } from "./Constants";
const Home = (props) => {
  return (
    <Background>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 350,
          width: 400,
        }}
      >
        {/* <Text style={{fontSize:50,fontFamily:'monospace', color:"white",textAlign:'center'}}>Welcome</Text> */}
        <Btn
          bgColor={green}
          textColor={white}
          btnLabel={"Login"}
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor={white}
          textColor={green}
          btnLabel={"Signup"}
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

export default Home;
