import React from 'react'
import { View, Text, TextInputBase, TextInput } from 'react-native'

const GInput = ({style={}, editable=true, keyboardType='default',placeholder='', value="", secureTextEntry=false, placeholderTextColor='#333', onChangeText=()=>{}}) => {
    const InputStyle={color: '#eee', fontSize: 16, backgroundColor:'#333', borderRadius: 20, padding: 10}

    return (
        
        <TextInput secureTextEntry={secureTextEntry} 
        placeholder={placeholder} 
        keyboardType={keyboardType} 
        editable={editable}   
        style={[InputStyle, style]} 
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        />
        
    )
}

export {GInput}
