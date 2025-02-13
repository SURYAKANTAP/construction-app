import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';
import Architects from '../Component/Architects';
import Engineers from'../Component/Engineers';
import Contractors from'../Component/Contractors';


const Header = () => {
    return (
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Experts</Text> */}
      </View>
    )
  }

const Experts= () => {
  return (
    
    <Tabs.Container renderHeader={Header}>
      <Tabs.Tab name="Architects">
      <Tabs.ScrollView >
        <Architects/>

        </Tabs.ScrollView >
      </Tabs.Tab>
      <Tabs.Tab name="Engineers">
        <Tabs.ScrollView >
        <Engineers/>

        </Tabs.ScrollView >
        
      </Tabs.Tab>
      <Tabs.Tab name="Contractors" >
        <Tabs.ScrollView >
        <Contractors/>
        </Tabs.ScrollView >
      </Tabs.Tab>
    </Tabs.Container>
  );
};
const styles=StyleSheet.create({
  content:{
    flex:1
  },
header:{
  height:0,
  width:'100%',
  backgroundColor:'#713ABE',
  justifyContent: 'flex-end',
  alignItems: 'center',
  
},
headerText: {
  color: 'white',
  fontSize: 24,
  padding:15,
},
tabstl:{
  fontWeight:'bold',
  color:'#5B0888'

}
});

export default Experts;
