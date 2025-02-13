import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign'; // Import AntDesign icons from react-native-vector-icons

const ConceptDesignPackageScreen = ({ navigation }) => {
  const images = [
    require('../image/image1.jpg'),
    require('../image/image2.jpg'),
    require('../image/image3.jpg'),
    require('../image/image4.jpg'),
    // Add more images as needed
  ];

  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Image
          source={item}
          style={styles.carouselItemImage}
          resizeMode="cover" // Use "cover" to make the image touch the edges
        />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={400} // Adjust the width as needed
          itemWidth={400} // Adjust the width as needed
          loop
          autoplay
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Concept Design Package</Text>
          <Text style={styles.paragraph}>Get a conceptual 2D layout and 3D Elevations to visualize the interior
          design of your home as per your requirements and budget. This package will help you to efficiently plan 
          your home as per specifications provided by you, for your 2D layout. Thereafter with a 3D Design, you will
          also be able to view to exterior design of your home with more aesthetics.</Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>2D will be delivered in 3 working Days after your requirements are submitted
          and verified.3D will be delivered in 3 working days after the 2D layout is finalized and all your 3d requirements 
          are submitted and verified.</Text>
        
          <Text style={styles.additionalText1}>Starting</Text>
          <Text style={styles.additionalText2}>$3728/-</Text>
          <View style={styles.startingContainer}>
            <View style={styles.horizontalLine} />
          </View>
          
          {/* Sections with horizontal lines and dropdown */}
          <View>
            {/* <View style={styles.horizontalLine} /> */}
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>What is included?</Text>
              <TouchableOpacity onPress={() => console.log('What is included clicked')}>
                <Icon name="down" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>Add-ons</Text>
              <TouchableOpacity onPress={() => console.log('Add-ons clicked')}>
                <Icon name="down" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>How to get this service?</Text>
              <TouchableOpacity onPress={() => console.log('How to get this service clicked')}>
                <Icon name="down" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>Advantages</Text>
              <TouchableOpacity onPress={() => console.log('Advantages clicked')}>
                <Icon name="down" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          {/* You can add any content or components here */}
        </TouchableOpacity> 
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemContainer: {
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    marginTop: -110,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    marginBottom: 1,
  },
  Delivery:{
    fontSize: 20,
    marginTop: 8,
    marginBottom: 1,
  },
  paragraph2: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    marginBottom: 10,
  },
  additionalText1: {
    fontSize:16,
    marginTop: 1,
    
  },
  additionalText2: {
    fontSize: 16, // Adjust the font size as needed
    fontWeight: 'bold', // Specify the font weight for boldness
    color: 'black',
    marginBottom: 30,
  },
  startingContainer: {
    alignItems: 'center',
    marginTop: -1,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 10, // Reduced marginBottom
  },
  dropdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ConceptDesignPackageScreen;