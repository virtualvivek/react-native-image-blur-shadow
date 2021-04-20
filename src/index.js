import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import FadedView from './utils/FadedView'

const ImageBlurShadow = (props) => {

    const [didLoad, setLoad] = useState(false)
  
      const renderLoader = () => {
        return  <View>
                  <Text>Loading</Text>
                </View>
      }
  
      const handleOnLoad = () => {
        setLoad(true)
      }
  
    return (
      <View>

        <View style={styles.blur_shadow_container}>
        <Image
            source={props.source}
            style={{
                objectFit: props.objectFit,
                width: props.width,
                height: props.height,
            }}
            // onLoad={() => setLoad(true)}
            onLoad={() => { handleOnLoad(); props.onLoad() }}
        />
        <FadedView color="#ecf0f1" height={120}></FadedView>
        </View>
  
            {props.isLoading ? renderLoader() : ""}
            {didLoad ? "" : renderLoader()}
      </View>
    )
  }

  const styles = StyleSheet.create({
  
    blur_shadow_container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8
    },
  
  })
  
  ImageBlurShadow.defaultProps = {
      isLoading: false,
      objectFit: 'cover',
      onLoad: () => {}
    }
  
  export default ImageBlurShadow