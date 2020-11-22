import * as React from 'react';
import { Button, TextInput, View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { AuthContext } from './utils';
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { CustomHeader } from './CustomHeader'
export function DeleteAccount({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);
    const { container, TxtInput } = styles

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
        <CustomHeader title="Account Delete" navigation={navigation} />

        <View style={{marginTop: 30}}>
          <Image
            style={{width: 140, height: 140}}
            source={require('../images/logo.jpeg')}
          />
          {/* <Text style={{ color: '#b71c1b', fontSize: 30, fontWeight: 'bold'}}>
            GT Force
          </Text> */}
        </View>

        <ScrollView>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              marginLeft: 20,
              marginTop: 20,
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            To Delete your account conform your country cod eand enter Phone
            Number.{' '}
          </Text>

          <View style={{alignItems: 'center', marginTop: 30}}>
            <TextInput
              placeholder="Country Name"
              style={styles.emailbox}
              keyboardType="default"
              autoCorrect={false}
              placeholderTextColor="white"
              autoCapitalize="none"
            />
          </View>

          <View style={{alignItems: 'center'}}>
            <TextInput
              placeholder="Phone Number"
              style={styles.emailbox}
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="white"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 10,
              width: 300,
              height: 50,
              maxWidth: 300,
              minWidth: 220,
              maxHeight: 150,
              minHeight: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Button
                title="Delete Account"
                color="#ffd700"
                accessibilityLabel="Tap on Me"
                borderWidth="2"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}

var styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: '#000000',
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
        borderColor: '#ffd700',
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 2,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        paddingLeft: 10,
        color: 'white',
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
        color: '#ffd700',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    bottom: {
        fontSize: 15,
        color: '#ffd700',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
});