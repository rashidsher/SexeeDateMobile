import * as React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../component/CardItem';
import Icon from '../component/Icon';
import Demo from '../Data/demo';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../component/City';
import Filters from '../component/Filters';
import { MainHeader } from './MainHeader';



import { SafeAreaView } from 'react-native-safe-area-context';




export function MyOrder({navigation}) {

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

        <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          // ref={swiper => (this.swiper = swiper)}
        >
          {Demo.map((item, index) => (
            <Card key={index}>
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
      </SafeAreaView>
    );
  }

