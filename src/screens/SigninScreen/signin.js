import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useForm ,Controller} from 'react-hook-form';
import Logo from '../../../assets/Pharmacist-bro.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { login } from '../../services/auth';
import { saveUserData } from '../../services/firebaseDB';
function Signin({ navigation} ) {
  const goToHome=() => navigation.push('Home')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = async () => {
    console.log('clicked');

    try {
      // Call the signup function to create a new user with email and password
      const user = await login(email, password);
        console.log('good');
        goToHome()
        return user
      }
     catch (error) {
      console.error('Signin error:', error);
      // Handle errors appropriately, such as displaying an error message to the user
    }
  };
  
console.log(errors)
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo}  />
      {/* <CustomInput name="username" placeholder="User Name" control={control}   rules={{required: 'User name is required',
                minLength: {
                  value: 4,
                  message: 'User name should be at least 4 characters',
                },
               }}/>
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>} */}
        <CustomInput
      name="email"
      placeholder="Email"
      control={control}
      value={{email}}
      onChangeText={text=>setEmail(text)}
      rules={{
        required: 'Email is required',
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: 'Invalid email address',
        },
      }}
    />
    {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <CustomInput name="password" placeholder="Password"    value={password}
      onChangeText={(text) => setPassword(text)} control={control} secureTextEntry 
       rules={{required: 'Password is required',
       minLength: {
         value: 5,
         message: 'Password should be at least 5 characters',
       },
      }}
      />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}


      <CustomButton onPress={handleSignIn} text="Sign in" />
      {/* <CustomButton onPress={handleSignIn} text="Sign in" /> */}

      <CustomButton
        onPress={() => navigation.push('ForgetPassword')}
        text="Forget Password"
        type="TER"
      />
      <CustomButton
        onPress={() => navigation.push('Signup')}
        text="Don't have an account? Create one "
        type="TER"
        fgColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  error: {
    alignSelf:'stretch',
    color:'#D63484',
  }
});

export default Signin;
