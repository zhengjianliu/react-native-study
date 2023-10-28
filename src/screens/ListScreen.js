import React from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () =>{
    let friends = [
        {name:"Friend #1",age:'50'},
        {name:"Friend #2",age:'10'},
        {name:"Friend #3",age:'23'},
        {name:"Friend #4",age:'23'},
        {name:"Friend #5",age:'66'},
        {name:"Friend #6",age:'75'},
        {name:"Friend #7",age:'35'},
        {name:"Friend #8",age:'13'},
        {name:"Friend #9",age:'18'},
    ]
    return(
        <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend)=>friend.name}
        data={friends} 
        renderItem={({item})=>{
            return <Text style={style.textStyle}>{item.name} - Age:{item.age}</Text>
        }}/>
    )
}

const style = StyleSheet.create({
    textStyle:{
        marginVertical:50,
    }
})

export default ListScreen;