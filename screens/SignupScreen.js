import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm';

const INSTAGRAM_LOGO = "../assets/instagram_logo.png";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require(INSTAGRAM_LOGO)} />
        </View>

        <SignupForm navigation={navigation} />
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

export default SignupScreen