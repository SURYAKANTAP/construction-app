import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';

const Budgeting = () => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={25}
              color="#fff"
              style={{right: 125}}
            />
          </TouchableOpacity>
          <Text style={styles.textBudgeting}>Budgeting</Text>
        </View>
        <View style={styles.header1}>
          <AntDesign
            name="enviromento"
            size={18}
            color="#fff"
            style={{right: 50}}
          />
          <Text style={[styles.addressText, {right: 30}]}>
            DLF Cyber,Yt4,Bhubaneswar,...
          </Text>
          <TouchableOpacity>
            <Text style={styles.changeAddressText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../image/apartments.png')}
          resizeMode="center"
          style={styles.image}
        />
      </View>
      <Text style={styles.textHeading}>
        Enter the built-up area for construction
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter the area"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            width: '35%',
            height: 48,
            top: 15,
            backgroundColor: '#fff',
            right: 15,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'sq.ft.', value: 'sq.ft.'},
              {label: 'guntha', value: 'guntha'},
              {label: 'sq.meters', value: 'sq.meters'},
              {label: 'sq.yards', value: 'sq.yards'},
            ]}
            placeholder={{
              label: 'Select',
              value: 'sq.ft.',
              color: '#9EA0A4',
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Budgeting;

const pickerSelectStyles = {
  inputAndroid: {
    borderWidth: 5,
    borderColor: 'red',
  },
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    backgroundColor: '#5B0888',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  header1: {
    flexDirection: 'row',
  },
  textBudgeting: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  addressText: {
    color: '#fff',
  },
  changeAddressText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    left: 15,
  },
  imageContainer: {
    height: 100,
    width: 100,
    backgroundColor: '#B4D4FF',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
    overflow: 'hidden',
  },
  image: {
    height: 80,
    width: '100%',
  },
  textHeading: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  textInputContainer: {
    margin: 15,
    width: '55%',
  },
  TextInput: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  line: {
    height: 40,
    top: 19,
    right: 17,
    width: 1,
    backgroundColor: '#C7C8CC',
  },
  dropDownContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  dropDownText: {
    fontSize: 16,
    color: 'black',
  },
  button:{
    borderWidth:1,
    borderRadius:30,
    overflow:'hidden',
    width:'80%',
    left:40,
    backgroundColor:'#5B0888',
    alignItems:'center',
    top:350
  },
  continueText:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    top:11,
    height:50,
  }
});
