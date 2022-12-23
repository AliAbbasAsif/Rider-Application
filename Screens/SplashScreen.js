import React, {useEffect} from 'react';
import {ActivityIndicator, Image, ImageBackground, Text, View} from 'react-native';

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Login')
  }, 3000);
  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/3f/67/61/3f676172831bf44dfeda60f14b43366e.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1, resizeMode: 'cover'}}>
          <View
            style={{width: '80%', padding: 20, marginTop: 150, marginLeft: 10}}>
            <Text style={{color: 'white', fontWeight: '800', fontSize: 40}}>
              Premium Car Rental App.
            </Text>
          </View>
          <View style={{alignItems:'center',width:'100%',position:'relative',top:300}}>
            {/* <Image
              source={{
                uri: 'https://thumbs.gfycat.com/ZealousFineHochstettersfrog-size_restricted.gif',
              }}
              style={{width: 100, height: 100}}
            /> */}
            <ActivityIndicator size={80} color='white' />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default SplashScreen;
