import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import FadedView from './utils/FadedView'

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
            }}
            blurRadius={props.shadowBlurRadius}
        />
        <FadedView
          color={props.shadowBackgroundColor}
          height={135}
          imageHeight={props.imageHeight}>
        </FadedView>
      </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    image:{
      zIndex:1,
      opacity:1
    },
    shadow_container:{
      position:'absolute',
      zIndex:0,
      bottom:0,
    }
  })
  
  ImageBlurShadow.defaultProps = {
      imageWidth: 200,
      imageHeight: 200,
      shadowBlurRadius: 38,
      shadowOffset: 34
    }
  
  export default ImageBlurShadow