import { View, Text, Button, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
        <TextInput
            style={styles.inputField}
            placeholderTextColor='#444'
            placeholder='Phone number, username or email'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true} />
        <TextInput 
            style={styles.inputField}
            placeholderTextColor='#444'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password' />
        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
            <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
        </View>
        <Pressable 
            titleSize={20} 
            style={styles.button}
            onPress={() => console.log('click me')}
            >
            <Text style={styles.buttonText}>Log in</Text>
        </Pressable>

        <View style={styles.signupContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
                <Text style={{ color: '#6BB0F5' }}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '90%'
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    },
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50
    }
})

export default LoginForm