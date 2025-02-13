//final code of events
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
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const EventsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={27}
          color="#fff"
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Events Near Me</Text>
        </View>
      </View>

      <View style={styles.header1}>
        <AntDesign name="enviromento" size={27} color="#fff" style={styles.icon1} />
        <View style={styles.textContainer}>
          <Text style={styles.text2}>1, Central Division, 751020</Text>
        </View>
        <View>
          <Text style={styles.text3}>CHANGE</Text>
        </View>
      </View>
      
        <Tab.Navigator>
          <Tab.Screen name="UPCOMING EVENTS" component={UPCOMINGEVENTS} />
          <Tab.Screen name="PAST EVENTS" component={PASTEVENT} />
        </Tab.Navigator>
      
    </View>
  );
};

const UPCOMINGEVENTS = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20,fontWeight:"bold",color:"black"}}>Currently there are no upcoming events</Text>
      <Image
        source={require('../../image/nodata.png')} // Change the path to your image
        style={styles.image1}
      />
      <TouchableOpacity>
      <View  style={styles.button}>
        <Text style={styles.buttontext}>UPDATE LOCATION</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const PASTEVENT = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20,fontWeight:"bold",color:"black"}}>There have been no events in the past!</Text>
      <Image
        source={require('../../image/nodata.png')} // Change the path to your image
        style={styles.image1}
      />
      <TouchableOpacity>
      <View  style={styles.button}>
        <Text style={styles.buttontext}>UPDATE LOCATION</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#5B0888',
    height: 58,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    //justifyContent: 'space-between', // Distribute items evenly
    paddingHorizontal: 10,
    //borderBottomLeftRadius: 10,
    //borderBottomRightRadius: 10, // Add padding for icon spacing
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
    marginLeft: 60,
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
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 11,
    marginBottom: 7,
  },
  image1:{
    height:95,
    width:150,
    marginTop:40,
  },
  button:{
    height:35,
    width:150,
    backgroundColor:"#fff",
    borderRadius:5,
    borderWidth:1.5,
    borderColor:"orange",
    alignItems:'center',
    justifyContent:"center",
    marginTop:35,
  },
  buttontext:{
    color:"orange",
    fontSize:14,
    fontWeight:'bold',
  
  },
});

export default EventsCard;