import { Text, View } from "react-native";

import React, { useState } from "react";
import { darkGreen } from "./Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Btn from "./Btn";

const Account = (props) => {
  let [userdata, setUserData] = useState("");
  const findUser = async () => {
    try {
      let data = await AsyncStorage.getItem("user");
      setUserData(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = () => {
    try {
      AsyncStorage.removeItem("user");
      props.navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userdata);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text style={{ color: darkGreen, fontSize: 30, fontWeight: "bold" }}>
        Welcome
      </Text>

      {userdata ? (
        <View
          style={{
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            backgroundColor: "white",
            borderRadius: 8,
            paddingVertical: 45,
            paddingHorizontal: 25,
            width: "80%",

            marginVertical: 10,
          }}
        >
          {userdata.name ? (
            <Text
              style={{
                color: darkGreen,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >{`Name:${userdata.name}`}</Text>
          ) : (
            ""
          )}
          {userdata.email ? (
            <Text
              style={{
                color: darkGreen,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >{`Email:${userdata.email}`}</Text>
          ) : (
            ""
          )}
        </View>
      ) : (
        ""
      )}

      <View style={{ marginTop: 100 }}>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel={"User Data"}
          Press={findUser}
        />
        <Btn
          bgColor="red"
          textColor="white"
          btnLabel={"Logout"}
          Press={removeUser}
        />
      </View>
    </View>
  );
};

export default Account;
