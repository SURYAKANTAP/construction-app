import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  Modal,
  Button,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const packages = [
  {
    id: '1',
    name: 'Concept Design Package',
    icon: 'rocket1',
    screen: 'ConceptDesignPackage',
  },
  {
    id: '2',
    name: 'Advanced Concept Design',
    icon: 'bulb1',
    screen: 'AdvancedConceptDesign',
  },
];

const Layout2DScreen = () => {
  const navigation = useNavigation();

  const images = [
    require('../image/home_slider/DBL.png'),
    require('../image/home_slider/DBL1.png'),
    require('../image/home_slider/DBL2.png'),
    require('../image/home_slider/DBL3.png'),
  ];

  const testimonials = [
    {
      id: '1',
      userImage: require('../image/R.png'),
      rating: 4.5,
      message:
        'The 3D Elevation service transformed our vision into a beautiful reality. The team was professional and attentive to our needs, ensuring every detail was perfectly executed.',
    },
    {
      id: '2',
      userImage: require('../image/R.png'),
      rating: 4.8,
      message:
        'I am very satisfied with the 3D Elevation service. The designs were beautiful, and the process was seamless. Highly recommended for anyone looking for quality work.',
    },
    {
      id: '3',
      userImage: require('../image/R.png'),
      rating: 4.7,
      message:
        'Excellent service from start to finish! The team listened to my needs and delivered exactly what I had envisioned. Very impressed with the quality of the final results.',
    },
    {
      id: '4',
      userImage: require('../image/R.png'),
      rating: 4.9,
      message:
        'The team was amazing! They provided me with multiple options and guided me through the entire process. The 3D elevations helped me visualize my dream home perfectly.',
    },
  ];

  const [isIncludeDropdownOpen, setIsIncludeDropdownOpen] = useState(false);
  const [isAddOnDropdownOpen, setIsAddOnDropdownOpen] = useState(false);

  const [selectedAddOn, setSelectedAddOn] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFivthDropdownOpen, setIsFivthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  const [isAdvantageDropdownOpen, setIsAdvantageDropdownOpen] = useState(false);
  const [isCustomerTestimonialOpen, setIsCustomerTestimonialOpen] =
    useState(false);

  const toggleIncludeDropdown = () => {
    setIsIncludeDropdownOpen(!isIncludeDropdownOpen);
  };
  const toggleAddOnDropdown = () => {
    setIsAddOnDropdownOpen(!isAddOnDropdownOpen);
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
  const toggleFivthDropdown = () => {
    setIsFivthDropdownOpen(!isFivthDropdownOpen);
  };

  const toggleSixthDropdown = () => {
    setIsSixthDropdownOpen(!isSixthDropdownOpen);
  };

  const toggleSeventhDropdown = () => {
    setIsSeventhDropdownOpen(!isSeventhDropdownOpen);
  };

  const toggleAdvantageDropdown = () => {
    setIsAdvantageDropdownOpen(!isAdvantageDropdownOpen);
  };
  const toggleCustomerTestimonial = () => {
    setIsCustomerTestimonialOpen(!isCustomerTestimonialOpen);
  };

  const toggleModal = addOn => {
    setSelectedAddOn(addOn);
    setModalVisible(!isModalVisible);
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

  // Use useFocusEffect to hide bottom tab bar on screen focus
  useFocusEffect(
    React.useCallback(() => {
      // Function to hide the tab bar when screen is focused
      const hideTabBar = () => {
        navigation.setOptions({
          tabBarVisible: false,
        });
      };

      // Call the function to hide the tab bar
      hideTabBar();

      // Return a cleanup function to show the tab bar when leaving the screen
      return () => {
        navigation.setOptions({
          tabBarVisible: true,
        });
      };
    }, [navigation]), // Include navigation in the dependencies array
  );

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
          <Text style={styles.heading}>2D Layout</Text>
          <Text style={styles.paragraph}>
            Get a conceptual 2D layout of your new home as per your
            requirements.
          </Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>
            3 Working Days (After your requirements are submitted and verified)
          </Text>

          <Text style={styles.additionalText1}>Starting</Text>
          <Text style={styles.additionalText2}>₹1610/-</Text>
          <View style={styles.startingContainer}>
            <View style={styles.horizontalLine} />
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleIncludeDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={styles.sectionTitle}>SAMPLE DELIVERY</Text>

                <Icon
                  name={isIncludeDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isIncludeDropdownOpen && (
              <View style={styles.cardsContainer}>
                {/* First card */}
                <View style={styles.cardContainer}>
                  <Pressable
                    style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={require('../image/image15.jpg')} // Change this to the path of your image
                        style={styles.image12}
                      />
                    </View>
                    <View
                      style={{marginLeft: 10, justifyContent: 'flex-start'}}>
                      <TouchableOpacity>
                        <Text style={styles.cardText}>VIEW PROJECT</Text>
                      </TouchableOpacity>
                    </View>
                  </Pressable>
                </View>

                {/* Second card */}
                <View style={styles.cardContainer}>
                  <Pressable
                    style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={require('../image/image21.jpg')} // Change this to the path of your image
                        style={styles.image12}
                      />
                    </View>
                    <View
                      style={{marginLeft: 10, justifyContent: 'flex-start'}}>
                      <TouchableOpacity>
                        <Text style={styles.cardText}>VIEW PROJECT</Text>
                      </TouchableOpacity>
                    </View>
                  </Pressable>
                </View>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleAddOnDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={styles.sectionTitle}>ADD-ONS</Text>

                <Icon
                  name={isAddOnDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isAddOnDropdownOpen && (
              <View style={styles.boxContainer1}>
                <Pressable
                  style={styles.box}
                  onPress={() => toggleModal('Additional 2D Design Option')}>
                  <Image
                    source={require('../image/image21.jpg')} // Change this to the path of your image
                    style={styles.image13}
                  />
                  <Text style={styles.boxText}>
                    Additional 2D Design Option
                  </Text>
                  <Text style={styles.boxtext12}>Get an additional con...</Text>
                </Pressable>

                <Pressable
                  style={styles.box}
                  onPress={() => toggleModal('3D Furniture Layout')}>
                  <Image
                    source={require('../image/image15.jpg')} // Change this to the path of your image
                    style={styles.image13}
                  />
                  <Text style={styles.boxText}>3D Furniture Layout</Text>
                  <Text style={styles.boxtext12}>
                    Get a 3D view of all floors fo...
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.box}
                  onPress={() => toggleModal('2D Print')}>
                  <Image
                    source={require('../image/image15.jpeg')} // Change this to the path of your image
                    style={styles.image13}
                  />
                  <Text style={styles.boxText}>2D Print</Text>
                  <Text style={styles.boxtext12}>
                    Get a print of the home d...
                  </Text>
                </Pressable>
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
                      Furniture layout
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
                    Vaastu compliant designs
                  </Text>
                </View>

                <View style={styles.boxContainer13}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon name={packages[1].icon} size={40} color="white" />
                  </View>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    Home design considering future needs
                  </Text>
                </View>

                <View style={styles.boxContainer14}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon name={packages[1].icon} size={40} color="white" />
                  </View>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    2 free minor reworks
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.CustomerDropdownContent}>
              {/* Advantage dropdown content goes here */}
              {/* New CUSTOMER TESTIMONIAL dropdown */}
              <Pressable
                style={styles.dropDownHeader}
                onPress={toggleCustomerTestimonial}>
                <Text style={styles.sectionTitle}>CUSTOMER TESTIMONIAL</Text>
                <Text style={styles.dropdownArrow}>
                  {isCustomerTestimonialOpen ? (
                    <Icon name="up" size={20} />
                  ) : (
                    <Icon name="down" size={20} />
                  )}
                </Text>
              </Pressable>
              {isCustomerTestimonialOpen && (
                <View style={styles.testimonialsContainer}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {testimonials.map(testimonial => (
                      <View key={testimonial.id} style={styles.testimonialCard}>
                        <Image
                          source={testimonial.userImage}
                          style={styles.userImage}
                        />
                        <Text style={styles.rating}>
                          {'⭐️'.repeat(Math.floor(testimonial.rating))}
                        </Text>
                        <Text style={styles.message}>
                          {testimonial.message}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              )}
            </View>
          </View>

          {/* Modal for ADD-ONS */}
          <Modal visible={isModalVisible} transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add-On Details</Text>
                <Text style={styles.modalDescription}>
                  You have selected: {selectedAddOn}
                </Text>
                <Button
                  title="Download"
                  onPress={() => alert('Downloading...')}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={toggleModal}>
                  <Icon name="close" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.horizontalLine} />
          <View style={{marginTop: 5, marginLeft: 8}}>
            <Text>{'\n'}FREQUENTLY ASKED QUESTIONS</Text>
          </View>

          <View>
            {/* First Dropdown */}
            <Pressable onPress={toggleFirstDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={styles.Title}>What is a 2D Layout Service?</Text>

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
                  A 2D Layout service requested via the DBL App means requesting
                  for a 2D Layout to be made as per your home building
                  requirement by design experts.
                </Text>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleSecondDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title1, styles.textWithGap]}>
                  How do I avail a 2D Layout service?
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
                  You can raise a 2D Layout service request by visiting the home
                  page on the App. Select "2D Layout" and click on the "Request
                  Service" button, fill up the mandatory details about your plot
                  and continue to raise the service request.
                </Text>
              </View>
            )}
          </View>
          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleThirdDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title2, styles.textWithGap]}>
                  What is the process after raising {'\n'}a request?
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
                  After the service is raised with DBL, you can give the
                  detailed requirements via the app or request a call from our
                  executive to collect the requirements via a phone call. The
                  DBL expert will call you as per the appointment scheduled by
                  you, to collect or verify the relevant data to start the
                  designing process.
                </Text>
              </View>
            )}
          </View>
          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleFourthDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title3, styles.textWithGap]}>
                  What will be delivered as part of 2D Layout?
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
                  You will receive 1 design with furniture layout of all floors.
                </Text>
              </View>
            )}
          </View>
          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleFivthDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title4, styles.textWithGap]}>
                  {' '}
                  Will it be possible to make changes {'\n'} in the 2D Layout?
                </Text>

                <Icon
                  name={isFivthDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isFivthDropdownOpen && (
              <View>
                <Text style={styles.dropdownText3}>
                  For 2D Layout delivered by DBL, you can avail up to reworks
                  within 30 days of the previous delivery. In order to make
                  changes to your 2D Layout, please call our customer care on
                  18002668823. They will assist you to book an appointment with
                  the DBL experts to collect the data for changes.
                </Text>
              </View>
            )}
          </View>
          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleSixthDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title5, styles.textWithGap]}>
                  {' '}
                  What is the cost of availing a 2D Layout {'\n'} service?
                </Text>

                <Icon
                  name={isSixthDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isSixthDropdownOpen && (
              <View>
                <Text style={styles.dropdownText4}>
                  The cost of the 2D Layout service is calculated on the basis
                  of plot specifications like Plot area and no. of floors. After
                  filling the necessary details, the service cost will be
                  calculated.
                </Text>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <Pressable onPress={toggleSeventhDropdown}>
              <View style={styles.dropdownSection}>
                <Text style={[styles.Title5, styles.textWithGap]}>
                  {' '}
                  What is not considered to be a minor/valid {'\n'} rework?
                </Text>

                <Icon
                  name={isSeventhDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {isSeventhDropdownOpen && (
              <View>
                <Text style={styles.dropdownText4}>
                  Cases where plot area changes, or shared wall changes, or no.
                  of floors changes. Any case where a new plot layout is
                  provided, isn't also considered as a valid rework. More than 2
                  minor reworks are also not provided.
                </Text>
              </View>
            )}
          </View>

          <View style={styles.Disclaimer}>
            <Text style={styles.heading2}>*Disclaimer.</Text>
            <Text style={styles.paragraph3}>
              {' '}
              DBL is a digital platform which connects individual home builders
              with qualified architects and engineers. DBL provides concept
              designs by engaging such qualified professionals. DBL does not
              provide any structural consultancy services, and home builders are
              advised to seek a professional opinion from any independent
              practitioner for further construction needs.
            </Text>
          </View>

          <View style={{marginTop: 15, marginBottom: 10, marginLeft: 1}}>
            <Text style={{fontSize: 16, color: 'black', marginBottom: 10}}>
              RECOMMENDED PACKAGES FOR YOU
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
            {/* Render the first box */}
            <TouchableOpacity
              style={[
                styles.box23,
                {
                  flex: 0.4, // Adjust flex to make it smaller
                  marginRight: 25, // Add marginRight to create a gap
                  backgroundColor: 'white', //#346EEC
                },
              ]}
              onPress={() => navigation.navigate(packages[0].screen)}>
              <View style={styles.boxContent}>
                <View style={[styles.iconContainer23, {width: 80, height: 80}]}>
                  <Icon name={packages[0].icon} size={40} color="white" />
                </View>
                <Text style={styles.packageName}>{packages[0].name}</Text>
              </View>
            </TouchableOpacity>

            {/* Render the second box */}
            <TouchableOpacity
              style={[
                styles.box23,
                {
                  flex: 0.4, // Adjust flex to make it smaller
                  backgroundColor: 'white',
                },
              ]}
              onPress={() => navigation.navigate(packages[1].screen)}>
              <View style={styles.boxContent}>
                <View style={[styles.iconContainer23, {width: 80, height: 80}]}>
                  <Icon name={packages[1].icon} size={40} color="white" />
                </View>
                <Text style={styles.packageName}>{packages[1].name}</Text>
              </View>
            </TouchableOpacity>
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

    resizeMode: 'contain',
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
    //color: 'black',
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
    //color: 'black',
    marginBottom: 10,
    paddingLeft: 3,
  },
  additionalText1: {
    fontSize: 16,
    marginTop: 8,
    paddingLeft: 3,
  },
  additionalText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    paddingLeft: 3,
  },
  startingContainer: {
    alignItems: 'center',
    marginTop: 1,
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
  Disclaimer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingLeft: -1,
  },
  heading2: {
    fontWeight: '500',
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
  box: {
    width: 140, // Adjust width of the container
    height: 245, // Adjust height of the container
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10, // Adjust padding to fit the content
    paddingVertical: 10, // Adjust padding to fit the content
    borderRadius: 10, // Adjust borderRadius to make it round
    marginBottom: 28,
    margin: 13,
    borderWidth: 0.5,
  },
  boxContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  packageName: {
    fontSize: 14, // Adjust font size to fit the content
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    // Adjust spacing between icon and text
  },

  bottomButton: {
    backgroundColor: '#346EEC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20, // Adjust margin bottom to give space between button and content
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },

  cardsContainer: {
    marginTop: 10, // Add marginTop for separation from other sections
    flex: 1,
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: '#F3F4F6',
    height: 200,
    width: '45%',
    borderRadius: 15,
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 12,
    borderColor: 'grey', // Add border color to the card container
    //borderWidth: 1, // Add border width for the card container
  },
  iconContainer: {
    height: 150,
    width: 160,
    backgroundColor: '#FFEAD2',
    marginRight: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15, // Make it a perfect circle
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
    marginLeft: 5,
    borderColor: '#fff',
    borderColor: '#346EEC', // Add border color to the icon container
    borderWidth: 1,
    marginBottom: 12, // Add border width for the icon container
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
  image12: {
    height: 150,
    width: 160,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image13: {
    height: 110,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 5,
    marginTop: 5,
  },

  cardText: {
    fontSize: 17,
    //fontWeight: 'bold',
    color: 'orange',
    marginRight: 5,
  },
  additionalText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
  },

  boxContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 8, // Add margin bottom for separation between boxes
  },
  box1: {
    //flex:1,
    width: '35%', // Adjust width of the box
    height: 45, // Adjust height of the box
    backgroundColor: '#F3F4F6', // Adjust background color of the box
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Adjust border radius of the box to make it half of the height
    borderWidth: 2, // Add border width for the box
    borderColor: '#346EEC', // Add border color for the box for the box
    marginLeft: 5,
  },
  box23: {
    width: 150, // Adjust width of the container
    height: 175, // Adjust height of the container
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#346EEC',
    paddingHorizontal: 10, // Adjust padding to fit the content
    paddingVertical: 10, // Adjust padding to fit the content
    borderRadius: 5, // Adjust borderRadius to make it round
    marginBottom: 13,
    margin: 13,
    borderWidth: 0.5,
  },
  boxText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5, // Adjust text color of the box
  },
  boxtext12: {
    fontSize: 16,
    margin: 5,
  },
  advantageDropdownContent: {
    //backgroundColor: 'white',
    height: 270,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    justifyContent: 'space-between',
    margin: 10,
  },
  boxContainer11: {
    height: 105,
    //backgroundColor:'white',
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer12: {
    height: 105,
    //backgroundColor:'white',
    width: 111,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer13: {
    height: 105,
    //backgroundColor:'white',
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer14: {
    height: 105,
    //backgroundColor:'white',
    width: 111,
    margin: 10,
    alignItems: 'center',
  },
  testimonialsContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  testimonialCard: {
    width: 300,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
  },
  rating: {
    marginTop: 10,
    textAlign: 'center',
    color: 'orange',
    fontSize: 18,
  },
  message: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
  },
  dropdownTitle: {
    fontSize: 14,
    color: 'black',
  },
  dropdownArrow: {
    fontSize: 17,
    color: '#346EEC',
    paddingRight: 10,
  },
  dropDownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 3,
    marginTop: 10,
    marginBottom: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Layout2DScreen;
