import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import CardItem from '../component/CardItem';
import Icon from '../component/Icon';
import Demo from '../Data/demo';
import styles from '../assets/styles';
import { MainHeader } from './MainHeader';
import { TouchableHighlight } from 'react-native-gesture-handler';

export function More({navigation}) {
 

    return (
      <SafeAreaView style={styles.bg}>
        {/* <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>
          <TouchableOpacity>
            <Image
              source={require('../images/more.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View> */}
        <MainHeader title="Sexee Date" />

        <View style={styles.containerMatches}>
          <ScrollView>
            <View style={styles.top} />

            <FlatList
              numColumns={2}
              data={Demo}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('More Detail')}>
                  <CardItem
                    image={item.image}
                    name={item.name}
                    status={item.status}
                    variant
                  />
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}
