import React from 'react'
import { View,Text, TextInput, StyleSheet } from 'react-native'
// import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"

function CustomInput({onChangeText,control,rules={},name,placeholder,secureTextEntry}) {

  return (
    <View style={styles.container}>
      {/* <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        style={styles.input}/> */}

<Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value },fieldState:{error} }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            style={[styles.input,{borderBottomColor: error ? '#D63484': '#D9EDBF'}]}
            secureTextEntry={secureTextEntry}
          />
        )}
      />


    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FAF9F6',
        width:'100%',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:4,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 5,
        marginTop:10,
    },
    input: {

    }
})

export default CustomInput
