import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function Login({navigation}) {
  const [model, setModel] = useState({});
  let [loader, setloader] = useState(false);
  let loginUser = () => {
    console.log(model);
    setloader(true);
    auth()
      .signInWithEmailAndPassword(model.email, model.password)
      .then(success => {
        database()
          .ref(`Users/${success.user.uid}`)
          .once('value')
          .then(res => {
            if (res.val().Category === 'Customer') {
              navigation.navigate('Home', res);
            }
           else if (res.val().Category == 'Rider') {
              navigation.navigate('Rider');
            }
            setloader(false);
          })
          .catch(er => {
            setloader(false);
            console.log(er);
          });
        console.log('35', success);
      })
      .catch(err => {
        setloader(false);
        console.log(err);
      });
  };
  return (
    <>
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{position: 'relative', top: 100, padding: 10, marginLeft: 10}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 45,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </View>

        <View style={{position: 'relative', top: 180}}>
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <CSTextField
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={e => setModel({...model, email: e})}
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <CSTextField
              placeholder="Password"
              placeholderTextColor="black"
              onChangeText={e => setModel({...model, password: e})}
            />
          </View>
          <View style={{padding: 13, position: 'relative', left: 15}}>
            <Text style={{color: 'black', fontWeight: '600'}}>
              Forgot Password?
            </Text>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <CSButton
              label={'Login'}
              loader={loader}
              onPress={loginUser}
              color={'white'}
              bgcolor={'black'}
            />
          </View>
          <View style={{alignItems: 'center', position: 'relative', top: 100}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontSize: 16}}>
                Don't have an account
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '900',
                  paddingLeft: 8,
                }}
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;
