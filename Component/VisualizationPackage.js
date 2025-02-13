
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import Icon1 from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const packages = [
  {
    id: '1',
    name: 'Concept  Design  Package',
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

const VisualizationPackage = () => {
  const [showDropdown1, setShowDropdown1] = useState(false); // State for first dropdown
  const [showDropdown2, setShowDropdown2] = useState(false); // State for second dropdown
  const [showDropdown3, setShowDropdown3] = useState(false); // State for third dropdown
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);
  const [showDropdown8, setShowDropdown8] = useState(false);
  const [showDropdown9, setShowDropdown9] = useState(false);
  const [showDropdown10, setShowDropdown10] = useState(false);
  const navigation = useNavigation();

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

  const images = [
    require('../image/home_slider/DBL.png'),
    require('../image/home_slider/DBL1.png'),
    require('../image/home_slider/DBL2.png'),
    require('../image/home_slider/DBL3.png'),
  ];

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
          <Text style={styles.heading}> Visualization Package</Text>
          <Text style={styles.paragraph}>
            Get a conceptual 2D layout and 3D Elevations to visualize the
            interior design of your home as per your requirements and budget.
            This package will help you to efficiently plan your home as per
            specifications provided by you, for your 2D layout. Thereafter with
            a 3D Design, you will also be able to view to exterior design of
            your home with more aesthetics.After this, the VR experience will
            help you visualize & experience your home virtually. This will help
            you finalize your design and reduce any chances of rework.
          </Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>
            2D will be delivered in 3 working Days after your requirements are
            submitted and verified.3D will be delivered in 3 working days after
            the 2D layout is finalized and all your 3d requirements are
            submitted and verified.VR will be delivered in 5 working days after
            the 3D elevation is finalized and all your VR requirements are
            submitted and verified.
          </Text>

          <Text style={styles.additionalText1}>Starting</Text>
          <Text style={styles.additionalText2}>₹5338/-</Text>
          <View style={styles.startingContainer}>
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.card}>
            <Pressable onPress={() => setShowDropdown1(!showDropdown1)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>WHAT IS INCLUDED?</Text>
                <Icon
                  name={
                    showDropdown1
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown1 && (
              <View style={{height: 270}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    borderRadius: 10,
                    borderWidth: 0.5,
                  }}>
                  <Image
                    source={require('../image/image21.jpg')} // Change this to the path of your image
                    style={styles.image50}
                  />
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        paddingTop: 5,
                        paddingLeft: 8,
                      }}>
                      Virtual Reality Experience
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        paddingLeft: 10,
                        paddingTop: 5,
                        paddingRight: 5,
                      }}>
                      Get an immersive VR experience to visualize how your home
                      will look from the outside and inside before ti is built.
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    borderRadius: 10,
                    borderWidth: 0.5,
                  }}>
                  <Image
                    source={require('../image/image21.jpg')} // Change this to the path of your image
                    style={styles.image50}
                  />
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        paddingTop: 5,
                        paddingLeft: 8,
                      }}>
                      3D Elevation
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        paddingLeft: 10,
                        paddingTop: 5,
                        paddingRight: 5,
                      }}>
                      Get conceptual 3D Elevations to visualise the exterior
                      design of your home as per your requirements and budget.
                    </Text>
                  </View>
                </View>
              </View>
            )}
            <View style={styles.line} />

            <Pressable onPress={() => setShowDropdown2(!showDropdown2)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>ADD-ONS</Text>
                <Icon
                  name={
                    showDropdown2
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown2 && <Text style={styles.dropdownText}>...</Text>}
            <View style={styles.line} />

        <Pressable onPress={() => setShowDropdown3(!showDropdown3)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  HOW TO GET THIS SERVICE ?
                </Text>
                <Icon
                  name={
                    showDropdown3
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown3 && (
              <View style={styles.howToGetServiceContent}>
                {/* Checkpoints content */}
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    Share plot details & construction stage on the App.
                  </Text>
                </View>
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    share detailed requirements via App for quicker delivery or
                    alternatively schedule a call with our expert.
                  </Text>
                </View>
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    3D wil be delivered in 3 working days after all your 3D
                    requirements are submitted and verifiled, VR wil be
                    delivered in 5 working days after the 3D elevation is
                    finalized and all your VR requirements are submitted and
                    verified.
                  </Text>
                </View>
                <View style={styles.checkpoint}>
                  <View style={styles.checkpointCircle}></View>
                  <Text style={styles.checkpointText}>
                    Request upto 2 free reworks 3D elevation. No reworks allowed
                    in the VR service
                  </Text>
                </View>
              </View>
            )}
            <View style={styles.line} />

            <Pressable onPress={() => setShowDropdown4(!showDropdown4)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>ADVANTAGES</Text>
                <Icon
                  name={
                    showDropdown4
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown4 && (
              <View style={styles.advantageDropdownContent}>
                {/* Advantage dropdown content goes here */}
                <View style={styles.boxContainer11}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon1 name={packages[1].icon} size={40} color="white" />
                  </View>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 16,
                      }}>
                      Designs as per your budget
                    </Text>
                  </View>
                </View>

                <View style={styles.boxContainer12}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon1 name={packages[1].icon} size={40} color="white" />
                  </View>

                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    360 degree views
                  </Text>
                </View>

                <View style={styles.boxContainer13}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon1 name={packages[1].icon} size={40} color="white" />
                  </View>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    Material choice as per budget
                  </Text>
                </View>

                <View style={styles.boxContainer14}>
                  <View
                    style={[styles.iconContainer23, {width: 50, height: 50}]}>
                    <Icon1 name={packages[1].icon} size={40} color="white" />
                  </View>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    See different spaces in your home as per your design
                  </Text>
                </View>
              </View>
            )}
            <View style={styles.line} />
          </View>

          <View style={{marginTop: 10, marginLeft: 8}}>
            <Text>{'\n'}FREQUENTLY ASKED QUESTIONS</Text>
          </View>

          <View>
            <Pressable onPress={() => setShowDropdown5(!showDropdown5)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  What is Visualisation package?
                </Text>
                <Icon
                  name={
                    showDropdown5
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown5 && (
              <Text style={styles.dropdownText}>
                A Visualisation package requested via the DBL App means
                requesting for a 2D Layout,3D elevation design and an immersive
                virtual reality experience to be made as per your home building
                requirements and budget by design experts.
              </Text>
            )}
            <View style={styles.line} />

            <Pressable onPress={() => setShowDropdown6(!showDropdown6)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  How do I avail a Visualisation package ?
                </Text>
                <Icon
                  name={
                    showDropdown6
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown6 && (
              <Text style={styles.dropdownText}>
                You can raise a Visualisation package request by visiting the
                home page on the App. Select "Advance Design Package" and click
                on the "Request Service" button, fill up the mandatory details
                about your plot and continue to raise the service request.
              </Text>
            )}
            <View style={styles.line} />

            <Pressable onPress={() => setShowDropdown7(!showDropdown7)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  What is the process after raising a request?
                </Text>
                <Icon
                  name={
                    showDropdown7
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown7 && (
              <Text style={styles.dropdownText}>
                After the service is raised with DBL, you can give the detailed
                requirements via the app or request aa call from our executive
                to collect the requirements via a phone call. The DBL expert
                will call you as per the appointment scheduled by you, to
                collect or verify the relevant data to start the designing
                process. First the 2D layout will be delivered, after the layout
                is finalised, will the 3D elevation design process begin.Once
                the 3D elevation design process begin.Once the 3D elevation is
                finalised will the Virtual reality design commerece.
                {'\n'}
              </Text>
            )}
            <View style={styles.line} />

            <Pressable onPress={() => setShowDropdown8(!showDropdown8)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  What will be delivered as part of Visualisation package?
                </Text>
                <Icon
                  name={
                    showDropdown8
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown8 && (
              <Text style={styles.dropdownText}>
                You will receive 1 design with furniture layout of all floors in
                the 2D layout and 1 design for 3D elevation with all four sides
                view and an immersive virtual reality experience.
              </Text>
            )}
            <View style={styles.line} />

            <Pressable onPress={() => setShowDropdown9(!showDropdown9)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  Will it be possible to make changes in the designs?
                </Text>
                <Icon
                  name={
                    showDropdown9
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown9 && (
              <Text style={styles.dropdownText}>
                For 3D elevation delivered by DBL, you can avail up to reworks
                within 30 days of the previous delivery. Once the 2D layout is
                finished. Will we proceed with the 3D design. No changes will be
                allowed in the 2D layout after the commencement of 3D elevation
                design. In order to make changes, please call our customer care
                on 1234567890. They will assist you to book an appointment with
                the DBL experts to collect the data for changes.
              </Text>
            )}
            <View style={styles.line} />

            <Pressable
              onPress={() => setShowDropdown10(!showDropdown10)}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownHeaderText}>
                  What is the cost of availing a Visualisation package?
                </Text>
                <Icon
                  name={
                    showDropdown10
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  size={24}
                  color="#346EEC"
                />
              </View>
            </Pressable>
            {showDropdown10 && (
              <Text style={styles.dropdownText}>
                The cost of the Concept design package is calculated based on
                the plot specifications like Plot area and no. of floors. After
                filling the necessary details, the service cost will be
                calculated.
              </Text>
            )}
            <View style={styles.line} />
            <View style={styles.Disclaimer}>
              <Text style={styles.heading2}>*Disclaimer.</Text>
              <Text style={styles.paragraph3}>
                DBL is a digital platform that connects individual users with
                qualified architects and engineers. DBL provides concept designs
                by engaging such qualified professionals. DBL does not provide
                any structural consultancy services, and home builders'
                structural consultancy services. Users are advised to seek a
                professional opinion from any independent practitioner for
                further construction needs.
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
                  styles.box,
                  {
                    flex: 0.4, // Adjust flex to make it smaller
                    marginRight: 25, // Add marginRight to create a gap
                    backgroundColor: '#9D76C1',
                  },
                ]}
                onPress={() => navigation.navigate(packages[0].screen)}>
                <View style={styles.boxContent}>
                  <View style={[styles.iconContainer, {width: 60, height: 60}]}>
                    <Icon1 name={packages[0].icon} size={40} color="#5B0888" />
                  </View>
                  <Text style={styles.packageName}>{packages[0].name}</Text>
                </View>
              </TouchableOpacity>

              {/* Render the second box */}
              <TouchableOpacity
                style={[
                  styles.box,
                  {
                    flex: 0.4, // Adjust flex to make it smaller
                    backgroundColor: '#9D76C1',
                  },
                ]}
                onPress={() => navigation.navigate(packages[1].screen)}>
                <View style={styles.boxContent}>
                  <View style={[styles.iconContainer, {width: 60, height: 60}]}>
                    <Icon1 name={packages[1].icon} size={40} color="#5B0888" />
                  </View>
                  <Text style={styles.packageName}>{packages[1].name}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => console.log('Button pressed')} // Change this to your desired functionality
          >
            <Text style={styles.bottomButtonText}>Your Button</Text>
          </TouchableOpacity> */}
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
    marginBottom: 10,
    marginTop: -40,
    color: 'black',
    paddingLeft: 1,
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
    marginBottom: 1,
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
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    paddingLeft: 3,
  },
  startingContainer: {
    alignItems: 'center',
    marginTop: -1,
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
  Title3: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 3,
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
  Title5: {
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
  box: {
    width: 160, // Adjust width of the container
    height: 160, // Adjust height of the container
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9D76C1',
    paddingHorizontal: 10, // Adjust padding to fit the content
    paddingVertical: 10, // Adjust padding to fit the content
    borderRadius: 10, // Adjust borderRadius to make it round
    marginBottom: 8,
  },
  boxContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  packageName: {
    fontSize: 14, // Adjust font size to fit the content
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 5, // Adjust spacing between icon and text
  },
  iconContainer: {
    width: 60, // Adjust width of the icon container
    height: 60, // Adjust height of the icon container
    borderRadius: 30, // Adjust borderRadius to make it round
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5, // Adjust spacing between icon and text
  },
  bottomButton: {
    backgroundColor: '#713ABE',
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
    fontWeight: 'bold',
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dropdownHeaderText: {
    fontSize: 15,
    color: 'black',
    flex: 1,
  },
  dropdownText: {
    fontSize: 15,
    color: '#aaa',
    //marginTop: 10,
    bottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: 'black', // Adjust the color as needed
    marginVertical: 5,
  },
  cardsContainer: {
    marginTop: 10, // Add marginTop for separation from other sections
  },
  cardContainer: {
    backgroundColor: 'white',
    height: 130,
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 8,
    borderColor: 'grey', // Add border color to the card container
    borderWidth: 1, // Add border width for the card container
  },
  iconContainer: {
    height: 100,
    width: 100,
    backgroundColor: '#FFEAD2',
    borderRadius: 50, // Make it a perfect circle
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
    marginLeft: 5,
    borderColor: '#fff',
    borderColor: '#346EEC', // Add border color to the icon container
    borderWidth: 1, // Add border width for the icon container
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  additionalText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
  },
  image50: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 11,
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
  advantageDropdownContent: {
    //backgroundColor: 'white',
    height: 345,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    justifyContent: 'space-between',
    //margin: 10,
  },
  boxContainer11: {
    height: 150,
    //backgroundColor:'white',
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer12: {
    height: 150,
    //backgroundColor:'white',
    width: 111,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer13: {
    height: 150,
    //backgroundColor:'white',
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  boxContainer14: {
    height: 150,
    //backgroundColor:'white',
    width: 111,
    margin: 10,
    alignItems: 'center',
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
});

export default VisualizationPackage;
