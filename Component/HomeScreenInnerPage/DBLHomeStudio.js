import React, { useState, useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const DBLHomeStudio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const handleDotPress = (index) => {
    swiperRef.current.scrollBy(index - currentIndex);
  };

  useEffect(() => {
    const autoSwipe = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 3;
      swiperRef.current.scrollBy(1);
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(autoSwipe);
    };
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={true}
        showsPagination={false}
        onIndexChanged={handleIndexChanged}
        horizontal={true}
      >
        <View style={styles.slide}>
          <Image source={require('../../image/image4.jpg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../image/dblstudio.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../image/dblstudio1.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
        <Image source={require('../../image/image20.jpg')} style={styles.image} />
        </View>
      </Swiper>
      <View style={styles.customDotsContainer}>
        {[0, 1, 2,3].map((index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.customDot,
              index === currentIndex ? styles.activeCustomDot : null,
            ]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'#e0e0e0',
    flex: 1,
    flexDirection: 'column',
  },
  slide: {
    flex:1,
    //justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#87CEEB',
    width: width,
    height: height,
    marginBottom:450,
  },
  image: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
    backgroundColor:'#87CEEB',
    marginTop:40,
  },
  customDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end', // Align items to the bottom
    position: 'absolute',
    bottom: 400, // Adjust bottom as needed
    left: 0,
    right: 0,
    
  },
  customDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    margin: 5,
   
  },
  activeCustomDot: {
    backgroundColor: '#87CEEB',
  },
});

export default DBLHomeStudio;