import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CSButton from '../Components/CSButton';
import CSDropDown from '../Components/CSDropDown';
import CSTextField from '../Components/CSTextField';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function SignUp({navigation}) {
  const [model, setModel] = useState({});
  let [loader, setloader] = useState(false);
  const [error, seterror] = useState('');
  let signupuser = () => {
    setloader(true);
    console.log(model);
    auth()
      .createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res);
        console.log(res.user.uid);
        database()
          .ref(`Users/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('Login', res.user.uid);
            setloader(false);
          })
          .catch(dbError => {
            console.log(dbError);
            setloader(false);
          });
      })
      .catch(err => {
        // seterror(err)
        console.log(err);
        setloader(false);
      });
  };
  return (
    <>
      <View>
        <ScrollView>
          <View style={{padding: 10, marginLeft: 18, marginVertical: 40}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '900',
                fontSize: 45,
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
          </View>

          <View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="UserName"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, userName: e})}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSDropDown
                data={['Rider', 'Customer']}
                label="Select category"
                onSelect={(selectedItem, index) => {
                  setModel({...model, Category: selectedItem});
                  // console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
              />
            </View>
            {model.Category == 'Rider' ?( <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="National Identity"
                placeholderTextColor="black"
                keyboardType="phone-pad"
                onChangeText={e => setModel({...model, identitynumber: e})}
              />
            </View>) : null }
            
           
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Phone Number"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, phonenumber: e})}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Email"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, email: e})}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, password: e})}
              />
            </View>
          </View>
        </ScrollView>
        <View>
          <View style={{paddingHorizontal: 20, paddingTop: 16}}>
            <CSButton
              label={'SignUp'}
              loader={loader}
              color={'white'}
              bgcolor={'black'}
              onPress={signupuser}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row',marginTop:16}}>
              <Text style={{color: 'black', fontSize: 16}}>
                Already have an account
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '900',
                  paddingLeft: 8,
                }}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default SignUp;
