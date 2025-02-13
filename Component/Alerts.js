import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Alerts = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleCheckboxToggle = (option) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleMasterToggle = (value) => {
    const updatedCheckboxes = {};
    for (const key in checkboxes) {
      updatedCheckboxes[key] = value;
    }
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <View style={styles.card}>
      <View style={styles.masterToggle}>
        <Switch
          value={Object.values(checkboxes).every((value) => value)}
          onValueChange={(value) => handleMasterToggle(value)}
        />
      </View>
      <Text style={styles.masterToggleText}>Receive Alerts</Text>
      <Text style={styles.masterToggleText1}>Enable All</Text>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option1')}
          >
            <Icon name={checkboxes.option1 ? "check-square-o" : "square-o"} size={20} color="#2563EB" />
            <Text style={styles.checkboxText}>Push Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option2')}
          >
            <Icon name={checkboxes.option2 ? "check-square-o" : "square-o"} size={20} color="#2563EB" />
            <Text style={styles.checkboxText}>SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option3')}
          >
            <Icon name={checkboxes.option3 ? "check-square-o" : "square-o"} size={20} color="#2563EB" />
            <Text style={styles.checkboxText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option4')}
          >
            <Icon name={checkboxes.option4 ? "check-square-o" : "square-o"} size={20} color="#2563EB" />
            <Text style={styles.checkboxText}>Phone Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option5')}
          >
            <Icon name={checkboxes.option5 ? "check-square-o" : "square-o"} size={20} color="#2563EB" />
            <Text style={styles.checkboxText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 20,
    height: '50%',
    borderColor: '#dddddd',
  },
  masterToggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 30,
    color: 'black',
  },
  masterToggleText1: {
    fontSize: 15,
    bottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  masterToggle: {
    marginRight: 10,
  
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 6,
  },
  checkboxText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
});

export default Alerts;
