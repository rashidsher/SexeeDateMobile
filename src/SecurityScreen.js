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


export function SecurityScreen({ navigation }) {
    const { container } = styles;

    return (
      <SafeAreaView style={styles.bg}>
        <CustomHeader title="Security" navigation={navigation} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../images/logo.jpeg')}
            style={{width: 140, height: 140}}
          />
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              marginLeft: 20,
              marginTop: 20,
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            Your messages and calls are secured with end-to-end encryption
            ,which means GTForce and third parties can't read or listen to
            me.{' '}
          </Text>
          <Text style={{color: '#b71c1b', fontSize: 18, marginTop: 20}}>
            {' '}
            Show Security Notifications
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              marginLeft: 20,
              marginTop: 20,
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            Turn on this setting to received notifications when a contect's
            security code has changed.Your massages and calls are encrypted
            regardless of this setting.{' '}
          </Text>
        </View>
      </SafeAreaView>
    );
}

