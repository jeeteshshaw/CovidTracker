import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity,  } from 'react-native-gesture-handler'
import { GButton } from '../../component/Global/GButton'
import { GText } from '../../component/Global/GText'
import { AuthContext } from '../../Service'
import { config } from '../../Service/Firebase/Config'

export default function VerifyEmailScreen({navigation, route}) {
    const {UserContext, setUserContext} = useContext(AuthContext);
    // const [Verified, setVerified] = useState(config.auth().currentUser.emailVerified);
    

    useEffect(() => {
        console.log("effect on");
        console.log(UserContext);
        setTimeout(()=> navigation.navigate('Home'), 5000);
    });

    return (
        <View style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <View style={{width: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Image
                        style={{width: '100%', height: 200}}
                        source={require('../../assets/Mailbox.png')} />
            </View>
           <View style={{marginVertical: 10}}>
           <GText 
           style={{fontSize: 26, color: '#333', fontStyle: 'italic'}}
           >Verify Email has been sended</GText>
            {/* <Text></Text> */}
            <GText 
            style={{fontSize: 12, color: 'grey', textAlign:'center', marginTop: 10, fontStyle: 'italic'}}
            >You will be sended to home page within 5 Sec</GText>
           </View>
        </View>
    )
}
