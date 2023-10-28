import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () =>{
    const [name, setName] = useState('')
    let errorMessgae = <Text>Password must be more than 5 characters.</Text>
    return(
        <View>
            <Text>Enter you name:</Text>
            <TextInput 
            style={style.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={newValue=>setName(newValue)}
            />
            {name.length <= 5 && errorMessgae}
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        margin:15,
        borderWidth:1,
    }
})

export default TextScreen;