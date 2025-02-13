import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Slider from './Slider';

// Search Screen Component
const SearchScreen = ({navigation}) => {
  return <View style={styles.viewstyle}></View>;
};

// Menu Screen Component
const MenuScreens = ({navigation}) => {
  return <View style={styles.viewstyle}></View>;
};

const Stack = createNativeStackNavigator();
const MenuSearch = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../image/sliderBackGround.png')}
      style={styles.imgbg}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.DBLimage}>
        <Image source={require('../image/DLB.png')} style={styles.logo} />
      </View>
      <View style={styles.Images}>
        {/* <Image source={require("./images/image1.jpg")} style={{ width: 350, height:160, borderRadius:20}} /> */}
        <View style={styles.slider}>
          <Slider />
        </View>
      </View>
    </ImageBackground>
  );
};

const SliderBackGroundNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Redirect from SliderBackGround"
        component={MenuSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreens}
        options={{title: 'Menu'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 5,
    marginLeft: '75%',
    marginEnd: '-2%',
  },
  viewstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbg: {
    height: '45%',
    width: 405,
    marginLeft: -5,
  },

  logo: {
    width: 60,
    height: 60,
  },
  slider: {width: 350, height: 160, borderRadius: 20},

  DBLimage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '-10%',
  },
  Images: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
  },
});

export default SliderBackGroundNav;
