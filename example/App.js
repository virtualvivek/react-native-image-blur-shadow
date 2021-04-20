import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ImageBlurShadow from './src'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="#f7f7fa"/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            display: 'flex',
            flexDirection: 'column'
          }}>
        <View style={styles.header}>
          <Text style={styles.header_text}>react-native-image-blur-shadow</Text>
        </View>    

        <ImageBlurShadow
          style={styles.img}
          source={require('./src/assets/captain.jpg')}
          imageWidth={220}
          imageHeight={220}
          imageBorderRadius={22}
          shadowOffset={38}
          shadowBlurRadius={48}
          shadowBackgroundColor={'#ffffff'}
        />

        <ImageBlurShadow
          style={styles.img}
          source={require('./src/assets/download.jpg')}
          imageWidth={200}
          imageHeight={200}
          imageBorderRadius={22}
          shadowOffset={38}
          shadowBlurRadius={7}
          shadowBackgroundColor={'#ffffff'}
        />
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#f7f7fa',
    padding: 10,
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
  }
});

export default App;
