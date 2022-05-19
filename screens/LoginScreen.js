import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/loginForm';

const INSTAGRAM_LOGO = "../assets/instagram_logo.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require(INSTAGRAM_LOGO)} />
        </View>
        <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    }
});

export default LoginScreen