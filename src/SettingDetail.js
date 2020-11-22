import * as React from 'react';
import {
  AsyncStorage,
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,Image, _Text
} from 'react-native';
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../assets/styles';
import {CustomHeader} from './CustomHeader'
import { AuthContext } from './utils';
import { MainHeader } from './MainHeader';


export function SettingDetail({navigation}) {
  const {container} = styles;
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.bg}>
<MainHeader title="Sexee Date" />

     <View style={styles.backgroundTab}>
      <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.settingText}> Privacy</Text>
        </TouchableOpacity>
     </View>
      
      <View style={styles.backgroundTab}>
     <TouchableOpacity onPress={() => navigation.navigate('Security')}>
        <Text style={styles.settingText}> Security</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundTab}>
       <TouchableOpacity onPress={() => navigation.navigate('Delete')}>
     <Text style={styles.settingDelete}> Delete Account</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.backgroundTab}>
       <TouchableOpacity onPress={signOut}>
          <Text style={styles.settingText}> Logout</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

