import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';
// import {ScrollView} from 'react-native-collapsible-tab-view';

const HomeVideoSlider = () => {
  const screenWidth = Dimensions.get('window').width;

  const calculateBorderWidth = videoWidth => {
    // You can adjust the percentage as needed
    const borderWidthPercentage = 2;
    return (videoWidth * borderWidthPercentage) / 100;
  };
  return (
    <View style={{backgroundColor:'#fff'}}>
    <View style={{margin: 10, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 30,color:'black'}}>Videos</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight:'bold',color: '#6528F7'}}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={{width: screenWidth-60, margin: 8,borderWidth:1,borderColor:'grey',height:280,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
          <Video
            source={require('../image/building.mp4')}
            style={{
              height: 200,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            // controls
            resizeMode="cover"
          />
          <Text style={{fontSize: 18, textAlign: 'center', color: 'black'}}>
            This is a home.
          </Text>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 8,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 10,
            }}>
            <TouchableOpacity onPress={() => console.log('Thumb Pressed')}>
              <Feather name="thumbs-up" size={25} color="#5B0888" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Eye Watch Pressed')}>
              <Feather name="eye" size={25} color="#5B0888" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Save Pressed')}>
              <Feather name="bookmark" size={25} color="#5B0888" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width: screenWidth-60, margin: 10,borderWidth:1,height:280,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
          <Video
            source={require('../image/building.mp4')}
            style={{
              height: 200,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            // controls
            resizeMode="cover"
          />
          <Text style={{fontSize: 18, textAlign: 'center', color: 'black'}}>
            This is a home .
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 8,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 10,
            }}>
            <TouchableOpacity onPress={() => console.log('Thumb Pressed')}>
              <Feather name="thumbs-up" size={25} color="#5B0888" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Eye Watch Pressed')}>
              <Feather name="eye" size={25} color="#5B0888" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Save Pressed')}>
              <Feather name="bookmark" size={25} color="#5B0888" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})
export default HomeVideoSlider;
