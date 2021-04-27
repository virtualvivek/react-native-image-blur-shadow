import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ImageBlurShadow = (props) => {

  return (
    <View style={props.style}>
        <Image
            source={props.source}
            style={[{
                resizeMode: props.imageResizeMode,
                width: props.imageWidth,
                height: props.imageHeight,
                borderRadius: props.imageBorderRadius,
                marginBottom: props.shadowOffset
                },
                styles.image
              ]}
        />
      <View style={[
          {width: props.imageWidth}],
          styles.shadow_container}>
        <Image
            source={props.source}
            style={{
                resizeMode:'cover',
                width: props.imageWidth,
                height: props.imageHeight,
                opacity:1 
            }}
            blurRadius={props.shadowBlurRadius}
        />
        <Image 
          source={require('./assets/blur.png')}
          style={{
            position:'absolute',
            width:props.imageWidth,
            height:'80%',
            bottom:0,
            left:0,
            resizeMode:'stretch',
            tintColor: props.shadowBackgroundColor
          }}
          />
      </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    image:{
      zIndex:1
    },
    shadow_container:{
      position:'absolute',
      zIndex: 0,
      bottom: 0,
    }
  })
  
  ImageBlurShadow.defaultProps = {
      imageWidth: 200,
      imageHeight: 200,
      shadowBlurRadius: 38,
      shadowOffset: 52,
      shadowBackgroundColor: '#ffffff'
    }
  
  export default ImageBlurShadow