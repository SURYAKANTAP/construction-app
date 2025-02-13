import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const PersonalDetails = ({route}) => {
  const [details, setDetails] = useState({
    name: '',
    rollNo: '',
    emailAddress: '',
    dateOfBirth: new Date(),
    gender: '',
    profession: '',
    annualIncome: '',
  });

  useEffect(() => {
    // Check if route.params and userDetails exist to prevent errors
    const {userDetails} = route.params || {};
    if (userDetails) {
      console.log('User Details:', userDetails);
      setDetails(userDetails);
      checkIfUpdateEnabled();
    }
  }, [route.params]);

  const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedIncome, setSelectedIncome] = useState('');

  const handleInputChange = (field, value) => {
    setDetails({...details, [field]: value});
    checkIfUpdateEnabled();
  };

  const checkIfUpdateEnabled = () => {
    const filledDetails = Object.values(details).map(value => {
      if (typeof value === 'string') {
        return value.trim();
      }
      return '';
    });
    setIsUpdateEnabled(filledDetails.some(value => value !== ''));
  };

  const handleUpdate = () => {
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

  const handleIncomeSelect = income => {
    setSelectedIncome(income);
    handleInputChange('annualIncome', income);
  };

  const incomeData = [
    'Up to ₹2,50,000',
    '₹2,50,001 - ₹5,00,000',
    '₹5,00,001 - ₹10,00,000',
    '₹10,00,001 - ₹15,00,000',
    'Above ₹15,00,000',
  ];

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView style={styles.container}>
        {/* <Text style={styles.heading}>Personal Details</Text> */}

        <View style={styles.label}>
          <Text style={styles.text}> Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Name"
            onChangeText={text => handleInputChange('name', text)}
            underlineColorAndroid="transparent"
            value={details.name}
          />
        </View>
        <View style={styles.label}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Email ID"
            keyboardType="email-address"
            onChangeText={text => handleInputChange('emailAddress', text)}
          />
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

          {showDatePicker && (
            <DateTimePicker
              value={details.dateOfBirth}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <View style={styles.label}>
          <Text style={styles.text}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.textInput}
              selectedValue={details.gender}
              onValueChange={value => handleInputChange('gender', value)}>
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>

        <View style={styles.label}>
          <Text style={styles.text}>Profession</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.textInput}
              selectedValue={details.profession}
              onValueChange={value => handleInputChange('profession', value)}>
              <Picker.Item label="Select your Profession" value="" />
              <Picker.Item label="Self employed" value="Self employed" />
              <Picker.Item label="Salaried" value="Salaried" />
              <Picker.Item label="Business" value="Business" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>
        </View>
        <View style={styles.line} />

        <Text style={styles.label}>Residential Address</Text>

        <Text style={styles.label}>Select annual Family Income</Text>
        <View style={styles.incomeContainer}>
          {incomeData.map((income, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.incomeOption,
                {
                  backgroundColor:
                    selectedIncome === income ? '#9D76C1' : 'transparent',
                },
              ]}
              onPress={() => handleIncomeSelect(income)}>
              <Text style={{color: '#8B0888'}}>{income}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.updateButton,
            {backgroundColor: isUpdateEnabled ? '#2563EB' : 'gray'},
          ]}
          onPress={handleUpdate}
          disabled={!isUpdateEnabled}>
          <Text style={styles.updatetext}>UPDATE</Text>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 33,
    color: '#713ABE',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    position: 'relative',
    margin: 3,
    // color:'black'
  },
  text: {
    position: 'absolute',
    top: -5,
    left: 15,
    paddingHorizontal: 5,
    color: 'black',
    zIndex: 1,
    backgroundColor: 'white',
    margin: 4,
    //fontWeight:'bold'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black', // Change borderColor as needed
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10,
    margin: 2,
    justifyContent: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 2,
    borderRadius: 10,
    marginTop: 6,
  },
  datePickerButton: {
    fontSize: 17,
    color: '#5B0888',
    borderWidth: 1,
    borderColor: 'black',
    margin: 3,
    // padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    top: 5,
  },
  datePickerButtonText: {
    color: 'black',
    margin: 4,
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
  line: {
    height: 2,
    backgroundColor: 'black', // Adjust the color as needed
    marginVertical: 5,
  },
});
export default PersonalDetails;
