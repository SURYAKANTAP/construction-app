import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const Card = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MaterialSearch');
          }}>
          <View style={styles.card}>
            <Image
              source={require('../image/homeTabImage/building_materials.png')}
              style={styles.material}
            />
            <Text
              style={{textAlign: 'center', color: 'black', fontWeight: '700'}}>
              Material Search
            </Text>
            <Text style={{textAlign: 'center', margin: 5}}>
              Find trustworthy vendors for quality construction materials for
              home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ExpertSearch');
          }}>
          <View style={styles.card.card2}>
            <Image
              source={require('../image/homeTabImage/expertHome.png')}
              style={styles.material}
            />
            <Text
              style={{textAlign: 'center', color: 'black', fontWeight: '700'}}>
              Expert Search
            </Text>
            <Text style={{textAlign: 'center', margin: 8}}>
              All home construction related queries resolved via experts near
              you
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <LinearGradient
          style={styles.site}
          colors={['#2563EBED', '#739AEFED']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.6, 1]}>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#fff'}}>
              Get Personalized Solution Offering
            </Text>
            <Text style={{color: 'black'}}>Create Your Site {'>'}</Text>
          </View>
          <Image
            source={require('../image/homeTabImage/map_home.png')}
            style={{width: 70, height: 70}}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    margin: 15,
    height: 200,
    width: 165,
    backgroundColor: '#DBFEEA',
    borderColor: '#93E7BB',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    card2: {
      margin: 15,
      height: 200,
      width: 165,
      backgroundColor: '#FFF6BF',
      borderColor: '#F0EB94',
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'space-evenly',
    },
  },
  material: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  site: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Card;
