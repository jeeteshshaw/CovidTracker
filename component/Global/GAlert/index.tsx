import { Alert } from "react-native";

export const GAlert = (data)=>
    Alert.alert(
        data.header,
        data.body,
        [
            {
                text: "Ok",
                onPress:()=> console.log("OK")
            }
        ],
        {cancelable: false}
    );