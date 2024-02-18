import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

function CustomButton({onPress,text,type='PRIMARY',fgColor}) {
  return (
    <Pressable onPress={onPress} style={[styles.container , styles[`container_${type}`] ]}>
      <Text style={[styles[`text_${type}`], fgColor ? {color: fgColor}:{}]}>{text}</Text>
    </Pressable>
  )
}
 const styles =  StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        marginTop:20,
    },
    container_PRIMARY: {
        backgroundColor:'#C1F2B0',

    },
    container_GOOGLE: {
        backgroundColor:'#FFF0F5',

    },
    container_TER: {
        color:'black',

    },
    text_PRIMARY: {
        color:'white',
        fontWeight: 'bold'
    },
    text_GOOGLE: {
        color:'#FBA1B7',
        fontWeight: 'bold'
    },
   
  


 })

export default CustomButton
