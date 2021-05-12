import React from 'react'
import {SafeAreaView,ScrollView,StyleSheet,Text,View} from 'react-native'
import Slider from '@react-native-community/slider'
import ImageBlurShadow from './src'

class App extends React.Component {

  state = {
    blur_value: 12,
  };
 
  render() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            marginBottom: 25
          }}>
        <View style={styles.header}>
          <Text style={styles.header_text}>react-native-image-blur-shadow</Text>
        </View>

        <ImageBlurShadow
          style={styles.img}
          source={require('./src/assets/spiderman.jpg')}
          imageWidth={220}
          imageHeight={220}
          imageBorderRadius={22}
          shadowOffset={48}
          shadowBlurRadius={18}
          shadowBackgroundColor={'#ffffff'}
        />
       

        <ImageBlurShadow
          style={styles.img}
          source={require('./src/assets/car.jpg')}
          imageWidth={200}
          imageHeight={200}
          imageBorderRadius={22}
          shadowOffset={42}
          shadowBlurRadius={this.state.blur_value}
          shadowBackgroundColor={'#ffffff'}
        />

      <View style={styles.slider_style_con}>
        <Slider
          style={{width:'50%'}}
          step={1}
          minimumValue={1}
          maximumValue={50}
          value={this.state.blur_value}
          onSlidingComplete={blur_value => this.setState({blur_value: blur_value})}/>
        <Text>Blur Radius {this.state.blur_value}</Text>
      </View>
        

      <ImageBlurShadow
          style={styles.img}
          source={require('./src/assets/landscape.png')}
          imageWidth={250}
          imageHeight={200}
          imageBorderRadius={12}
          shadowBlurRadius={12}
          shadowBackgroundColor={'#ffffff'}
        />

      <ImageBlurShadow
          style={styles.img}
          source={require('./src/assets/one.jpg')}
          imageWidth={265}
          imageHeight={200}
          imageBorderRadius={0}
          shadowOffset={58}
          shadowBlurRadius={10}
          shadowBackgroundColor={'#ffffff'}
        />

        <View style={styles.footer}>
          <Text>Developed By: virtualvivek</Text>
          <Text>Github: virtualvivek/react-native-image-blur-shadow</Text>
          <Text>Supports Android, iOS, and Web</Text>
        </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
        }
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#f7f7fa',
    padding: 15,
    elevation: 2,
    alignItems:'center',
    marginBottom: 5
  },
  header_text:{
    fontSize: 16
  },
  img:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 15
  },
  slider_style_con:{
    display:'flex',
    flexDirection:'row',
    margin:10,
    alignItems:'center',
    justifyContent:'center'
  },
  footer:{
    textAlign:'center',
    marginTop:40,
    marginStart:15,
    marginRight:15,
    alignItems:'center'
  }
});

export default App;
