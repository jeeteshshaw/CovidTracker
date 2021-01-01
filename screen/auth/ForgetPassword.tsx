import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { GInput } from '../../component/Global/GInput/index';
import { GText } from '../../component/Global/GText/index';
import { GButton } from '../../component/Global/GButton/index';
import 'react-native-gesture-handler';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { config } from '../../Service/Firebase/Config';
import { AuthContext, DelDataLocal, GetDataLocal, SaveDataLocal} from '../../Service';
import CheckBox from '@react-native-community/checkbox';
import { GAlert } from '../../component/Global/GAlert';





function ForgetPassword({ navigation }) {
    const [User, setUser] = useState({
        email: '',
    });

    const ForgetPasswordHandler = async()=>{
        console.log(User);
        try {
           await config.auth().sendPasswordResetEmail(User.email)
           .then(res =>{
                console.log(res);
                GAlert({header: "Covid Tracker", body:"An Reset Password mail has been sended"});
                return navigation.navigate("Login");
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: "100%"}}>
            
            {/* <AuthContext.Provider value={UserData} /> */}
            <View style={{width:"80%"}}>
                <GText style={style.text} > Email Address </GText>
                <GInput
                    placeholderTextColor='#eee'
                    keyboardType='email-address'
                    placeholder='Type Email...'
                    value={User.email}
                    onChangeText={(e = '') => {
                        console.log(User)
                        setUser({
                        ...User, 
                            email: e})
                    }}
                    style={style.input} />
            </View>
           
            
            {/* <GButton 
            onPress={()=>{
                console.log(Email);
                navigation.navigate("Login", {email: Email})}} 
            style={{marginVertical: 10, padding: 5, fontWeight: 800, fontSize: 20}}
            >Next</GButton> */}
            <View
                style={{ width: '80%', marginVertical: 10, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                

                <TouchableOpacity
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}

                    onPress={ForgetPasswordHandler} >
                    <GText>Send</GText>
                    <Image
                        style={style.tinyLogo}
                        source={require('../../assets/arrow1.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 16,
    },
    text: {
        color: '#333',
        fontSize: 22,
        marginVertical: 5,
        fontWeight: 'normal',
        fontStyle: 'italic'
    },
    tinyLogo: {
        width: 40,
        height: 35,
    },
})

export default ForgetPassword
