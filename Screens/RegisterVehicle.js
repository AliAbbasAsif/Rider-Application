import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import CSDropDown from '../Components/CSDropDown';
import CSTextField from '../Components/CSTextField';


function RegisterVehicle() {
  const [model, setModel] = useState({});
  let [loader, setloader] = useState(false);
  let [selected, setselected] = useState([]);
  return (
    <>
      <View>
        <ScrollView>
          <View style={{paddingVertical: 35}}>
            <View style={{paddingBottom: 27}}>
              <Text
                style={{
                  fontWeight: '800',
                  color: 'black',
                  fontSize: 30,
                  textAlign: 'center',
                }}>
                Register Your Vehicle
              </Text>
            </View>
            <View style={{paddingHorizontal: 22, paddingVertical: 7}}>
              <CSDropDown
                data={['Car', 'Bike', 'Rikshaw']}
                label="Select Vehicle Category"
                onSelect={(selectedItem, index) => {
                  setModel({...model, category: selectedItem});
                  // console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
              />
            </View>

            <View style={{paddingHorizontal: 22, paddingVertical: 7}}>
              <CSTextField
                placeholder="Vehicle Name eg: lexus-470"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, vehiclename: e})}
              />
            </View>
            <View style={{paddingHorizontal: 22, paddingVertical: 7}}>
              <CSTextField
                placeholder="Vehicle Registration number"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, registrationnumber: e})}
              />
            </View>
            <View style={{paddingHorizontal: 22, paddingVertical: 7}}>
              <CSTextField
                placeholder="Vehicle color"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, vehiclecolor: e})}
              />
            </View>
            <View style={{paddingHorizontal: 22, paddingVertical: 7}}>
              <CSTextField
                placeholder="No of Seats"
                placeholderTextColor="black"
                onChangeText={e => setModel({...model, noofseats: e})}
              />
            </View>
            {/* <View style={{paddingHorizontal: 22, paddingVertical: 7}}>
             <MultiSelect items={['Monday','Tuesday','Thursday','Friday','Saturday','Sunday']} />
            </View> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default RegisterVehicle;
