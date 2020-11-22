import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  AppRegistry,
  SafeAreaView,
} from 'react-native';
import flatlistData from '../Data/productsData';
import {ChatHeader} from './ChatHeader'
import styles from '../assets/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';



export function HomeDetail({navigation,title}) {
  
    return (
   <SafeAreaView style={styles.bg}>
     <ChatHeader navigation= {navigation} title = "Muhammad Rashid"></ChatHeader>
     <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Enter message"
            style={{borderColor: '#b71c1b',
    borderRadius: 30,
    marginTop: 540,
    borderWidth: 2,
    width: 330,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    lineHeight: 23,
    fontSize: 18,
    textAlignVertical: 'top',
    marginRight: 5,
    color: 'black',}}
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="gray"
            multiline={true}
          />
          {/* <Image
            source={require('../images/attach.png')}
            style={{width: 30, height: 30, marginTop: 410}}
          /> */}
          {/* <TouchableOpacity>
            <Image
              source={require('../images/camera1.png')}
              style={{ width: 40, height: 40, marginTop: 550, marginRight: 5 }}
            />
          </TouchableOpacity> */}
          <TouchableOpacity>
            <Image
              source={require('../images/send.png')}
              style={{ width: 50, height: 50, marginTop: 540 }}
            />
          </TouchableOpacity>
        </View>
        </ScrollView>
   </SafeAreaView>
    );
  }

