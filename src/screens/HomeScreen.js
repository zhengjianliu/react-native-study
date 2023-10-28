import React from "react";
import { Text, StyleSheet, Button, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  console.log(navigation)
  return(
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
      onPress={()=>navigation.navigate('Components')}
      title={"go to component"}
      />
      <Button
      title="Go to list"
      onPress={()=>navigation.navigate('List')}
      />
      <Button
      title="Go to Image"
      onPress={()=>navigation.navigate('Image')}
      />
      <Button
      title="Go to Counter"
      onPress={()=>navigation.navigate('Counter')}
      />
      <Button
      title="Go to Color"
      onPress={()=>navigation.navigate('Color')}
      />
      <Button
      title="Go to Square"
      onPress={()=>navigation.navigate('Square')}
      />
      <Button
      title="Go to TextScreen"
      onPress={()=>navigation.navigate('Text')}
      />
      <Button
      title="Go to BoxScreen"
      onPress={()=>navigation.navigate('Box')}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
