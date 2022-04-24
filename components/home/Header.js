import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image 
          style={styles.logo} 
          source={require('../../assets/instagram_logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/external-becris-lineal-becris/64/000000/external-add-mintab-for-ios-becris-lineal-becris.png' }}
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/material-outlined/48/000000/filled-like.png' }}
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/ios/50/000000/facebook-messenger--v2.png' }}
            style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%'
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    resizeMode: 'contain',
    width: 30,
    height: 30
  }
})

export default Header;