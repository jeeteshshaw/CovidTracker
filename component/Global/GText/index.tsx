import React, { useEffect } from 'react'
import {Text} from 'react-native'
 

const GText = ({style={}, children=''})=> {
    // useEffect(()=>{
    //     console.log(style, children);
    // })
    return (
        <Text style={[{color:'#ff0000'}, style]}> {children} </Text>
    )
  }



export {GText}