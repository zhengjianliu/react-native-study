import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ScreenComponent = () =>{
    const hiThere = "Here is the ScreenComponent!"
    const Hi = <Text>Hi!</Text>;
    return(
        <View>
            <Text style={style.textStyle}>{hiThere}</Text>
            {Hi}
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 10,
    }
})


export default ScreenComponent;