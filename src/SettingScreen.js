import * as React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,Image
} from 'react-native';
import ProfileItem from '../component/ProfileItem';
import Icon from '../component/Icon';
import Demo from '../Data/demo';
import {CustomHeader} from './CustomHeader'
import { MainHeader } from './MainHeader';


export function SettingScreen({ navigation }) {
 

  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={styles.bg}
    >
      <MainHeader
        title="Sexee Date"


      />
      <ScrollView style={styles.containerProfile}>
       
        <ImageBackground source={image} style={styles.photo}>
        
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton} 
            onPress={() => navigation.navigate('Setting')}>
            {/* <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text> */}
            <Image source={require('../images/gear.png')}
              style={{ width: 30, height: 30 }}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}
            onPress={() => navigation.navigate('Chat')}>
            {/* <Text style={styles.iconButton}>
              <Icon name="chat" />
            </Text> */}
            <Image source={require('../images/message2.png')}
              style={{ width: 30, height: 30 }}></Image>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

