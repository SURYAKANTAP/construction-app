import React from 'react';
import { ScrollView, View } from 'react-native';
import Card from './Card';
import Grid from './Grid';
import HomeCardSlider from './HomeCardSlider';
import HomeImageCarousel from './HomeImageCarousel';
import HomeTopNav from './HomeTopNav';

const HomeScreen = () => (
  <View style={{flex: 1,backgroundColor:'#2563eb'}}>
    <HomeTopNav />
    <ScrollView>
      <HomeImageCarousel />
      <View style={{margin: 10}}></View>
      <Card />
      <Grid />
      <HomeCardSlider />
    </ScrollView>
  </View>
);

export default HomeScreen;
