import React, { useState } from 'react';
  import { StyleSheet, Text, View,ScrollView ,Image,Dimensions, TouchableOpacity } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';


  const { width: screenWidth } = Dimensions.get('window');

  const data = [
    { label: 'Cancel', value: '1' },
    { label: 'Completed', value: '2' },
    { label: 'In Progress', value: '3' },
    { label: 'Request Incomplete', value: '4' },
    { label: 'Request Under Review', value: '5' },
    { label: 'Rework In-Progress', value: '6' },
    { label: 'Service Issue Raised', value: '7' },
   
  ];

  const Servicerequest = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>

          </Text>
        );
      }
      return null;
    };
    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#2563EB' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'All': 'All'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? '#2563EB' : '#2563EB'}
              name=""
              size={20}
            />
          )}
        />
      
  
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Approvals & permissions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>design & Planing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Civil & structural engineering</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Civil construction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>plumbing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Water proofing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Eletrical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Painting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Interior Designing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyl}>
            <Text style={styles.buttontext}>Speciality Home building services</Text>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
      <Image source={require('../image/Noreasult.png')}
       style={{
        marginTop:30,
      borderRadius:1,
        width:screenWidth,
        height: 300,
        resizeMode: 'contain',
       
        //alignContent:'center',
      }} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: '',
      padding: 0,
      
    },
    dropdown: {
  
      margineTop: 100,
      height: 50,
      width:150,
      borderColor: '#2563EB',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 8,
      margin:10,
      
      // marginEnd: 200,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      // zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    buttonstyl:{
      backgroundColor: '#739AEFED',
      height:40,
      padding: 8,
      paddingRight:15,
      paddingLeft:15,
      margin: 5,
      borderRadius:10,
    },
    buttontext:{
      color: 'black',
      fontSize:14,
      fontWeight:'500',
    }
  });


  export default Servicerequest ;
