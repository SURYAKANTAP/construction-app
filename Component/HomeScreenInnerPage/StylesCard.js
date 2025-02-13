//final page of Styles
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

const StylesCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={27}
            color="#fff"
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Styles</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.scroll}>
          <TouchableOpacity>
            <View style={styles.button1}>
              <Text style={styles.buttontext}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Text style={styles.buttontext}>Elevations</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button3}>
              <Text style={styles.buttontext}>Roofs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button4}>
              <Text style={styles.buttontext}>Doors</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button5}>
              <Text style={styles.buttontext}>Windows</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button6}>
              <Text style={styles.buttontext}>Porchs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button7}>
              <Text style={styles.buttontext}>Gates</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button8}>
              <Text style={styles.buttontext}>Grills</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button9}>
              <Text style={styles.buttontext}>Columns</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button10}>
              <Text style={styles.buttontext}>Staircases</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button11}>
              <Text style={styles.buttontext}>Walls</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#5B0888',
    height: 80,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    //justifyContent: 'space-between', // Distribute items evenly
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, // Add padding for icon spacing
  },
  icon: {
    paddingLeft: 20,
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
    marginLeft: 110,
  },
  image1: {
    height: 110,
    width: 80,
    marginTop: 30,
    marginLeft: 15,
  },
  button1: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button3: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button4: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button5: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button6: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button7: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button8: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button9: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button10: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
  
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button11: {
    height: 40,
    width: 90,
    backgroundColor: '#E5CFF7',
    marginTop: 16,
    marginLeft: 15,
    marginRight:10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 16,
    color:'black',
  },
  scroll: {
    flexDirection: 'row',
  },
  
});

export default StylesCard;