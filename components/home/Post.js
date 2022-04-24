import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/material-outlined/48/000000/filled-like.png'
  },
  {
    name: 'Comment',
    imageUrl: 'https://img.icons8.com/material-outlined/48/000000/speech-bubble--v1.png'
  },
  {
    name: 'Send',
    imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-instagram-flatart-icons-outline-flatarticons.png'
  },
  {
    name: 'Save',
    imageUrl: 'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png'
  }
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30, marginTop: 10 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post}/>
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
      </View>
    </View>
  );
}

const PostHeader = ({ post }) => (
  <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{uri: post && post.profile_picture}} style={styles.story}/>
      <Text style={{ marginLeft: 5, fontWeight: '700' }}>{post && post.user}</Text>
    </View>

    <Text style={{ fontWeight: '900' }}>...</Text>  
  </View>
)

const PostImage = ({ post }) => (
  <View
    style={{
      width: '100%',
      height: 450
    }}
  >
    <Image
      source={{ uri: post && post.imageUrl }}
      style={{ height: '100%', resizeMode: 'cover' }}
    />
  </View>
)

const PostFooter = () => (
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
  
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
     <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#E51A70'
  },
  footerIcon: {
    width: 33,
    height: 33
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between'
  }
})
export default Post;