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
        <Text style={styles.text}>Refer a User</Text>
        <View style={styles.cardContent}>
          <Text style={styles.text1}>
            Help your friends and family {'\n'}members build their dream {'\n'}house by referring them on Utec {'\n'} platform and earn Stars!
          </Text>
          <Image
            source={require('../image/User.webp')}
            style={styles.rawMaterialsImage}
          />
        </View>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.buttonText}>GET STARTED</Text>
          <Icon name="right" size={23} color="black" style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={[styles.cardContainer, styles.container2]}>
        <Text style={styles.text}>Refer a Service</Text>
        <View style={styles.cardContent}>
          <Text style={styles.text1}>
            Refer your friends and family {'\n'}members for end-to-end {'\n'} services across their house {'\n'}construction journey and earn{'\n'} Stars!
          </Text>
          <Image
            source={require('../image/contractor.png')}
            style={styles.rawMaterialsImage}
          />
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  cardContainer: {
    width: '90%',
    backgroundColor: '#96EFFF',
    borderRadius: 20,
    marginBottom: 110,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //padding: 10,
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
  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF5FF',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    //justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400', 
  
  },
  arrow: {
    top: 3,
  },
  rawMaterialsImage: {
    height: 100,
    width: 100,
  },
  container2: {
    backgroundColor: '#F7B787',
    bottom:100,
    borderRadius:20
  },
});

export default ReferPartner;
