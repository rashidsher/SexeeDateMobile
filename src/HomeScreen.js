import * as React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Image,
} from 'react-native';

import Message from '../component/Message';
import Icon from '../component/Icon';
import Demo from '../Data/demo';
import { AuthContext } from './utils'
import { MainHeader } from './MainHeader';
import { SafeAreaView } from 'react-native-safe-area-context';



export function ChatScreen({ navigation }) {
 

  return (
    <SafeAreaView style={styles.bg}>
      {/* <View style={styles.top}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Image
            source={require('../images/more.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View> */}
      <MainHeader title="Sexee Date" />

      <View style={styles.containerMessages}>
        <ScrollView>
          <View style={styles.top} />

          <FlatList
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
       
      </View>
    </SafeAreaView>
  );
}

