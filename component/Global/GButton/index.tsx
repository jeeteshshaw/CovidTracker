import React from 'react'
import { View,  Button } from 'react-native'

const GButton = ({style={}, children, color='', onPress=()=>{}}) => {
  

    return (
        
           <View style={style}>
                <Button
            title={(typeof children).toLowerCase() == 'string'? children:()=>(children)}
            color={color}
            onPress={onPress}
            // onPress={()=> AlertButton("Learn more about this purple button")}
            accessibilityLabel="Learn more about this purple button"
            
        />
           </View>
        
    )
}

export {GButton}
