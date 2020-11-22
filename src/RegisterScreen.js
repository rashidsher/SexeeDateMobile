import * as React from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,Image, TouchableWithoutFeedback
} from 'react-native';
import {  TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export function RegisterScreen({navigation}) {
  const [username, setUsername] = React.useState('');
   const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
   const [reEnter, setReEnter] = React.useState('');

 
  const {container, TxtInput} = styles;

//   register = (username,password) =>{
//       console.log('You Can handle api register from here')
//   };

  return (
    <View style={styles.contanier}>
      <View style={{marginTop: 80}}>
        <Image
          style={{width: 300, height: 200}}
          source={require('../images/tinderlogo.png')}
        />
        {/* <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
            GT Force
          </Text> */}
      </View>

      <View>
        <Text style={styles.heading}>Register</Text>
      </View>
      <ScrollView>
        <View>
          <TextInput
            placeholder="USERNAME"
            style={styles.emailbox}
            keyboardType="default"
            autoCorrect={false}
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            placeholder="PHONE"
            style={styles.emailbox}
            keyboardType="default"
            autoCorrect={false}
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            placeholder="EMAIL ADDRESS"
            style={styles.emailbox}
            keyboardType="default"
            autoCorrect={false}
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
        </View>

        <View>
          <TextInput
            placeholder="CONFORM PASSWORD"
            style={styles.emailbox}
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="gray"
            secureTextEntry
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            width: 300,
            height: 50,
            maxWidth: 300,
            minWidth: 220,
            maxHeight: 150,
            minHeight: 40,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            {/* <Button
              title="Register"
              color="#b71c1b"
              accessibilityLabel="Tap on Me"
              borderWidth="2"
            /> */}
            <Text
              style={{
                backgroundColor: '#b71c1b',
                width: 300,
                height: 40,
                borderRadius: 50,
                fontSize: 22,
                color: '#f7f7f7',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.bottom}>Already have an account ?Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

var styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 50,
    borderColor: '#b71c1b',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  lock: {
    height: 130,
    width: 130,
    marginLeft: 90,
    marginTop: 50,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  emailbox: {
    borderColor: '#b71c1b',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    paddingLeft: 10,
    color: 'black',
  },
  sendopt: {
    borderRadius: 5,
    marginTop: 20,
    fontSize: 20,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd700',
  },
  heading: {
    fontSize: 30,
    color: '#b71c1b',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bottom: {
    fontSize: 15,
    color: '#b71c1b',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
