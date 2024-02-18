import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm ,Controller} from 'react-hook-form';

import Signin from './src/screens/SigninScreen';
import Signup from './src/screens/SignupScreen';
import ForgetPassword from './src/screens/ForgetPassword/ForgetPassword';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';




export default function App() {


  
   const Stack = createNativeStackNavigator();

  return (

   <NavigationContainer>
     <Stack.Navigator>
         <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} /> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        {/* <Stack.Screen name="api" component={Api} /> */}
     </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding:0,
    flex: 1,
    backgroundColor: 'white',
   
  },
 
  
});
