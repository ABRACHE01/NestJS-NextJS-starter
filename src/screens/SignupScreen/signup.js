import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm, Controller } from 'react-hook-form';
import { signupfn } from '../../services/auth';
import { saveUserData } from '../../services/firebaseDB';

function signup({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (errors) => {
    console.log(errors)

  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const goToSignIn=() => navigation.push('Signin')

  const handleSignUp = async () => {
    console.log('clicked');

    try {
      // Call the signup function to create a new user with email and password
      const user = await signupfn(email, password);

      if (user) {
        const id = user.uid;
        // Call the function to store additional user data in Firestore
        await saveUserData(id, email, password);
        console.log('Signup successful');
        goToSignIn()
      }
    } catch (error) {
      console.error('Signup error:', error);
      // Handle errors appropriately, such as displaying an error message to the user
    }
  };

  const onSignInPressed = () => {
    console.warn('sign in');
  };

  const onForgetPasswordPressed = () => {
    console.warn('forget password');
  };

  const onSignInWithGooglePressed = () => {
    console.warn('Sign in with google');
  };

  const onTermOfUsePressed = () => {
    console.warn('onTermOfUsePressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        name="username"
        placeholder="User Name"
        control={control}
        value={username}
        // onChange={username}
        onChangeText={(text) => setUsername(text)}
        rules={{
          required: 'User name is required',
          minLength: {
            value: 4,
            message: 'User name should be at least 4 characters',
          },
        }}
      />
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
  <CustomInput
      name="email"
      placeholder="Email"
      control={control}
      value={email}
      onChange={(text)=>setEmail(text)}
      onChangeText={(text) => setEmail(text)}
      rules={{
        required: 'Email is required',
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: 'Invalid email address',
        },
      }}
    />
    {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <CustomInput
        secureTextEntry={true}
        name="password"
        placeholder="Password"
        control={control}
        value={password}
        onChangeText={(text) => setPassword(text)}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 5,
            message: 'Password should be at least 5 characters',
          },
        }}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <CustomInput
        secureTextEntry={true}
        name="passwordrepeat"
        placeholder="Password Repeat"
        control={control}
        rules={{
          required: 'Password Repeat is required',
          minLength: {
            value: 5,
            message: 'User name should be at least 5 characters',
          },
        }}
      />
      {errors.passwordrepeat && <Text style={styles.error}>{errors.passwordrepeat.message}</Text>}

      <CustomButton onPress={handleSignUp} text="Register" />
      <Text style={styles.text}>
        By registering you confirm that you accept{' '}
        <Text style={styles.link} onPress={onTermOfUsePressed}>
          term of use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          privacy policy</Text>
      </Text>
      <CustomButton onPress={onSignInWithGooglePressed} text="Sign in With Google" type="GOOGLE" />
      <CustomButton onPress={() => navigation.push('Signin')} text="Have an account ? Sign in " type="TER" fgColor="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#99BC85',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 30,
  },
  link: {
    color: '#FFBB64',
  },
  error: {
    alignSelf: 'stretch',
    color: '#D63484',
  },
});

export default signup;