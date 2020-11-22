import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
export function ChatHeader({ title, isHome, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#b71c1b',
      }}>
      {isHome ? (
        <View
          style={{
            flex: 1,

            justifyContent: 'center',
            marginLeft: 5,
          }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../images/menuicon.png')}
            resizeMode="contain"
          />
        </View>
      ) : (
          <TouchableOpacity
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              marginLeft: 5,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../images/return.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

        )}
      <View
        style={{
          

          justifyContent: 'center',
        }}>
      <Image
        style={{ 
    height: 50,
    width: 50,
    borderRadius: 50/2,
      borderWidth: 2,
    borderColor: "white"}}
        source={require('../images/08.jpg')}
        resizeMode="contain"
      />
      </View>
      <View
        style={{
          flex: 1.5,
fontSize:20,
          justifyContent: 'center',
        }}>
        <Text style={styles.Text}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight:10
        }}>
        <TouchableOpacity>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../images/film.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginLeft: 20,
          marginRight: 30,
        }}>
        <TouchableOpacity>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../images/phone.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
{/* 
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',

        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{ width: 30, height: 20 }}
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
    
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginLeft:10
   


  }
})