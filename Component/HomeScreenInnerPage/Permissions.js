import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

export const Permissions =() =>{
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <ActivityIndicator size={100} color='orange'/>
        </View>
    )
}