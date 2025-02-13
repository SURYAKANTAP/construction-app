
import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

const ExpertSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 15, flex: 1}}>
      <TouchableOpacity onPress={()=>navigation.navigate('ServicesExperts')}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Let us help you find Architects, Engineers & Contractors
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>
            Connect with professionals{'\n'}in your area to start building
            {'\n'}
            your ideal home.
          </Text>
          <Image
            source={require('../../image/civil-engineering.png')}
            style={styles.rawMaterialsImage}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text3}>GET STARTED </Text>
          <Icon name="right" size={23} color="black" style={styles.arrow} />
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5FFF8',
    height: 210,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    margin: 10,
  },
  text1: {
    fontSize: 17,
    margin: 10,
  },
  text3: {
    fontSize: 18,
    margin: 10,
    color: 'black',
    fontWeight: '400',
  },
  arrow: {
    top: 12,
    right: 10,
  },
  rawMaterialsImage: {
    height: 90,
    width: 90,
    left: 30,
  },
  
});
export default ExpertSearch;
