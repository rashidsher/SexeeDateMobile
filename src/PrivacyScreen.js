import * as React from 'react';
import {
    AsyncStorage,
    View,
    Button,
    Text,
    StyleSheet,
    SafeAreaView, Image, _Text
} from 'react-native';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from '../assets/styles';
import { CustomHeader } from './CustomHeader'


export function PrivacyScreen({ navigation }) {
    const { container } = styles;

    return (
      <SafeAreaView style={styles.bg}>
        <CustomHeader title="Privacy" navigation={navigation} />
        <View>
          <Text
            style={{
              color: '#b71c1b',
              fontSize: 18,
              marginLeft: 20,
              marginTop: 20,
              paddingLeft: 10,
            }}>
            Who Can See my personal info
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 13,
              marginLeft: 20,
              marginTop: 10,
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            If You don't share your Last Seen,you won't be able to see other
            people 's Last Seen
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableWithoutFeedback>
            <Text style={{color: '#ffd700', fontSize: 18, marginLeft: 20}}>
              {' '}
              Last Seen
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 5,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              EveryOne
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableWithoutFeedback>
            <Text style={{color: '#ffd700', fontSize: 18, marginLeft: 20}}>
              {' '}
              Profile info
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 5,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              EveryOne
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableWithoutFeedback>
            <Text style={{color: '#ffd700', fontSize: 18, marginLeft: 20}}>
              {' '}
              About
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 5,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              EveryOne
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableWithoutFeedback>
            <Text style={{color: '#ffd700', fontSize: 18, marginLeft: 20}}>
              {' '}
              Groups
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 5,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              EveryOne
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
}

