import React, { useState } from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import Logo from '../../../assets/Reset password-pana.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
function resetPassword({ navigation }) {
    const [newPassword,setNewPassword] = useState('')
    const [newPasswordConfirm,setNewPasswordConfirm] = useState('') 
  const onResetPassword = ()=>{
    console.warn('forget password')
  }

  return (
    <View style={styles.root}> 
        <Image source={Logo} style ={styles.logo} resizeMethod='contain' />
        <CustomInput secureTextEntry = {true} placeholder= "New Password" value={newPassword} setValue={setNewPassword} />
        <CustomInput secureTextEntry = {true} placeholder= "Confimr New Password " value={newPasswordConfirm} setValue={setNewPasswordConfirm} />  
        <CustomButton onPress={onResetPassword} text='Submit'/>
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
})

export default resetPassword
