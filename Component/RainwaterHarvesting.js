import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';


const Harvesting = () => {
  
  const images = [
    require('../image/image29.jpg'),
    require('../image/image30.jpg'),
    require('../image/images31.jpg'),
    
  ];

  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Image
          source={item}
          style={styles.carouselItemImage}
          resizeMode="cover"
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
          sliderWidth={400}
          itemWidth={400}
          loop
          autoplay
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Rainwater Harvesting</Text>
          <Text style={styles.paragraph}>
            Utilize rainwater for daily use by recharging,storing & reusing the rain falling on your rooftops
          </Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>
            Approximately 7 days of confirmation from the customer via receipt of advance payment and the stage of construction is right.
          </Text>
          <Text style={styles.additionalText1}>Service cost</Text>
     
          <Text style={styles.additionalText2}>Quotation will be shared after site visit</Text>
          
          <View style={styles.startingContainer}>
          </View>

          <View>
          <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>HOW TO GET THIS SERVICE ?</Text>
              <TouchableOpacity
                onPress={() => console.log('clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>ADVANTAGES</Text>
              <TouchableOpacity onPress={() => console.log(' clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>CUSTOMER TESTIMONIALS</Text>
              <TouchableOpacity
                onPress={() => console.log('clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          

          <View style={styles.horizontalLine} />
          <View style={{marginTop: -1, marginLeft: 8}}>
            <Text>{'\n'}FREQUENTLY ASKED QUESTIONS</Text>
          </View>

          <View>
            <View style={styles.dropdownSection}>
              <Text style={styles.Title}>What is the process after raising the  {'\n'} service request?</Text>
              <TouchableOpacity onPress={() => console.log('clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title1, styles.textWithGap]}>
             What all will be covered in installation?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title2, styles.textWithGap]}>
              Is the Rain Water Harvesting system installation dependent on any 
              existing  {'\n'} or planned changes to the house? 
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>

         

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title4, styles.textWithGap]}>
              
              What will the service cost me?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine} />
          

          <View style={styles.Disclaimer}>
            <Text style={styles.heading2}>*Disclaimer.</Text>
            <Text style={styles.paragraph3}>
                1. The  service costs will depend upon your roof size, location of borewell or underground water 
                tank in your plot etc. and quotation will be shared by the service delivery partner. {'\n'}
                3. The final installation dates would depend on whether the stage of construction & site conditions are suitable. 
                
              
             
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 15,
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
    height: 305,
    marginTop: -10,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 3,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    paddingLeft: 3,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    marginBottom: 8,
    paddingLeft: 3,
  },
  Delivery: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 10,
    paddingLeft: 3,
  },
  paragraph2: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    marginBottom: 8,
    paddingLeft: 3,
  },
  additionalText1: {
    fontSize: 16,
    marginTop: 1,
    paddingLeft: 3,
  },
  additionalText2: {
    fontSize: 16,
    //fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    paddingLeft: 3,
  },
  startingContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingLeft: 3,
  },
  dropdownSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 3,
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 8,
    color: 'black',
    paddingLeft: 3,
  },
  Title1: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 1,
    color: 'black',
    paddingLeft: 3,
  },
  Title2: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 1,
    color: 'black',
    paddingLeft: 3,
  },
 
  Title4: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 3,
    color: 'black',
    paddingLeft: -1,
  },
  
  Disclaimer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingLeft: -1,
  },
  heading2: {
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'black',
    paddingLeft: 3,
  },
  paragraph3: {
    marginTop: 5,
    lineHeight: 15,
    fontStyle: 'italic',
    paddingLeft: 3,
  },
});

export default Harvesting;
