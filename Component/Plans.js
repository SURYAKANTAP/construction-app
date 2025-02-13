import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the icon library

const PlansScreen = () => {

    const handleUpdatePress = () => {
        // Handle Update button press logic here
        console.log(' button pressed!');
    };

    return (
        <View style={styles.container}>
           
                        <View style={styles.text}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../image/logo.png')} // Update with the path to your image
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={styles.text1}> Something went wrong. Please try again.</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
                                    <Text style={styles.buttonText}>RETRY</Text>
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
                    backgroundColor: '#713ABE',
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
                        fontSize: 16,
                    color: 'black',
                    textAlign: 'center',
                    marginBottom: 20,
  },
                    buttons: {
                        justifyContent: 'flex-end',
  },
                    button: {
                        backgroundColor: 'white',
                    paddingVertical: 15,
                    paddingHorizontal: 130,
                    marginBottom: 10,
                    borderRadius:10,
                    padding: 5,
                    marginLeft: 10,
                    marginRight: 10,
                    borderColor: 'orange',
                    borderWidth: 1,
                    paddingVertical: 10,  // Adjust the vertical padding
                    paddingHorizontal: 70, // Adjust the horizontal padding

    

  },
                    buttonText: {
                        color: 'orange',
                    fontSize: 19,
                    margin: 1,
  },
});

                    export default PlansScreen;
