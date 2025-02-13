import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';

const Harvesting = () => {
  const images = [
    require('../image/home_slider/DBL.png'),
    require('../image/home_slider/DBL1.png'),
    require('../image/home_slider/DBL2.png'),
    require('../image/home_slider/DBL3.png'),
  ];

  const packages = [
    {
      id: '1',
      name: ' Advance Concept  Design  Package',
      icon: 'rocket1',
      screen: 'AdvancedConceptDesign',
    },
    {
      id: '2',
      name: 'Visualization Package',
      icon: 'bulb1',
      screen: 'VisualizationPackage',
    },
  ];

  const [isHowDropdownOpen, setIsHowDropdownOpen] = useState(false);
  const [isAdvantageDropdownOpen, setIsAdvantageDropdownOpen] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);

  const toggleHowDropdown = () => {
    setIsHowDropdownOpen(!isHowDropdownOpen);
  };

  const toggleAdvantageDropdown = () => {
    setIsAdvantageDropdownOpen(!isAdvantageDropdownOpen);
  };

  const toggleFirstDropdown = () => {
    setIsFirstDropdownOpen(!isFirstDropdownOpen);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
  };

  const toggleThirdDropdown = () => {
    setIsThirdDropdownOpen(!isThirdDropdownOpen);
  };

  const toggleFourthDropdown = () => {
    setIsFourthDropdownOpen(!isFourthDropdownOpen);
  };

  const renderCarouselItem = ({item}) => {
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
          <Text style={styles.heading}>Solar Service</Text>
          <Text style={styles.paragraph}>
            Get sustainable with our solar rooftop solutions for your home
          </Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>
            Approximately 7 days of confirmation from the customer via receipt
            of advance payment and the stage of construction is right.
          </Text>
          <Text style={styles.additionalText1}>Service cost</Text>

          <Text style={styles.additionalText2}>
            Quotation will be shared after site visit
          </Text>

          <View style={styles.startingContainer}></View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleHowDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={styles.sectionTitle}>
                  HOW TO GET THIS SERVICE?
                </Text>

                <Icon
                  name={isHowDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isHowDropdownOpen && (
              <View style={styles.howToGetServiceContent}>
                {/* Checkpoints content */}
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    Submit your roof area, presence of tree building shade on
                    the plot along with stage of construction of your house to
                    raise the request
                  </Text>
                </View>
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    Share the preferred time and date for call to be scheduled
                  </Text>
                </View>
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    The respective service delivery partner will call you for
                    taking your journey ahead
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleAdvantageDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={styles.sectionTitle}>ADVANTAGES</Text>

                <Icon
                  name={isAdvantageDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>

            {isAdvantageDropdownOpen && (
              <View style={styles.advantageDropdownContent}>
                {/* Advantage dropdown content goes here */}
                <View style={styles.boxContainer11}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon name={packages[1].icon} size={40} color="white" />
                  </View>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 16,
                      }}>
                      Attractive Savings
                    </Text>
                  </View>
                </View>

                <View style={styles.boxContainer12}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon name={packages[1].icon} size={40} color="white" />
                  </View>

                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    Durability
                  </Text>
                </View>

                <View style={styles.boxContainer13}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon name={packages[1].icon} size={40} color="white" />
                  </View>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    Curated Solutions
                  </Text>
                </View>

                <View style={styles.boxContainer14}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon name={packages[1].icon} size={40} color="white" />
                  </View>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    Sustainability
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.horizontalLine} />
          <View style={{marginTop: 5, marginLeft: 8}}>
            <Text>{'\n'}FREQUENTLY ASKED QUESTIONS</Text>
          </View>

          <View>
            {/* First Dropdown */}
            <Pressable onPress={toggleFirstDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={styles.Title}>
                  What is a Grid Connected Rooftop Solar System and an off-grid
                  Rooftop Solar{'\n'}System?
                </Text>

                <Icon
                  name={isFirstDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isFirstDropdownOpen && (
              <View>
                <Text style={styles.titleStyle}>
                  The grid connected rooftop- solar system is where the system
                  is connected to the grid.
                </Text>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleSecondDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title1, styles.textWithGap]}>
                  Why do I need shadow-free area for modules?
                </Text>

                <Icon
                  name={isSecondDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isSecondDropdownOpen && (
              <View>
                <Text style={styles.dropdownText}>
                  Solar modules (and cells within) need uninterrupted sunlight
                  to produce maximum electrical energy. With the shadow even on
                  a part of the module, the generation reduces to a great extent
                  thereby wasting installed system capacity Also, prolonged
                  (regular, though intermittent) shadow on some cells or modules
                  reduces their life substantially and these become useless much
                  before their standard life of over 25 years.
                </Text>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleThirdDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title2, styles.textWithGap]}>
                  How much area is required to install a rooftop solar system?
                </Text>

                <Icon
                  name={isThirdDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isThirdDropdownOpen && (
              <View>
                <Text style={styles.dropdownText1}>
                  This would depend on various factors such as the shadow-free
                  area available, the orientatior of the roof etc., however, as
                  a thumb rule, we can assume 1kW plant requires 12 sq. meters
                  (120-130 sq ft) of shade-free area.
                </Text>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleFourthDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title3, styles.textWithGap]}>
                  What are the approvals needed to install a rooftop solar
                  system?
                </Text>

                <Icon
                  name={isFourthDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isFourthDropdownOpen && (
              <View>
                <Text style={styles.dropdownText2}>
                  This would depend on various factors such as the shadow-free
                  area available, the orientatior of the roof etc., however, as
                  a thumb rule, we can assume 1kW plant requires 12 sq. meters
                  (120-130 sq ft) of shade-free area.
                </Text>
              </View>
            )}
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.Disclaimer}>
            <Text style={styles.heading2}>*Disclaimer.</Text>
            <Text style={styles.paragraph3}>
              1. The service costs will be shared by service provider and
              depends upon: {'\n'}
              a. Type of connection: off-grid system or on-grid system, {'\n'}
              b.The number of solar panels getting installed, depending upon
              your family's electricity usage patterns, and {'\n'}
              c. the availability of area on your rooftop for installation of
              solar panels {'\n'}
              2. The final installation dates would depend on whether the stage
              of construction & site conditions are suitable.
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
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    height: 315,
  },
  carouselItemImage: {
    width: '100%',
    height: 250,
    marginTop: -65,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -40,
    marginBottom: 10,
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
  iconContainer23: {
    backgroundColor: '#346EEC',
    marginRight: 5,
    borderRadius: 50,
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
    marginLeft: 5,
    borderColor: '#fff',
    borderColor: '#346EEC', // Add border color to the icon container
    borderWidth: 1,
    marginBottom: 12,
    // Add border width for the icon container
  },
  advantageDropdownContent: {
    //backgroundColor: 'white',
    height: 290,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    justifyContent: 'space-between',
    //margin: 10,
  },
  boxContainer11: {
    height: 120,
    //backgroundColor:'white',
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer12: {
    height: 120,
    //backgroundColor:'white',
    width: 111,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer13: {
    height: 120,
    //backgroundColor:'white',
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer14: {
    height: 120,
    //backgroundColor:'white',
    width: 111,
    margin: 10,
    alignItems: 'center',
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
    marginBottom: 30,
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
  howToGetServiceContent: {
    padding: 10,
    marginHorizontal: 8,
  },
  checkpoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkpointCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginRight: 10,
  },
  checkpointText: {
    fontSize: 14,
    color: 'black',
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
    fontWeight: '600',
    color: '#333',
    paddingLeft: 3,
  },
  Title: {
    fontSize: 16,
    fontWeight: '500',
    top: 8,
    color: 'black',
    paddingLeft: 3,
  },
  titleStyle: {
    fontSize: 14,
    paddingLeft: 7,
    marginTop: 5,
  },

  Title1: {
    fontSize: 16,
    fontWeight: '500',
    top: 1,
    color: 'black',
    paddingLeft: 3,
  },
  dropdownText: {
    fontSize: 14,
    paddingLeft: 7,
    marginTop: 5,
  },

  Title2: {
    fontSize: 16,
    fontWeight: '500',
    top: 1,
    color: 'black',
    paddingLeft: 3,
  },
  dropdownText1: {
    fontSize: 14,
    paddingLeft: 7,
    marginTop: 5,
  },
  Title3: {
    fontSize: 16,
    fontWeight: '500',
    top: 3,
    color: 'black',
    paddingLeft: 3,
  },
  dropdownText2: {
    fontSize: 14,
    paddingLeft: 7,
    marginTop: 5,
  },
  Title4: {
    fontSize: 16,
    fontWeight: '500',
    top: 3,
    color: 'black',
    paddingLeft: -1,
  },
  dropdownText3: {
    fontSize: 14,
    paddingLeft: 7,
    marginTop: 5,
  },
  Title5: {
    fontSize: 16,
    fontWeight: '500',
    top: 3,
    color: 'black',
    paddingLeft: -1,
  },
  dropdownText4: {
    fontSize: 14,
    paddingLeft: 7,
    marginTop: 5,
  },
});

export default Harvesting;
