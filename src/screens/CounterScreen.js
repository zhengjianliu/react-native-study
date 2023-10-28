import React, { useState, useReducer } from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';



const reducer = (state,action) =>{
    switch(action.type){
        case 'increase':
            return {...state, counter: state.counter+action.payload}
        case 'decrease':
            return {...state, counter: state.counter-action.payload}
        default:
            return state;
    }
}

const CounterScreen= () =>{
    const [state,dispatch] = useReducer(reducer,{counter:0})
    const {counter} = state;
    return(
        <View>
            <Text>Current Count: {counter}</Text>
            <Button title="Increase" onPress={()=>{dispatch({type:'increase',payload:1})}}/>
            <Button title="Decrease" onPress={()=>{dispatch({type:'decrease',payload:1})}}/>
        </View>
    )
}

export default CounterScreen;