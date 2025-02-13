import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can replace FontAwesome with the desired icon set


const RegisterPage = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleContinue = () => {
    if (selected) {
      navigation.navigate('AllScreen'); // Use the correct screen name
    } else {
      console.log('Please select an option before continuing.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Welcome!</Text>
      <Text style={styles.texts}>Log in or Register</Text>
      <Text style={{fontSize: 15, padding: 4, paddingLeft: 10, color: 'black'}}>
        To begin an exciting home building journey.
      </Text>

      {options.map(option => (
        <View key={option.label}>
          {option.additionalText && (
            <Text
              style={{
                fontSize: 15,
                padding: 4,
                paddingLeft: 10,
                color: 'black',
              }}>
              {option.additionalText}
            </Text>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              selected === option.label && styles.selected,
              option.center && styles.centerButton,
            ]}
            onPress={() => setSelected(option.label)}>
            {option.icon && (
              <Icon
                name={option.icon}
                size={selected === option.label ? 30 : 24}
                color={selected === option.label ? 'white' : 'black'}
                style={styles.icon}
              />
            )}
            <Text
              style={[
                styles.buttonText,
                selected === option.label && styles.selectedText,
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={{flex: 1, borderRadius: 20, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={[styles.continueButton, !selected && styles.disabled]}
          disabled={!selected}
          onPress={handleContinue}>
          <Text style={[styles.buttonText, styles.continuetext]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const options = [
  {
    label: 'User',
    icon: 'user-circle',
    center: 'true',
  },
  {
    label: 'Partner',
    icon: 'users',
    additionalText: 'Looking to partner with DBL as a professional?',
    center: true,
  },
  {
    label: 'Admin',
    icon: 'user',
    additionalText: 'Looking to admin with DBL as a professional?',
    center: true,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    height: 70,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#2563EBED',
    borderColor: 'black',
  },
  continueButton: {
    backgroundColor: '#346EEC',
    paddingVertical: 5,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  continuetext: {
    color: 'white',
    padding: 15,
  },
  texts: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    padding: 15,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  selectedText: {
    color: 'white',
  },
});

export default RegisterPage;