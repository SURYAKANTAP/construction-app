import React, {useState} from 'react';
import {TextInput, View, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <View style={styles.placing}>
        <Icon name="search" size={25} color="#65647C" style={styles.icon}/>
        <TextInput placeholder="Search"  placeholderTextColor='#65647C' style={styles.input}/>
      </View>
      <View style={{top:20}}>
      <Text style={{fontSize:15,fontWeight:'800',}}>Recent Searches</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
  },
  placing: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderRadius:10,
  },
  icon:{
    marginLeft:20
  },
  input: {
    marginLeft: 10,
    fontSize:20
    
  },
});

export default SearchScreen;
