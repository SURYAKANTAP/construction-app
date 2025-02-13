import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon you downloaded
import { useNavigation } from '@react-navigation/native';

const CustomAlert = ({ title, message, buttons }) => {
  return (
    <View style={styles.customAlert}>
      <Text style={styles.alertTitle}>{title}</Text>
      <Text style={styles.alertMessage}>{message}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity key={index} style={[styles.button, button.style]} onPress={button.onPress}>
            <Text style={styles.buttonText}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const Settings= () => {
  const navigation = useNavigation();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  
  const menuItems = [
    { text: 'Manage', icon: 'lightbulb-o', screen: 'Manage'},
    { text: 'Alerts', icon: 'bell', screen: 'Alerts' },
    { text: 'Delete Account', icon: 'trash-o' },
  ];

  const handleDeleteAccount = () => {
    setShowDeleteAlert(true);
  };

  return (
    <View style={styles.menu}>
      <View>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => item.text === 'Delete Account' ? handleDeleteAccount() : navigation.navigate(item.screen)}>
            <View style={styles.menuItemContent}>
              <Icon name={item.icon} size={24} color="#2563EB" />
              <Text style={styles.menuItemText}>{item.text}</Text>
              <Icon name="angle-right" size={20} color="#2563EB" style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {showDeleteAlert && (
        <CustomAlert
          title=""
          message="Are you sure you want to delete your account?"
          buttons={[
            { text: 'Cancel', onPress: () => setShowDeleteAlert(false), style: styles.cancelButton },
            { text: 'Delete', onPress: () => console.log('Delete Pressed'), style: styles.deleteButton },
          ]}
        />
      )}

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

export default Settings;
