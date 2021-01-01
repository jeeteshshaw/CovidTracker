import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useState } from "react";
import { Value } from "react-native-reanimated";
import { config } from "./Firebase/Config";

export const AuthContext = React.createContext(null);

const SaveDataLocal = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    console.log("saved");
  } catch (e) {
    console.log(e);
  }
}

const GetDataLocal = async () => {
  try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      const data =  jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(data);
      return data;
  } catch (e) {
    // saving error
    console.log(e);

  }
}

const DelDataLocal = async() =>{
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
}

const FirebaseUserUpdateName = async(name="") =>{
  await config.auth().currentUser?.updateProfile({
    displayName: name
  }).then(res =>{
     console.log(res);
     return res;
  });
}



export { SaveDataLocal, GetDataLocal, DelDataLocal, FirebaseUserUpdateName }

