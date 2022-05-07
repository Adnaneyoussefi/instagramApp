import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Divider } from 'react-native-elements';
import validUrl from 'valid-url';

const PLACEHOLDER_IMG = 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => {
        console.log(values);
        console.log('Your post was submitted successfully');
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
      >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View 
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Image 
              source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }} 
            />
            
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput 
                style = {{ fontSize: 20 }}
                placeholder='ًWrite a caption'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption} 
              />
            </View>

          </View>
          <Divider width={0.2} />
          <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style = {{ fontSize: 18 }}
            placeholder='Enter image url'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}  
          />
          {errors.imageUrl && (
            <Text style={{ color: 'red', fontSize: 10 }}>{ errors.imageUrl }</Text>
          )}

          <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader;