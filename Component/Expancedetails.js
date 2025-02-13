
import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';

const Expancedetails = () => {
  const [details, setDetails] = useState({
    Category: '',
    SubCategory: '',
    Type: '',
    Expenses: '',
    profession: '',
    Date: '',
    dateOfBirth: new Date(),
  });

  const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // Add this line

  const [selectedIncome, setSelectedIncome] = useState('');

  const handleInputChange = (field, value) => {
    setDetails({ ...details, [field]: value });
    checkIfUpdateEnabled();
  };

  const checkIfUpdateEnabled = () => {
    const filledDetails = Object.values(details).map((value) => {
      if (typeof value === 'string') {
        return value.trim();
      }
      return '';
    });
    setIsUpdateEnabled(filledDetails.some((value) => value !== ''));
  };

  const handleUpdate = () => {
    // Implement logic to update details
    console.log('Details updated!', details);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      handleInputChange('dateOfBirth', selectedDate);
    }
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (

        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.card}>
                <TouchableOpacity onPress={handleShowDetails}>
                  <Text style={styles.cardText}>ADD EXPENSES</Text>
                  <Icon name="down" size={15} color="#000" style={styles.icon1} />
                </TouchableOpacity>

                {showDetails && (
                  <View>
                    <View style={styles.label}>
                      <Text style={styles.text}>Category</Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          style={styles.textInput}
                          selectedValue={details.Category}
                          onValueChange={(value) =>
                            handleInputChange('Category', value)
                          }>
                          <Picker.Item label="Select Category" value="" />
                          <Picker.Item label="Category1" value="Category1" />
                          <Picker.Item label="Category2" value="Category2" />
                        </Picker>
                      </View>
                    </View>

                    <View style={styles.label}>
                      <Text style={styles.text}>Type</Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          style={styles.textInput}
                          selectedValue={details.Type}
                          onValueChange={(value) =>
                            handleInputChange('Type', value)
                          }>
                          <Picker.Item label="Select Type" value="" />
                          <Picker.Item label="Type1" value="Type1" />
                          <Picker.Item label="Type2" value="Type2" />
                        </Picker>
                      </View>
                    </View>

                    <View style={styles.label}>
                      <Text style={styles.text}>Expenses</Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          style={styles.textInput}
                          selectedValue={details.profession}
                          onValueChange={(value) =>
                            handleInputChange('profession', value)
                          }>
                          <Picker.Item label="Select Expenses" value="" />
                          <Picker.Item label="Expenses1" value="Expenses1" />
                          <Picker.Item label="Expenses2" value="Expenses2" />
                        </Picker>
                      </View>
                      <View style={styles.label}>
                        <Text style={styles.text}>Date of Birth</Text>
                        <TouchableOpacity
                          style={styles.datePickerButton}
                          onPress={() => setShowDatePicker(true)}>
                          <View style={styles.icon}>
                            <Text style={styles.datePickerButtonText}>
                              {details.dateOfBirth.toLocaleDateString()}
                            </Text>
                            {/* Calendar Icon */}
                            <Icon name="calendar" size={20} color="black" />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <View style={{ margin: 20 }}>
                            <Icon name="plussquareo" size={100} color="black" />
                          </View>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={styles.button}>
                          <View>
                            <Text style={styles.buttonText}>ADD</Text>
                          </View>
                        </TouchableOpacity>
                        {showDatePicker && (
                          <DateTimePicker
                            value={details.dateOfBirth}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                          />
                        )}
                        
                      </View>
                    </View>
                  </View>
                  
                )}
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
        );
};

        const styles = StyleSheet.create({
          container: {
          flex: 1,
        padding: 10,
        paddingTop: 20,
  },
        card: {
          width:370,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
        height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
  },
        cardText: {
          fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
  },
        label: {
          fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
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
        margin: 5,
        backgroundColor:'#fff'
   
  },
        textInput: {
          borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 10,
        margin: 10,
        zIndex: 0,
        color: '#ddd',
  },
        pickerContainer: {
          borderWidth: 1,
        borderColor: '#ddd',
        margin: 5,
        borderRadius: 10,
        marginTop: 10,
        width:320,
  },
        datePickerButton: {
          fontSize: 15,
        color: 'blue',
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 10,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
  },
        datePickerButtonText: {
          color: 'black',
        margin: 5,
  },
        icon: {
          flexDirection: 'row',
        justifyContent: 'space-between',
  },
        incomeContainer: {
          flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
  },
        incomeOption: {
          padding: 10,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
  },
        updateButton: {
          padding: 5,
        borderRadius: 150,
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
  },
        updatetext: {
          color: 'white',
        fontSize: 17,
        margin: 10,
  },
        buttonText: {
          color: 'orange',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 17,
        margin: 2,
  },
        button: {
          padding: 10,
        borderRadius: 5,
        borderColor: 'orange',
        borderWidth: 2,
        width: 100,
        marginLeft: 20,
  },
  icon1:{
    marginLeft: 300,
    top: -28,
  }
});

        export default Expancedetails;
