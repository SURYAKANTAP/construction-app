import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

const MySitesScreen = () => {
  
  const handleUpdatePress = () => {
    // Handle Update button press logic here
    console.log(' button pressed!');
  };

  return (
       <View style={styles.container}>
        <View style={styles.heading}>
        {/* <Text style={styles.headingText}></Text> */}
      </View>
       <View style={styles.text}>
       <View style={styles.imageContainer}>
        <Image
          source={require('../image/LOGO_IMG.png')} // Update with the path to your image
          style={styles.image}
          resizeMode="contain"
        />
      </View>
         <Text style={styles.Text}>You have not added any site</Text>
          <Text style={styles.Text}>Start adding site details on clicking Add New Site below
          </Text>

          </View>
          <View style={styles.buttons}>
      <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
        <Text style={styles.buttonText}>ADD NEW SITE</Text>
      </TouchableOpacity>
      </View>
         </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  heading: {
    alignItems: 'flex-start',
    backgroundColor:'#E5CFF7',
  },
  headingText: {
    fontSize: 24,
    color: 'black',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  text:{
    flex:1,
    justifyContent:'center',
    marginTop:50
  },
  Text: {
    fontSize: 20,
    color:'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons:{
  justifyContent:'flex-end',
},
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 100, // Adjust the radius value as needed
    marginBottom:10,
    padding:5,
    marginLeft:10,
    marginRight:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    margin:1,
    textAlign:'center'
  },

});

export default MySitesScreen;
