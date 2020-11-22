import * as React from 'react';
import {Button, TextInput, View,StyleSheet,ScrollView,Image,Text} from 'react-native';
import {AuthContext} from './utils';
import {TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native-gesture-handler';

export  function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);
  const {container,TxtInput}= styles

  return (
    // <View style={styles.container}>
    //   <TextInput
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={setUsername}
    //     style={styles.TxtInput}
    //   />
    //   <TextInput
    //     placeholder="Password"
    //     value={password}
    //     onChangeText={setPassword}
    //     secureTextEntry
    //     style={styles.TxtInput}
    //   />
    //   <Button title="Sign in" onPress={() => signIn({username, password})} />
    //   <Button title="Register" onPress={() => navigation.navigate('Register')} />
    // </View>
    <View style={styles.contanier}>
      <View style={{marginTop: 80}}>
        <Image
          style={{width: 300, height: 200}}
          source={require('../images/tinderlogo.png')}
        />
        {/* <Text style={{ color: '#ffd700', fontSize: 30, fontWeight: 'bold'}}>
            GT Force
          </Text> */}
      </View>

      <ScrollView>
        <View>
          <Text style={styles.heading}>Login</Text>
        </View>

        <View>
          <TextInput
            placeholder="User Email"
            style={styles.emailbox}
            keyboardType="default"
            autoCorrect={false}
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
        </View>

        <View>
          <TextInput
            placeholder="password"
            style={styles.emailbox}
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            placeholderTextColor="gray"
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.bottom}>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback
            onPress={() => signIn(username, password)}>
            {/* <Button
              title="Login"
              color="#b71c1b"
              accessibilityLabel="Tap on Me"
              borderWidth="20"
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
              Login
            </Text>
          </TouchableWithoutFeedback>
          <Text
            style={{
              width: 300,
              height: 40,

              fontSize: 18,
              color: 'gray',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            or
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
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
          </TouchableWithoutFeedback>
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
    borderColor: '#ffd700',
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
    backgroundColor: '#1e474c',
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
    alignItems:'flex-end',
    textAlign:'right',
   marginLeft:10,marginRight:10,
    marginTop:5,
    fontFamily:'boston'
  },
});