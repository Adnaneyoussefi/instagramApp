import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <FormikPostUploader navigation={navigation} />
    </View>
  )
}

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
            <Image 
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/external-those-icons-fill-those-icons/96/000000/external-left-arrows-those-icons-fill-those-icons.png'}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 30
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default AddNewPost