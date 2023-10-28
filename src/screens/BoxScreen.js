import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxScreen = () =>{
    return(
        <View style={style.viewStyle}>
            <Text style={style.textOneStyle}>Box 1</Text>
            <Text style={style.textTwoStyle}>Box 2</Text>
            <Text style={style.textThreeStyle}>Box 3</Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        height:200
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
        fontSize:18,
        ...StyleSheet.absoluteFillObject
    },
})

export default BoxScreen;