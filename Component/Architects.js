import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const App= () => {

  const handleUpdatePress = () => {
    // Handle Update button press logic here
    console.log(' button pressed!');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.text}>
      <View>
          <Text style={styles.text1}>Your Architects  list is {'\n'}empty!</Text>
          <Text style={styles.text2}>Explore more and favourite some items</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../image/logo.png')} // Update with the path to your image
            style={styles.image}
            resizeMode="contain"
          />
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
    marginRight: 160,
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
    fontSize: 20,
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
  
});

export default App;