import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ReferPartner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.text}>Ask the Experts</Text>
        <View style={styles.cardContent}>
          <Text style={styles.text1}>
            Connect with professionals {'\n'} in your 
            {'\n'}area to start building your {'\n'}ideal home.
          </Text>
          <Image
            source={require('../image/User1.jpg')}
            style={styles.rawMaterialsImage}
          />
        </View>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.buttonText}>GET STARTED</Text>
          <Icon name="right" size={23} color="black" style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={[styles.cardContainer, styles.container2]}>
        <Text style={styles.text}>On-Site Consultancy & Testing</Text>
        <View style={styles.cardContent}>
          <Text style={styles.text1}>
           Get on-site tests for construction materials along with demonstartions related to right construction practices.
          </Text>
          
        </View>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.buttonText}>GET STARTED</Text>
          <Icon name="right" size={23} color="black" style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align items at the top of the screen
        alignItems: 'center',
        paddingTop: 20, // Add paddingTop to push content down from the top
      },
      cardContainer: {
        width: '90%',
        backgroundColor: '#9D76C1',
        borderRadius: 20,
        marginBottom: 20,
      },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    margin: 8,
  },
  text1: {
    fontSize: 17,
    margin: 8,
  },
  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    
  },
  
  
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
//   arrow: {
//     marginRight: 10,
    
//   },
  rawMaterialsImage: {
    height: 80,
    width: 80, // Ensure width and height are equal for a perfect circle
    borderRadius: 35, // Half of the width or height to make it a circle
    marginBottom: 5,
  },
  
  container2: {
    backgroundColor: '#E5CFF7',
  },
});

export default ReferPartner;