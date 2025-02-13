import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object
  
  const navigateToSolutionScreen = () => {
    navigation.navigate('Solutions'); // Navigate to the SolutionsScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToSolutionScreen}>
          <AntDesign
            name="arrowleft"
            size={27}
            color="#fff"
            style={styles.icon}
          />
        </TouchableOpacity>
        
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Select Site</Text>
        </View>
      </View>
      <View style={styles.large}>
        <Image
          source={require('../image/image40.png')} // Change the path to your image
          style={styles.cardimage1}
        />
        <Text style={styles.text9}>You have not added any site</Text>
        <Text style={styles.text10}>Start adding site details on clicking Add</Text>
        <Text style={styles.text10}>New Site below</Text>
      </View>

      <View>
        <TouchableOpacity>
          <View style={styles.button1}>
            <Text style={styles.buttontext1}>ADD NEW SITE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    height: 65,
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
    color: "black",
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
    marginLeft: 30,
  },
  large: {
    height: "78%",
    backgroundColor: "white",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    marginVertical: 32,
    marginHorizontal: 25,
    height: 48,
    backgroundColor: "#9D76C1",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext1: {
    color: "white",
    //fontWeight:"bold",
    fontSize: 20,
  },
  cardimage1: {
    height: 230,
    width: 90,
    // marginTop: 40,
    // marginLeft: 30,
    borderRadius: 5,
  },
  text9: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text10: {
    fontSize: 18,
    marginTop: 5,

  },

});

export default App;
