//final code of solar savings calculator
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import { TextInput } from 'react-native-gesture-handler';

const SolarSavingsCalculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <AntDesign
          name="arrowleft"
          size={27}
          color="#fff"
          style={styles.icon}
        /> */}
        {/* <View style={styles.textContainer}>
          <Text style={styles.text1}>Solar Panel Savings Calculator</Text>
        </View> */}
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../image/solarPanel.jpeg')} // Change the path to your image
          style={styles.cardimage1}
        />
      </View>
      <View style={{marginLeft: 25, marginTop: 20}}>
        <Text style={{fontSize: 20, color: 'black'}}>
          Please enter the following details:
        </Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.text}>Average Monthly Bill</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter average monthly bill"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={{marginTop: 265}}>
        <TouchableOpacity style={styles.touch}>
          <Text style={{color: 'white', fontSize: 20}}>Calculate Savings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  header: {
    // backgroundColor: '#fff',
    // height: 65,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items evenly
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, // Add padding for icon spacing
    elevation: 10,
  },
  icon: {
    paddingLeft: 20,
    color: 'black',
  },
  textContainer: {
    flex: 1, // Take up the available space
    //alignItems: 'center',
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    //paddingRight: 40,
    marginLeft: 10,
  },
  card: {
    height: 200,
    width: 343,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 25.5,
    marginTop: 20,
  },
  cardimage1: {
    height: 200,
    width: 343,
    borderRadius: 10,
  },
  label: {
    //backgroundColor:"grey",
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    position: 'relative',
    margin: 5,
  },
  text: {
    position: 'absolute',
    top: -5,
    left: 23,
    paddingHorizontal: 5,
    color: 'black',
    zIndex: 1,
    backgroundColor: 'white',
    margin: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10,
    margin: 18,
    marginBottom:7,
    paddingLeft: 15,
    //height:"26%",
  },
  touch: {
    backgroundColor: '#713ABE',
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SolarSavingsCalculator;