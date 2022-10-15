import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";

const ImageBlurShadow = (props) => {
  return (
    <View style={props.style}>
      <Image
        source={props.source}
        fadeDuration={props.imageFadeDuration}
        {...props}
        style={[{
            width: props.imageWidth,
            height: props.imageHeight,
            marginBottom: props.shadowOffset,
            resizeMode: props.imageResizeMode,
            borderRadius: props.imageBorderRadius,
            borderTopLeftRadius: props.imageBorderTopLeftRadius,
            borderTopRightRadius: props.imageBorderTopRightRadius,
            borderBottomLeftRadius: props.imageBorderBottomLeftRadius,
            borderBottomRightRadius: props.imageBorderBottomRightRadius,
            },
            styles.image
          ]}
      />
      <View style={[{width: props.imageWidth}, styles.shadow_container]}>
        <Image
          source={props.source}
          defaultSource={props.defaultProps}
          fadeDuration={props.shadowFadeDuration}
          style={{
              resizeMode: 'cover',
              width: props.imageWidth,
              height: props.imageHeight
          }}
          blurRadius={props.shadowBlurRadius}
        />
        <Image
          resizeMethod='auto'
          source={require('./assets/blur.png')}
          tintColor={props.shadowBackgroundColor}
          style={{
            width: '100%',
            aspectRatio: 1.8,
            resizeMode: 'cover',
            position: 'absolute',
            height: Platform.OS === 'web'? '55%': undefined,
            bottom: 0,
            left: 0,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    zIndex: 1
  },
  shadow_container:{
    position: 'absolute',
    bottom: 0,
    zIndex: 0
  }
})
  
ImageBlurShadow.defaultProps = {
  imageWidth: 200,
  imageHeight: 200,
  shadowOffset: 44,
  shadowBlurRadius: 18,
  shadowBackgroundColor: '#ffffff'
}
  
export default ImageBlurShadow;