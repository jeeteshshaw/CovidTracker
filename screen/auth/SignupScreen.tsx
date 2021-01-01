import React, { useContext, useRef, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { GInput } from '../../component/Global/GInput/index';
import { GText } from '../../component/Global/GText/index';
import { GButton } from '../../component/Global/GButton/index';
import { AuthContext } from '../../Service';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { config } from '../../Service/Firebase/Config';

function SignupScreen({ navigation, route }) {
    const [User, setUser] = useState({
        email: '',
        password: '',
        cpassword: ''
    });
    const {UserContext, setUserContext} = useContext(AuthContext)
    // const [Error, setError] = useState({
    //     email: '',
    //     password: '',
    // });
    // const Form = useRef(null)
    React.useEffect(() => {
        console.log(UserContext);
    }, [UserContext])
    const SignupFormHandler = async() => {
        try {
            const res = 
            await config.auth()
            .createUserWithEmailAndPassword(User.email, User.password);
            console.log(res);
            console.log(config.auth().currentUser);
            setUserContext(res);
            await config.auth().currentUser.sendEmailVerification();
            
            navigation.navigate('Verify', {email:User.email})
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
            {/* <AuthContext.Provider value={} /> */}
            <GText 
            style={{ color: '#000', fontSize: 24, marginVertical: 10 }}
            > Email </GText>
            <GInput
                placeholder='Type Email'
                keyboardType='email-address'
                placeholderTextColor='#eee'
                onChangeText={(e = '') => setUser({ ...User, email: e })}
                style={style.input} />
            <GText 
            style={{ color: '#000', fontSize: 24, marginVertical: 10 }}
            > Password </GText>
            <GInput
                placeholderTextColor='#eee'
                placeholder='Type Password'
                secureTextEntry style={style.input}
                onChangeText={(e = '') => setUser({ ...User, password: e })} />
            
            <GText 
            style={{ color: '#000', fontSize: 24, marginVertical: 10 }}
            > Confirm Password </GText>
            <GInput
                placeholderTextColor='#eee'
                placeholder='Type Password'
                secureTextEntry style={style.input}
                onChangeText={(e = '') => setUser({ ...User, cpassword: e })} />
            
            <View
                style={{ width: '100%', marginVertical: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}

                    onPress={SignupFormHandler} >
                    <GText>Signup</GText>
                    <Image
                        style={style.tinyLogo}
                        source={require('../../assets/arrow1.png')} />
                </TouchableOpacity>
            
            </View>
        </>
    )
}

export default SignupScreen

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