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
import AntDesign from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: 1,
    iconName: 'street-view',
    text: 'To start home design conversations with family',
  },
  {id: 2, iconName: 'building-o', text: 'To discover your style preferences'},
  {
    id: 3,
    iconName: 'users',
    text: 'Share the report with local experts to plan & design your home',
  },
  {id: 4, iconName: 'film', text: 'To raise 3D Elevation requests'},
];

const StyleQuiz = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={27}
            color="#fff"
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Style Quiz</Text>
        </View>
      </View> */}
      <ScrollView>
      <View style={styles.card1}>
        <View>
          <Text style={styles.cardtext}>Discover your Style</Text>
          <Text style={styles.cardtext2}>Preference</Text>
          <Text style={styles.cardtext1}>Start your homebuilding journey</Text>
          <Text style={{fontSize: 16, paddingLeft: 15, color: 'black'}}>
            by choosing from designs
          </Text>
          <Text style={{fontSize: 16, paddingLeft: 15, color: 'black'}}>
            that match your requirements.
          </Text>
        </View>
        <View>
          <Image
            source={require('../../image/image1.jpg')} // Change the path to your image
            style={styles.image1}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttontext}>START QUIZ</Text>
      </View>
      <View style={{margin: 20,marginBottom:5}}>
        <Text style={{fontSize: 18, color: 'black'}}>Why Style Quiz?</Text>
      </View>
      <View style={styles.container1}>
        {data.map((item, index) => (
          <View
            key={item.id}
            style={[styles.item, index % 2 === 1 && styles.itemOdd]}>
            <AntDesign
              name={item.iconName}
              size={30}
              color="#5B0888"
              style={styles.icon11}
            />
            <Text style={styles.text5}>{item.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.container11}>
        
        <Text style={styles.viewtext1}>How it works!</Text>
        <View style={styles.horizontalline}></View>
        <View style={styles.viewline11}>
        <AntDesign
            name="home"
            size={27}
            color="#fff"
            style={styles.icon12}
          />
          <View>
          <Text style={styles.viewtext11}>Double tap or click 'like' button on home </Text>
          <Text style={styles.viewtext11}>designs you prefer</Text>
          </View>
        </View>
        <View style={styles.viewline11}>
        <AntDesign
            name="home"
            size={27}
            color="#fff"
            style={styles.icon12}
          />
          <View>
          <Text style={styles.viewtext11}>Get personalised and detailed</Text>
          <Text style={styles.viewtext11}>Style Quiz report</Text>
          </View>
        </View>
      </View>
      <View style={{height:50}}>

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
    marginLeft: 90,
  },
  image1: {
    height: 110,
    width: 80,
    marginTop: 30,
    marginLeft: 15,
  },
  card1: {
    flexDirection: 'row',
    backgroundColor: '#86B6F6',
    height: 170,
    marginTop: 17,
    marginLeft: 17,
    marginRight: 17,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    backgroundColor: '#B4D4FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginLeft: 17,
    marginRight: 17,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardtext: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 15,
    color: 'black',
  },
  cardtext2: {
    fontSize: 18,
    paddingLeft: 15,
    color: 'black',
  },
  cardtext1: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 10,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B0888',
  },
  container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:6,
  },
  item: {
    //flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    //justifyContent:"center",
    width: '48%', // Adjust the width to leave space for margin
    height: 130,
    backgroundColor: '#EFEFEF',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  itemOdd: {
    marginLeft: '4%', // Adjust the margin for odd-indexed items
  },
  text5: {
    marginLeft: 10,
    color: 'black',
    paddingTop: 8,
    fontSize: 16,
  },
  
  container11:{
    backgroundColor:'#EEF5FF',
    height:170,
    width:355,
    marginLeft:20,
    borderRadius:10,

  },
  viewtext1:{
    fontSize:20,
    color:'black',
    paddingTop:15,
    paddingLeft:15,
  },
  horizontalline:{
    height:1,
    backgroundColor:'black',
    width:335,
    marginLeft:9,
    marginTop:10,

  },
  icon12:{
    paddingLeft: 20,
    color: 'black',
    paddingTop:7,
    marginRight:8,
  },
  viewline11:{
    flexDirection:'row',
    marginTop:10,
  },
  viewtext11:{
    fontSize:15,
  
  },
});

export default StyleQuiz;