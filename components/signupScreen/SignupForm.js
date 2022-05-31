import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'A username is required'),
    password: Yup.string().required().min(8, 'Your password has to have at least 8 characters')
})

const SignupForm = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
        <Formik
            initialValues={{email: '', username: '', password: ''}}
            onSubmit={values => {
                console.log(values);
                console.log('Your post was submitted successfully');
            }}
            validationSchema={SignupFormSchema}
            validateOnMount={true}
        >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
            <>
                <TextInput
                    style={[styles.inputField, 
                        {
                            borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
                        }
                        ]}
                    placeholderTextColor='#444'
                    placeholder='Phone number, username or email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}  />
                <TextInput
                    style={[styles.inputField, 
                        {
                            borderColor: values.username.length >= 2 || values.username.length == 0 ? '#ccc' : 'red'
                        }
                        ]}
                    placeholderTextColor='#444'
                    placeholder='Username'
                    autoCapitalize='none'
                    textContentType='username'
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}  />
                <TextInput 
                    style={[styles.inputField,
                        {
                            borderColor: values.password.length >= 8 || values.password.length == 0 ? '#ccc' : 'red'
                        }]}
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}  />
                <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                    <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
                </View>
                <Pressable 
                    titleSize={20} 
                    style={styles.button(isValid)}
                    onPress={handleSubmit}
                    >
                    <Text style={styles.buttonText}>Sign up</Text>
                </Pressable>

                <View style={styles.signupContainer}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                        <Text style={{ color: '#6BB0F5' }}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </>
        )}
        </Formik>
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
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    }),
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

export default SignupForm