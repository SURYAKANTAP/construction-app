import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const IssueHistory= () => {
  const [searchText, setSearchText] = useState('');

  const handleUpdatePress = () => {
    // Handle Update button press logic here
    console.log('Button pressed!');
  };

  const handleClearPress = () => {
    // Clear search text logic here
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search1" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        {searchText !== '' && (
          <TouchableOpacity onPress={handleClearPress}>
            <Icon name="closecircle" size={20} color="#555" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.text}>
        <View>
          <Text style={styles.text1}> Cannot find any issues</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../image/LOGO_IMG.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  clearIcon: {
    marginLeft: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  text1: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default IssueHistory;