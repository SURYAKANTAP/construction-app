import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HomeTopNav = () => {
  const navigation = useNavigation();
  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };
  const handleProfilePress = () => {
    navigation.navigate('Menu');
  };
  return (
    <View style={styles.navContainer}>
      <ImageBackground
        source={require('../image/homeTabImage/Frame6.png')}
        resizeMode="cover"
        //explore more about this height & weight
        style={{height: '100%', width: '100%'}}>
        <View style={{flexDirection: 'row',gap: 12, marginTop: 10,justifyContent:'flex-end',marginRight:10}}>
          <TouchableOpacity onPress={handleSearchPress}>
            <Icon
              name="search"
              size={28}
              color="white"
              style={{paddingTop: 3,}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfilePress}>
            <Ionicons name="person-circle-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
        {/* <Image
          source={require('../image/DLB.png')}
          resizeMode="contain"
          style={{height: 80, marginTop:-12}}
        /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 2,
  },
});

export default HomeTopNav;
