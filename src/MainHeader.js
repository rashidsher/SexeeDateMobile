import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
export function MainHeader({ title, isHome, navigation }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: '#ffffff',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                width: 50,
                height: 40,
                marginLeft: 100,
                marginRight: 10,
              }}
              source={require('../images/tinderlogo.png')}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{color: '#b71c1b', fontSize: 18, fontWeight: 'bold'}}>
            {title}
          </Text>
        </View>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{width: 30, height: 20}}
              source={require('../images/more.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View> */}
      </View>
    );
}

var styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'


    }
})