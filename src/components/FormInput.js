import React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function FormInput({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  ...rest
}){
  return(
   <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor='grey'
      name={name}
      value={value}
      placeholder={placeholder}
      style={styles.input}
    />
   </View>
  );  
};

const styles = StyleSheet.create({
  inputContainer:{
    margin:15  
  },
  input:{
    marginRight:10   
  }
});