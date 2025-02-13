import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MenuScreen = () => {
  const navigation = useNavigation();

  const [showDetails, setShowDetails] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);
  const [subItemsVisible, setSubItemsVisible] = useState(false);

  const menuItems = [
    {
      name: 'My Details',
      icon: 'user',
      subItems: [{name: 'Personal Details', screen: 'PersonalDetails'}],
    },
    {name: 'My Sites', icon: 'globe'},
    {name: 'Rewards & referrals', icon: 'gift'},
    {name: 'Support', icon: 'headphones'},
    {name: 'Settings', icon: 'cogs'},
    {name: 'About', icon: 'info-circle'},
    {name: 'Rate us on the play store', icon: 'star'},
    {name: 'Log out', icon: 'sign-out'},
  ];

  const handleItemClick = item => {
    if (item.subItems) {
      setShowDetails(!showDetails);
      setShowSubItems(!showSubItems);
    } else if (item.screen) {
      navigation.navigate(item.screen);
    } else if (item.name === 'My Details') {
      setShowSubItems(!showSubItems);
      setSubItemsVisible(!subItemsVisible);
    } else if (item.name === 'My Sites') {
      navigation.navigate('MySites');
    } else if (item.name === 'Rewards & referrals') {
      navigation.navigate('Rewards');
    } else if (item.name === 'Support') {
      navigation.navigate('Support');
    } else if (item.name === 'Settings') {
      navigation.navigate('Settings');
    } else if (item.name === 'About') {
      navigation.navigate('About');
    } else if (item.name === 'Rate us on the play store') {
      // Show alert for rating
      Alert.alert(
        'You are being redirected',
       ' By clicking here,you will be accessing information outside the DBL App.Would you still like to continue?',
        [
          {
            text: 'No',
            onPress: () => console.log('No, Thanks Pressed'),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => console.log('Rate Now Pressed'), // Add your rating logic here
          },
        ],
        { cancelable: false }
      );
  }else if (item.name === 'Log out') {
    // Show alert when Log out is clicked
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'LOG OUT',
          onPress: () => console.log('OK Pressed'), // You can add your log out logic here
        },
      ],
      {cancelable: false},
    );
  }
  };

  const renderRightArrow = (item) => {
    if (item.name === 'My Details') {
      return <Icon name="angle-down" size={20} color="#000000" style={styles.arrowIcon} />;
    } else if (item.name !== 'Log out' && item.name !== 'Rate us on the play store') {
      return <Icon name="angle-right" size={20} color="#000000" style={styles.arrowIcon} />;
    }
    return null;
  };

  return (
    <ScrollView style={styles.scrollView}>
      {/* <View style={styles.container}> */}
      <View style={styles.menu1}>
        <Text style={styles.heading}>Menu</Text>
        <View>
        <View style={styles.menu}>
          <View style={styles.menuBox}>
          <View style={styles.imageContainer}>
          <Image
            source={require('../image/business.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
          />
           <Text style={styles.name}>User</Text>
        </View>
        <View style={styles.menuText}>
            {menuItems.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleItemClick(item)}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name={item.icon}
                      size={20}
                      color="#000000"
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuItemText}>{item.name}</Text>
                  {renderRightArrow(item)}
                </TouchableOpacity>

                {item.subItems && showDetails && (
                  <View style={styles.detailsDropdown}>
                    {item.subItems.map((subItem, subIndex) => (
                      <TouchableOpacity
                        key={subIndex}
                        style={styles.dropdownItem}
                        onPress={() => navigation.navigate(subItem.screen)}>
                        <Text style={styles.dropdownItemText}>
                          {subItem.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
      </View>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsDropdown: {
    flex:1,
    marginTop:10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownItemText: {
    color: '#000000',
    fontSize: 15,
  },
  scrollView: {
   // flex: 1,
    backgroundColor: 'white',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  // container: {
  //   //flex: 3,
  //   flexDirection: 'column',
  // },
  menu: {
    //backgroundColor: '#AC87C5',
    padding: 25,
    flex: 1,
    bottom:170,
  
  },
  menu1:{
    flex:2,
    //padding:25

  },
  name:{
    fontSize:15,
    bottom:70,
    color:'black'

  },
  heading: {
     fontSize: 25,
    color: 'white',
    //marginBottom: 10,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    flex:1
  },
  imageContainer: {
    //flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,

  },
  profileImage: {
    // width: '80%',
    //  width:150,
    height: 120,
    aspectRatio: 1,
    borderRadius: 55,
    bottom:80
  },
  menuBox: {
   // flex: 3,
    marginTop: 40,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    bottom:20,
  },
  menuText: {
    marginTop: 10,
    bottom:70
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,

  },
  menuItemText: {
    color: '#000000',
    fontSize: 15,
    flex: 1,
  },
});

export default MenuScreen;