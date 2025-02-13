import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Support = () => {
  const navigation = useNavigation();

  const menuItems = [
    { text: 'FAQs', icon: 'weixin', screen: 'FAQs' },
    { text: 'Report a Problem', icon: 'exclamation-circle', screen: 'Report a Problem' },
    { text: 'Issue History', icon: 'history', screen: 'Issue History' },
  ];

  const handleMenuItemPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.menu}>
      <View>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handleMenuItemPress(item.screen)}>
            <View style={styles.menuItemContent}>
              <Icon name={item.icon} size={24} color="#2563EB" />
              <Text style={styles.menuItemText}>{item.text}</Text>
              <Icon name="angle-right" size={20} color="#2563EB" style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contact}>
        <Text style={styles.heading2}>CONTACT US</Text>

        {/* Phone number with icon */}
        <View style={styles.contactItem}>
          <Icon name="phone" size={26} color="#000000" />
          <View>
            <Text style={styles.contactText1}>1800 266 8823</Text>

            <Text style={styles.lightText}>8:00 AM to 8:00 PM (All days)</Text>
          </View>
        </View>

        <View style={styles.horizantalLine}></View>

        {/* WhatsApp with icon */}
        <View style={styles.contactItem}>
          <Icon name="whatsapp" size={26} color="#25D366" />
          <Text style={styles.contactText2}>WhatsApp Us</Text>
        </View>

        <View style={styles.horizantalLine}></View>

        {/* Write to us with icon */}
        <View style={styles.contactItem}>
          <Icon name="envelope" size={26} color="#000000" />
          <View>
            <Text style={styles.contactText1}>Write to Us</Text>
            <Text style={styles.lightText}>utec.care@adityabirla.com <Icon name="copy" size={10} color="#000000" style={{ marginLeft: 5 }} /> </Text>

          </View>
        </View>
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
  heading2: {
    textAlign: 'left',

  },
  contact: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,

  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  contactText1: {
    color: '#000000',
    fontSize: 15,
    marginLeft: 15,
  },
  contactText2: {
    color: '#000000',
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 8,
  },
  horizantalLine: {
    borderBottomWidth: 1,

    borderBottomColor: '#8F8F8F',
    marginTop: 5,

  },
  contactItem2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightText: {
    color: '#8F8F8F', // Light color of your choice
    fontSize: 10, // Adjust the font size as needed
    marginLeft: 15, // Adjust the margin as needed
    marginBottom: 5,
  },
});

export default Support;
