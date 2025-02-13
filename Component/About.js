import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon you downloaded
import { useNavigation } from '@react-navigation/native';


const About = () => {
  const navigation = useNavigation();
  const menuItems = [
    { text: 'Privacy Policy', icon: 'shield',screen:'Privacy Policy' },
    { text: 'Terms of Use', icon: 'pencil-square-o',screen:'Terms of Use' },
    { text: 'App Version', icon: 'android',screen:'App Version' },
    { text: 'Cancellation & Refunds Policy', icon: 'times-circle-o',screen:'Cancellation & Refunds Policy' },
  ];

  return (
    <View style={styles.menu}>
      <View>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.menuItemContent}>
              <Icon name={item.icon} size={24} color="#2563EB" />
              <Text style={styles.menuItemText}>{item.text}</Text>
              <Icon name="angle-right" size={20} color="#2563EB" style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 650,
  },
  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    elevation:5
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    color: '#000000',
    fontSize: 15,
    marginLeft: 15,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default About;