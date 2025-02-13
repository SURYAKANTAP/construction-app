import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const HomeImageCarousel = () => {
  const carouselData = [
    {id: '1', image: require('../image/home_slider/DBL2.png')},
    {id: '2', image: require('../image/home_slider/DBL.png')},
    {id: '3', image: require('../image/home_slider/DBL1.png')},
    {id: '4', image: require('../image/home_slider/DBL3.png')},
  ];

  const renderItem = ({item}) => (
    <Image
      source={item.image}
      style={styles.carouselImage}
      resizeMode="cover"
    />
  );

  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={require('../image/homeTabImage/Frame5_1.png')}  
        style={styles.backgroundImage}
      />
      {/* <View style={styles.mainContainerCarousel}>
      
      </View> */}
      <View style={{backgroundColor:'#fff',}}>
        <View style={{alignItems: 'center', bottom: 30}}>
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={340}
            loop
            autoplay
            autoplayInterval={4000}
          />
        </View>
        </View>
        <View style={{top:50}}></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerCarousel: {
    backgroundColor: '#2563eb',
    height: 70,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  backgroundImage:{
    flex:1,
    height:70,
    bottom:0,
    width:"100%",
    
    
  
  }
});

export default HomeImageCarousel;
