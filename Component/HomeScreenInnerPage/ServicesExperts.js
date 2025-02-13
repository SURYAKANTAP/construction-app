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
import {useNavigation} from '@react-navigation/native';

const ServicesExperts = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("ExpertSearch", { screen: "ExpertSearch" }) }>
        <AntDesign
          name="arrowleft"
          size={27}
          color="#fff"
          style={styles.icon}
        />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Services</Text>
        </View>
      </View>

      <View style={styles.header1}>
        <AntDesign name="home" size={27} color="#fff" style={styles.icon1} />
        <View style={styles.textContainer}>
          <Text style={styles.text2}>1, Central Division, 751020</Text>
        </View>
        <View>
          <Text style={styles.text3}>CHANGE</Text>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#FFF8E3'}}>
        <View style={styles.viewtextcontainer1}>
          <Text style={styles.text4}>EXPLORE OTHER STAGES</Text>
        </View>
        <View style={styles.card1}>
          <View>
            <Text style={styles.cardtext}>Stage 1: Plot</Text>
            <View style={styles.textview1}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Approvals & Permissions
              </Text>
            </View>
            <View style={styles.textview2}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Design & Planning
              </Text>
            </View>
          </View>
          <View style={styles.cardimage1}>
            <Image
              source={require('../../image/business.jpg')} // Change the path to your image
              style={styles.image1}
            />
          </View>
        </View>
        <View style={styles.card1}>
          <View>
            <Text style={styles.cardtext}>Stage 2: Design</Text>
            <View style={[styles.textview1, styles.textview11]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Design & Planning
              </Text>
            </View>
            <View
              style={[
                styles.textview2,
                styles.textview22,
                styles.textviewcivil,
              ]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Civil & Structural Engineering
              </Text>
            </View>
          </View>
          <View style={styles.cardimage2}>
            <Image
              source={require('../../image/business.jpg')} // Change the path to your image
              style={styles.image1}
            />
          </View>
        </View>
        <View style={styles.card2}>
          <View>
            <Text style={styles.cardtext}>Stage 3: Construction</Text>
            <View style={[styles.textview1, styles.textview11]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Civil Construction
              </Text>
            </View>
            <View
              style={[styles.textview2, styles.textview22, styles.textview222]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Plumbing
              </Text>
            </View>
            <View
              style={[styles.textview1, styles.textview11, styles.textview111]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Waterproofing
              </Text>
            </View>
            <View
              style={[
                styles.textview1,
                styles.textview11,
                styles.textview1111,
              ]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Electrical
              </Text>
            </View>
          </View>
          <View style={styles.cardimage3}>
            <Image
              source={require('../../image/business.jpg')} // Change the path to your image
              style={styles.image1}
            />
          </View>
        </View>
        <View style={styles.card4}>
          <View>
            <Text style={styles.cardtext}>Stage 4: Finishing</Text>
            <View
              style={[styles.textview1, styles.textview11, styles.textview123]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Painting
              </Text>
            </View>
            <View
              style={[
                styles.textview2,
                styles.textview22,
                styles.textview222,
                styles.textview1234,
              ]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Electrical
              </Text>
            </View>
            <View
              style={[
                styles.textview1,
                styles.textview11,
                styles.textview111,
                styles.textview12345,
              ]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Interior Designing
              </Text>
            </View>
            <View
              style={[
                styles.textview1,
                styles.textview11,
                styles.textview1111,
                styles.textview123456,
              ]}>
              <Text
                style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
                Speciality Contractors & Others
              </Text>
            </View>
          </View>
          <View style={styles.cardimage4}>
            <Image
              source={require('../../image/business.jpg')} // Change the path to your image
              style={styles.image1}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E3',
  },
  header: {
    backgroundColor: '#5B0888',
    height: 58,
    flexDirection: 'row', 
    alignItems: 'center',
    
    paddingHorizontal: 10,
    
  },
  icon: {
    paddingLeft: 20,
    color: '#fff',
  },
  icon1: {
    paddingLeft: 30,
    paddingBottom: 8,
    color: '#fff',
  },
  textContainer: {
    flex: 1, // Take up the available space
    //alignItems: 'center',
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    //paddingRight: 40,
    marginLeft: 100,
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
    marginBottom: 7,
    marginRight: 1,
  },
  header1: {
    backgroundColor: '#5B0888',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 11,
    marginBottom: 7,
  },
  viewtextcontainer1: {
    marginTop: 30,
    marginLeft: 21,
  },
  text4: {
    fontSize: 17,
    //fontWeight: 'bold',
    color: 'black',
  },
  card1: {
    backgroundColor: 'white',
    height: 150,
    width: 350,
    marginLeft: 21,
    marginTop: 10,
    borderRadius: 7,
    flexDirection: 'row',
  },
  cardtext: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 15,
    color: 'black',
  },
  image1: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  cardimage1: {
    marginTop: 30,
    marginLeft: 42,
  },
  textview1: {
    backgroundColor: '#E5CFF7',
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 16,
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview2: {
    backgroundColor: '#E5CFF7',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 16,
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview11: {
    width: 150,
  },
  textview22: {
    width: 220,
  },
  cardimage2: {
    marginTop: 30,
    marginLeft: 13,
  },
  card2: {
    backgroundColor: 'white',
    height: 230,
    width: 350,
    marginLeft: 21,
    marginTop: 10,
    borderRadius: 7,
    flexDirection: 'row',
  },
  textview222: {
    width: 90,
  },
  textview111: {
    width: 125,
    marginTop: 10,
  },
  textview1111: {
    width: 90,
    marginTop: 10,
  },
  cardimage3: {
    marginTop: 30,
    marginLeft: 67,
  },
  card4: {
    backgroundColor: 'white',
    height: 230,
    width: 350,
    marginLeft: 21,
    marginTop: 10,
    borderRadius: 7,
    flexDirection: 'row',
    marginBottom: 30,
  },
  textview123: {
    width: 80,
  },
  textview1234: {
    width: 86,
  },
  textview12345: {
    width: 150,
  },
  textview123456: {
    width: 245,
  },
  cardimage4: {
    marginTop: 30,
    marginLeft: 0,
  },
  textviewcivil: {
    width: 230,
  },
});

export default ServicesExperts;