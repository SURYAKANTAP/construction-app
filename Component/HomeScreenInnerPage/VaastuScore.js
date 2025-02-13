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

const gridsData = [
  {id: 1, label: 'North West'},
  {id: 2, label: 'NORTH'},
  {id: 3, label: 'North East'},
  {id: 4, label: 'WEST'},
  {id: 5, label: 'CENTER OF THE HOME'},
  {id: 6, label: 'EAST'},
  {id: 7, label: 'South West'},
  {id: 8, label: 'SOUTH'},
  {id: 9, label: 'South East'},
];

const VaastuScore = () => {
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
          <Text style={styles.text1}>Vaastu Score Check</Text>
        </View>
        <TouchableOpacity>
          <AntDesign
            name="questioncircle"
            size={27}
            color="#fff"
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Text style={styles.viewtext1}>ROOM SELECTOR</Text>
        <TouchableOpacity>
          <Text style={styles.viewtext2}>RESET ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <Text style={styles.viewtext3}>
          By clicking on the boxes below, you can choose the rooms that are
          present in each direaction of your home
        </Text>
      </View>
      <View style={styles.view4}>
        {gridsData.map(grid => (
          <TouchableOpacity key={grid.id} style={styles.gridItem}>
            <Text style={styles.gridText}>{grid.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity>
      <View style={styles.button}>
         <Text style={styles.buttontext}>CALCULATE SCORE</Text>
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
  icon2: {
    paddingRight: 20,
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
    marginLeft: 40,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  viewtext1: {
    fontSize: 17,
    color:"black",
    fontWeight: 'bold',
  },
  viewtext2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'orange',
  },
  view3: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 15,
  },
  viewtext3: {
    fontSize: 17,
    color:"black",
  },
  view4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  gridItem: {
    width: '30%', // Adjust as per your design
    height: 140,
    backgroundColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth:1,
    borderColor:'orange'
  },
  gridText: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'black'
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
     backgroundColor:'#5B0888',
     height:60,
     width:'100%',
     marginTop:35,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
  },
  buttontext:{
    fontSize:18,
    color:'white',
  },
});

export default VaastuScore;