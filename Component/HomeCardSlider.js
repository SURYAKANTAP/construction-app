import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeCardSlider = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      text: 'Budgeting',
      subText: 'Tool to manage homebuilding expenses better',
      screen: 'Budgeting',
      image: require('../image/homeTabImage/budgeting.png'),
    },
    {
      id: 2,
      text: 'EMI Calculator',
      subText: 'Calculator EMI based on the loan period and interest rate',
      screen: 'EMI_Calculator',
      image: require('../image/homeTabImage/EMICalculator.png'),
    },
    {
      id: 3,
      text: 'Expense Tracker',
      subText: 'Tool to track, record and monitor construction expenses',
      screen: 'Expensetrack',
      image: require('../image/homeTabImage/expense.png'),
    },
    {
      id: 4,
      text: 'Permissions',
      subText: 'Checklists of permissions required for homebuilding',
      screen: 'Permissions',
      image: require('../image/homeTabImage/permission.png'),
    },
    {
      id: 5,
      text: 'Design Gallery',
      subText: 'Readymade 2D layouts to inspire home design',
      screen: 'DesignIdeas',
      image: require('../image/homeTabImage/designGallery.png'),
    },
    {
      id: 6,
      text: 'Style Quiz',
      subText: 'Quiz to identify your design preference for home exteriors',
      screen: 'StyleQuiz',
      image: require('../image/homeTabImage/styleQuiz.png'),
    },
    {
      id: 7,
      text: 'Styles',
      subText: 'Browse through style options for different house elements',
      screen: 'StylesCard',
      image: require('../image/homeTabImage/styles.png'),
    },
    {
      id: 8,
      text: 'Vaastu Compass',
      subText: 'Tool to check Vaastu compliance of the home',
      screen: 'EventsCard',
      image: require('../image/homeTabImage/compass.png'),
    },
    {
      id: 9,
      text: 'Vaastu Score',
      subText: 'Detailed report to check Vaastu compliance of the home',
      screen: 'VaastuScore',
      image: require('../image/homeTabImage/compassScore.png'),
    },
    {
      id: 10,
      text: 'Solar Savings Calculator',
      subText: 'Calculator to estimate solar potential and savings based',
      screen: 'SolarSavingsCalculator',
      image: require('../image/homeTabImage/solar-house.png'),
    },
    {
      id: 11,
      text: 'Events',
      subText:
        'Informational sessions by industry experts on homebuilding process',
      screen: 'EventsCard',
      image: require('../image/homeTabImage/schedule.png'),
    },
  ];

  const cardColors = [
    {backgroundColor: '#DBFEEA', borderColor: '#93E7BB'},
    {backgroundColor: '#FFF6BF', borderColor: '#F0EB94'},
    {backgroundColor: '#ACCEFC', borderColor: '#2A85EF'},
    {backgroundColor: '#E9CFEF', borderColor: '#851E87'},
    {backgroundColor: '#DBFEEA', borderColor: '#6BC193'},
    {backgroundColor: '#DADBF5', borderColor: '#242C78'},
    {backgroundColor: '#F0FFF0', borderColor: '#2ECC71'},
    {backgroundColor: '#FFF0F5', borderColor: '#FF1493'},
    {backgroundColor: '#F0F8FF', borderColor: '#1E90FF'},
    {backgroundColor: '#FFFACD', borderColor: '#FFD700'},
    {backgroundColor: '#F5F5DC', borderColor: '#DAA520'},
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../image/homeTabImage/dream_home.png')}
        style={{height: 200, width: '100%'}}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.knowMore}
        onPress={() => navigation.navigate('DBLHomeStudio')}>
        <Text style={{textAlign: 'center', color: '#2563EB'}}>Know More</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Explore All Utilities
        </Text>
        <Text>Tools that might come handy </Text>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[
              styles.cardContainer,
              cardColors[index % cardColors.length],
            ]}
            onPress={() => {
              navigation.navigate(item.screen);
            }}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.subText}>{item.subText}</Text>
          </TouchableOpacity>
        )}
      />

      <Image
        source={require('../image/homeTabImage/customer.png')}
        style={{height: 200, width: '100%'}}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.contact}
        onPress={() => navigation.navigate('Support')}>
        <Text style={{textAlign: 'center', color: '#2563EB'}}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  knowMore: {
    backgroundColor: '#fff',
    width: 100,
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: 150,
    left: 15,
  },
  contact:{
    backgroundColor: '#fff',
    width: 100,
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    top:650,
    left:15,
    position:'absolute'
  },
  card: {
    margin: 15,
  },

  cardContainer: {
    height: 200,
    width: 165,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    margin: 15,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    textAlign: 'center',
    margin: 5,
  },
});
export default HomeCardSlider;
