import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen = () =>{
    const images = [
        {
            title:"forest",
            imageSource:require("../../assets/beach.jpg"),
            score:10,
        },
        {
            title:"beach",
            imageSource:require("../../assets/beach.jpg"),
            score:10,
        },
        {
            title:"mountain",
            imageSource:require("../../assets/mountain.jpg"),
            score:10,
        }
    ]
    return(
        <View>
            <FlatList
            keyExtractor={item=>item.title}
            data={images}
            renderItem={({item})=>{
                return <ImageDetail item={item}/>
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({

})

export default ImageScreen;