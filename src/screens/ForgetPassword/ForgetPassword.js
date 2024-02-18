import React, { useState } from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import Logo from '../../../assets/Forgot password-bro.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useForm ,Controller} from 'react-hook-form';

function forgetPassword({ navigation }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data)=>{
    console.log(data)
  }
  console.log(errors)
  const [email,setEmail] = useState('')
 
  const onForgetPasswordPressed = ()=>{
    console.warn('forget password')
  }

  return (
    <View style={styles.root}> 
        <Image source={Logo} style ={styles.logo}  />
        <CustomInput name="email" placeholder="Email" control={control}   rules={{required: 'Email is required',
                 pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
               }}/>
       {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
        <CustomButton onPress={handleSubmit(onSubmit)} text='Send'/>
        <CustomButton onPress={() => navigation.push('Signin')}  text="Back to Sign in " type="TER" fgColor='gray'/>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,


    },
    logo: {
        width: 200,
        height:200,
    },
    error: {
      alignSelf:'stretch',
      color:'#D63484',
    }
})

export default forgetPassword
