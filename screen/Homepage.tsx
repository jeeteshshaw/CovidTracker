import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { GButton } from '../component/Global/GButton';
import { GInput } from '../component/Global/GInput';
import Axios from 'axios';
import { GText } from '../component/Global/GText';
import MenuComponent from '../component/MenuComponent';
import CaseDataDisplay from '../component/CaseDataDisplay';

function Homepage({ navigation, route }) {

  const [Cases, setCases] = useState(null);
  const [Country, setCountry] = useState('');

  const findCases = async () => {
    const res = await Axios({
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/country',
      params: { name: Country },
      headers: {
        'x-rapidapi-key': '87d5de72d4msh79326d248018da7p16c994jsn430592557919',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    });
    console.log(res);
    const data = res.data[0];
    console.log(data);
    setCases(data);
    console.log("clicked");

  }
  // console.log(route.params)

  return (
    <View style={styles.container}>
      <View>
        <GText
          style={{ color: '#0faddd', fontWeight: 'bold', textAlign: 'center', fontSize: 28, marginVertical: 20, }}
        >Covid-19 Tracker</GText>
      </View>
      <View style={styles.main}>
        <View>
          <GText style={{ color: '#000', fontSize: 24, marginVertical: 10 }}> Country Name </GText>
        </View>
        <GInput style={{ margin: 5 }} placeholder='Country'
          value = {Country} 
          onChangeText={(e = '') => setCountry(e)} />
        <GButton onPress={findCases}>Search</GButton>
        <View style={{marginVertical: 20}}> 
          <CaseDataDisplay Data={Cases} />
        </View>
      </View>
      <MenuComponent onPress={()=> navigation.navigate("Profile")} />
    </View>
  )
}

export default Homepage;

// let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // top: '20%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 50
  },
  main: {
    width: '80%',
    paddingVertical: 40,
    position: 'absolute',
    top: '20%'
  },
  input: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  text: {
    color: '#333',
    fontSize: 22,
    marginVertical: 5,
    fontWeight: 'normal',
    fontStyle: 'italic'
  },
});