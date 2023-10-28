import React, { useState } from 'react';
import {View, Button, Text, StyleSheet, FlatList} from 'react-native';

const ColorScreen= () =>{
    const [colors, setColors] = useState([]);
    console.log(colors)
    return(
        <View>
            <Button title="add a color" onPress={()=>{
                setColors([...colors,randomRgb()])
            }}/>
            {/* <View style={{width:100, height:100,backgroundColor:randomRgb()}}/> */}
            <FlatList
            keyExtractor={item=>item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{width:100, height:100,backgroundColor:item}}/>
            }}
            />
        </View>
    )
}

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
export default ColorScreen;