import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet,Button } from 'react-native';

const ImagePage = ({ navigation }) => {
  const [image, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false); // Hide the image after 4 seconds
      navigation.navigate('LoaderPage'); // Navigate to LoaderPage after hiding the image
      
    }, 4000); // 4000 milliseconds = 4 seconds

    // return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <View style={styling.container}>
      {image ? (
        <Image
        source={require('../image/DLB.png')} // Adjust the path as per your project structure
        style={styling.images}
        resizeMode="contain"
      />
      ) : null}
    </View>
  );
};

const styling = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#346EEC',
  },
  images: {
    width: 200,
    height: 200,
  },
});

export default ImagePage;