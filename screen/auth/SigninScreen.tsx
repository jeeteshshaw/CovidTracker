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





function Signin({ navigation }) {
    const [User, setUser] = useState({
        email: '',
        password: '',
        remember: false
    });
    const {UserContext, setUserContext} = useContext(AuthContext)
    // const [UserData, setUserData] = useState()
    const [LocalData, setLocalData] = useState(false)

    const SigninHandler = async()=>{
        console.log(User);
        try {
            const res = 
            await config.auth()
            .signInWithEmailAndPassword(User.email, User.password);
            console.log(res);
            console.log("user");
            // console.log(config.auth().currentUser.emailVerified);
            // AuthProvider(res);
            setUserContext(res);
            if(User.remember){
                console.log("saving");
                SaveDataLocal(User);

            }
            if(config.auth().currentUser.emailVerified){
                return navigation.navigate("Home", { user: User });
            }
            return navigation.navigate("Verify", { user: User });

        } catch (error) {
            console.log(error)
        }
    }


 


    const LoginRemember = () =>{
        GetDataLocal()
        .then(res =>{
            console.log(res)
            if (!res)
            return false;
            // res.reload()
            setUser(res);
            
            return true;
        })
    }
    useEffect(() => {
        LoginRemember()
        setLocalData(true)
    },[LocalData])
    


    return (
        <View>
            
            {/* <AuthContext.Provider value={UserData} /> */}
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
            <GText style={style.text} > Password </GText>
            <GInput
                placeholderTextColor='#eee'
                keyboardType='default'
                secureTextEntry
                value={User.password}
                placeholder='Type Password...'
                onChangeText={(e = '') => {
                    console.log(User)
                    setUser({
                        ...User, 
                         password: e})
                }}
                style={style.input} />
            <View 
            style={
                {display: 'flex', 
                justifyContent: 'flex-end' ,
                alignItems: 'flex-end', 
                flexDirection: 'row',
                marginVertical: 10
                }}>
            <GText style={{fontSize:16}}>Remember me </GText>
            <CheckBox 
            value={User.remember}
            onValueChange={()=> setUser({
                ...User,
                remember: !User.remember
            })}
            />
            </View>
            {/* <GButton 
            onPress={()=>{
                console.log(Email);
                navigation.navigate("Login", {email: Email})}} 
            style={{marginVertical: 10, padding: 5, fontWeight: 800, fontSize: 20}}
            >Next</GButton> */}
            <View
                style={{ width: '100%', marginVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <TouchableOpacity
                    style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        console.log(User);
                        navigation.navigate("Signup", { user: User })
                    }} >
                    <GText>Signup</GText>
                    <Image
                        style={style.tinyLogo}
                        source={require('../../assets/arrow2.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}

                    onPress={SigninHandler} >
                    <GText>Login</GText>
                    <Image
                        style={style.tinyLogo}
                        source={require('../../assets/arrow1.png')} />
                </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=> navigation.navigate("Forget")}>
                    <GText style={{color: '#000', fontSize:16, textDecorationLine: "underline"}}>Forget Password</GText>
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

export default Signin
