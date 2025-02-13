import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Saved = () => {
  const navigation = useNavigation();

  const savedItems = [
    { name: 'Plans', count: 0, icon: 'comments', screen: 'PlansScreen' },
    { name: 'Styles', count: 0, icon: 'codepen', screen: 'StylesScreen' },
    { name: 'Videos', count: 0, icon: 'video-camera', screen: 'VideosScreen' },
    { name: 'Articles', count: 0, icon: 'file-text-o', screen: 'ArticlesScreen' },
    { name: 'Materials', count: 0, icon: 'cubes', screen: 'MaterialsScreen' },
    { name: 'Experts', count: 0, icon: 'user-secret', screen: 'ExpertsScreen' },
  ];

  const handleItemClick = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.savedBox}>
      {savedItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.savedItem} onPress={() => handleItemClick(item.screen)}>
          <View style={styles.iconContainer}>
            <Icon name={item.icon} size={20} color="#000000" style={styles.icon} />
          </View>
          <Text style={styles.savedItemText}>{item.name}</Text>
          <Icon name="angle-right" size={20} color="#000000" style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  savedBox: {
    marginTop: 20,
    backgroundColor: '7B66FF',
    padding: 10,
    borderRadius: 10,
    flex: 1,
   
  },
  savedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth:5,
    margin:8,
    borderRadius:10,
    borderColor:'#F6F6F6',
    // borderBottomWidth: 1,
    // borderBottomColor: '#D0C0E5',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  savedItemText: {
    color: '#000000',
    fontSize: 15,
    flex: 1,
},
});