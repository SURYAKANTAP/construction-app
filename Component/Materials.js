import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App= () => {

  const handleUpdatePress = () => {
    // Handle Update button press logic here
    console.log(' button pressed!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      </View>
      
      <View style={styles.text}>
      <View>
          <Text style={styles.text1}>Your Material list is empty!</Text>
          <Text style={styles.text2}>Explore more and Favourite some items</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../image/logo.png')} // Update with the path to your image
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View>
        <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
        <Text style={styles.buttonText}>START SHORTLISTING</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flexDirection: 'row', // Align icon and text horizontally
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#713ABE',
    height: 90,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    color: 'white',
    marginRight: 130,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  text1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text2:{
    fontSize: 14,
    color: 'black',
    margin: -5,

  },
  buttons: {
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 130,
    marginBottom: 10,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'orange',
    borderWidth: 1,
    paddingVertical:10,  // Adjust the vertical padding
    paddingHorizontal: 40, // Adjust the horizontal padding
    borderRadius:10,
  },
  buttonText: {
    color: 'orange',
    fontSize: 19,
    margin: 1,
    fontWeight: 'bold',
    
  },
});

export default App;
