import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Rewards = ({ navigation }) => {
  const handleCardPress = (cardTitle) => {
    // Handle card press logic here
    console.log(`Card pressed: ${cardTitle}`);
    // Navigate to the next screen here
    navigation.navigate('ReferHomeBuiders', { cardTitle });
  };

    const handleCardPress1 = (cardTitle) => { 
    console.log(`Card pressed: ${cardTitle}`);
    // Navigate to the next screen here
    navigation.navigate('ReferPartners', { cardTitle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How To Refer & earn?</Text>
      <Text style={styles.heading}>Utech Rewards & Referrals</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Refer a Home Builder or Partner to Utec and earn Referral and Reward Stars.
          You can use the following incentives.
        </Text>
      </View>
      <View>
        <Text style={styles.line}>Refer Services to Earn rewards</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={() => handleCardPress('Refer Home Builders')}>
          <View style={styles.card}>
            <Image source={require('../image/house.png')} style={styles.Image} resizeMode="cover" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCardPress1('Refer Partners')}>
          <View style={[styles.card, { marginLeft: 16 }]}>
            <Image source={require('../image/builderperson.png')} style={styles.Image} resizeMode="cover" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textBelowCardsContainer}>
        <Text style={styles.textBelowCards}>Refer Home Builders</Text>
        <Text style={styles.textBelowCards}>Refer Partners</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black'
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  line: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionContainer: {
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: 'black'
  },
  Image: {
    height: 100,
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    width: 180,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
  textBelowCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 17,
  },
  textBelowCards: {
    fontSize: 16,
    bottom: 16,
    color: 'black'
  },
});

export default Rewards;
