import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return (
            <View key={index} style={styles.container}>
              <Image source={{ uri: story.image }} style={styles.story} />
              <Text>{story.user.length >= 10 ? story.user.slice(0, 9) + '...' : story.user}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#E51A70'
  }
})
export default Stories;