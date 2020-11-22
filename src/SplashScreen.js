import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View,Image,StyleSheet, ImageBackground} from 'react-native';

export function SplashScreen() {
  
  return (
    <ImageBackground
      style={{width: 420, height: 800}}
      source={require('../images/09.jpg')}
      >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.image}>
          <Image
            style={{width: 300, height: 200}}
            source={require('../images/tinderlogo.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

var styles = StyleSheet.create({
image:{
    justifyContent:'center',
    alignItems:'center'
}
})