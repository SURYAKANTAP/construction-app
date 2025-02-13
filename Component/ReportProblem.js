import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the FontAwesome icon

const ReportProblem = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setButtonEnabled(true);
    // Do something with the selected option, like navigation or state update
  };

  const handleInputChange = (fieldName, text) => {
    // Handle input change here
  };

  const handleSubmit = () => {
    // Handle submission here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select the type of issue you are facing</Text>
        </View>
        <View style={[styles.optionsContainer, { alignSelf: 'flex-start' }]}>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Option 1' && styles.selectedOption]}
            onPress={() => handleOptionSelect('Option 1')}
          >
            <View style={[styles.circle, selectedOption === 'Option 1' && styles.selectedCircle]} />
            <Text style={styles.optionText}>App/Account Related Issues</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Option 2' && styles.selectedOption]}
            onPress={() => handleOptionSelect('Option 2')}
          >
            <View style={[styles.circle, selectedOption === 'Option 2' && styles.selectedCircle]} />
            <Text style={styles.optionText}>Service Requests Related Issues</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'Option 3' && styles.selectedOption]}
            onPress={() => handleOptionSelect('Option 3')}
          >
            <View style={[styles.circle, selectedOption === 'Option 3' && styles.selectedCircle]} />
            <Text style={styles.optionText}>General Issues</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.label}>
          <Text style={styles.text}>Help us improve your experience here</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tell us more"
            onChangeText={text => handleInputChange('name', text)}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Upload a Screenshot of the Issue</Text>
           <TouchableOpacity onPress={() => console.log("Icon Pressed")}>
            <Icon name="plussquareo" size={160} color="#2563EB" style={{ marginBottom: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white'
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    //color:'black',
    fontWeight:'bold'
  },
  optionsContainer: {
    alignItems: 'flex-start', // Align option text to the start of the screen
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: 'white',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2563EB',
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: '#2563EB',
  },
  optionText: {
    fontSize: 16,
    color:'black'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    position: 'relative',
    margin: 5,
  },
  text: {
    position: 'absolute',
    top: -5,
    left: 15,
    paddingHorizontal: 5,
    color: 'black',
    zIndex: 1,
    backgroundColor:'white',
    margin: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black', // Change borderColor as needed
     paddingVertical: 80,
    //  paddingHorizontal: 150,
    // heigh:100,
    width:370,
    borderRadius: 20,
    fontSize: 16,
    marginTop: 10,
    margin: 10,
  },
  textContainer: {
    alignSelf: 'flex-start', // Align text to the start of the screen
    marginLeft: 20,
    marginBottom: 10
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  buttonContainer: {
    alignSelf: 'center',
    marginRight: 20,
    marginTop: 'auto', // Push the button to the bottom
    borderRadius:100,
  },
});

export default ReportProblem;
