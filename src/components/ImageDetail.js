import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const ImageDetail = ({item}) =>{
    return(
        <View>
            <Image source={item.imageSource}/>
            <Text>{item.title}</Text>
            <Text>{item.score}</Text>
        </View>
    )
}

const style = StyleSheet.create({

})

export default ImageDetail;