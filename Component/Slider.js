import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { uri: 'https://i.pinimg.com/originals/15/80/00/158000569778be8206e39ee8af249028.jpg' },
    { uri: 'https://assets.onejswhomes.com/Contact_us_now_f4463801bc/Contact_us_now_f4463801bc.jpeg' },
    { uri: 'https://www.reliablebuilderstvm.in/wp-content/uploads/2021/05/H.2-1024x480.jpg' },
    { uri: 'https://homezonline.in/wp-content/uploads/2022/07/Charming-single-floor-home.jpg' },
    
  ];

  const handlePagination = (index) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const slideIndex = Math.floor(
            event.nativeEvent.contentOffset.x / screenWidth + 0.5
          );
          setActiveIndex(slideIndex);
        }}
      />
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:300,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slideContainer: {
    width: screenWidth,
    height: '100%',
    position: 'relative',
  },
  imageContainer: {
    width: screenWidth,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // borderRadius: 10,
    // borderBottomRightRadius:15,
    // borderBottomLeftRadius:15,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
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
 
});

export default Slider;