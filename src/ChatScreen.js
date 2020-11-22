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
import Message from '../component/CardItem';
import Icon from '../component/Icon';
import Demo from '../Data/demo';
import { AuthContext } from './utils'
import { CustomHeader } from './CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardItem from '../components/CardItem';




export function ChatScreen({ navigation }) {

    return (
         <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Matches</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            numColumns={2}
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
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
    </ImageBackground>
    );
}

