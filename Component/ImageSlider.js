import React, { useState, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const ImageSlider = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const images = [
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQfQchXupGWRDvmXd1oaYPjqWprsoUk0yIg&usqp=CAU' },
    { uri: 'https://bulk.ly/wp-content/uploads/2023/01/Social-Media-for-Interior-Design.png' },
    { uri: 'https://i.pinimg.com/originals/f7/c0/60/f7c06062d96da62a3262ea98a7fba908.png' },
    { uri: 'https://images.prismic.io/houzz/bfb4dcdb-2269-433e-9813-9acde769eaf1_walkthroughs.png?auto=compress,format' },
    // Add more image URLs here
  ];

  const handlePagination = (index) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  const handleGoBack = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      scrollToIndex(prevIndex);
      setActiveIndex(prevIndex);
    } else {
      navigation.navigate('OTPScreen'); // Navigate to OTP screen when on the first image
    }
  };

  const handleContinue = () => {
    if (activeIndex < images.length - 1) {
      const nextIndex = activeIndex + 1;
      scrollToIndex(nextIndex);
      setActiveIndex(nextIndex);
    } else {
      navigation.navigate('RegisterPage');
    }
  };

  

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  const renderSkipButton = () => {
    if (activeIndex < images.length - 1) {
      return (
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('RegisterPage')}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.leftSymbolContainer}>
          <TouchableOpacity onPress={handleGoBack}>
            <View style={styles.circle}>
              <Text style={styles.symbolText}>{'\u2190'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subHeading}>Design your home right</Text>
          <Text style={styles.textContent}>
            Get customized 2D plans and 3D elevations from qualified experts through DBL. Design services available, a click away.
          </Text>
        </View>
        <View style={styles.pagination}>
          {images.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.paginationDot, index === activeIndex ? styles.activeDot : null]}
              onPress={() => handlePagination(index)}
            />
          ))}
        </View>
        {renderSkipButton()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <View style={styles.rightSymbolContainer}>
        <TouchableOpacity onPress={handleContinue}>
          <View style={styles.circle}>
            <Text style={styles.symbolText}>{'\u2192'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    width: screenWidth,
    height: '100%',
    position: 'relative',
  },
  imageContainer: {
    width: screenWidth,
    height: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '45%',
    borderRadius: 10,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  textContent: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: 'black',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 80,
    width: '100%',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  leftSymbolContainer: {
    position: 'absolute',
    top: '80%',
    left: 4,
   
  },
  rightSymbolContainer: {
    position: 'absolute',
    top: '80%',
    right: 4,
  
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,  // Optional: Add border for better visibility
    borderColor: 'black', // Optional: Border color
  },
  symbolText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', // Center the text horizontally within the circle
  lineHeight: 20, // Center the text vertically within the circle 
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    right: 25,
    backgroundColor: '#346EEC',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    
  },
});

export default ImageSlider;