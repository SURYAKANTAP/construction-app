import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
//import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons



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

const ConceptDesignPackageScreen = () => {
  const navigation = useNavigation();

  const images = [
    require('../image/home_slider/con1.png'),
    require('../image/home_slider/con2.png'),
    require('../image/home_slider/con3.png'),
    require('../image/home_slider/const.png'),
  ];

  const [isIncludeDropdownOpen, setIsIncludeDropdownOpen] = useState(false);
  const [isAddOnDropdownOpen, setIsAddOnDropdownOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFivthDropdownOpen, setIsFivthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false); // State for first dropdown
  const [showDropdown2, setShowDropdown2] = useState(false); // State for second dropdown
  const [showDropdown3, setShowDropdown3] = useState(false); // State for third dropdown
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);

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
          <Text style={styles.heading}>Concept Design Package</Text>
          <Text style={styles.paragraph}>
            Get a conceptual 2D layout and 3D Elevations to visualize the
            interior design of your home as per your requirements and budget.
            This package will help you to efficiently plan your home as per
            specifications provided by you, for your 2D layout. Thereafter with
            a 3D Design, you will also be able to view to exterior design of
            your home with more aesthetics.
          </Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>
            2D will be delivered in 3 working Days after your requirements are
            submitted and verified.3D will be delivered in 3 working days after
            the 2D layout is finalized and all your 3d requirements are
            submitted and verified.
          </Text>

          <Text style={styles.additionalText1}>Starting</Text>
          <Text style={styles.additionalText2}>₹3728/-</Text>
          <View style={styles.startingContainer}>
            <View style={styles.horizontalLine} />
          </View>

          <View>
            <TouchableOpacity onPress={toggleIncludeDropdown}>
              
              <View style={styles.dropdownSection}>
                <Text style={styles.sectionTitle}>WHAT IS INCLUDE</Text>
                <Icon
              name={
                isIncludeDropdownOpen ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
              </View>
            </TouchableOpacity>
          </View>
          {isIncludeDropdownOpen && (
            <View style={styles.cardsContainer}>
              {/* First card */}
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                     
                  <View style={styles.iconContainer}>
                    <FontAwesome name="building" size={50} color="#346EEC" />
                  </View>
                  <View style={{marginLeft: 10, justifyContent: 'flex-start'}}>
                    <Text style={styles.cardText}>2D Layout</Text>
                    <Text style={styles.additionalText}>
                      Get a conceptual 2D Layout of {'\n'} your new home as per
                      your{'\n'} requirements.
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Second card */}
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.iconContainer}>
                    <FontAwesome5 name="building" size={50} color="#346EEC" />
                  </View>
                  <View style={{marginLeft: 10, justifyContent: 'flex-start'}}>
                    <Text style={styles.cardText}>3D Elevation</Text>
                    <Text style={styles.additionalText}>
                      Get conceptual 3D Elevations {'\n'} to visualize the
                      exterior design {'\n'} of your home as per your {'\n'}{' '}
                      requirements and budget
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.horizontalLine} />
        </View>

        <View>
          <TouchableOpacity onPress={toggleAddOnDropdown}>
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle1}>ADD-ONS</Text>

              <Icon
              name={
                isAddOnDropdownOpen ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
            </View>
          </TouchableOpacity>
        </View>
        {isAddOnDropdownOpen && (
          <View style={styles.addOnDropdownContent}>
            {/* Add-on dropdown content goes here */}
            <View style={styles.boxContainer1}>
              <View style={styles.box1}>
                <Text style={styles.boxText}>2D Layout</Text>
              </View>
              <View style={styles.boxContainer1}>
                <View
                  style={[
                    styles.box1,
                    {width: '58%', marginLeft: 5, marginRight: 5},
                  ]}>
                  <Text style={styles.boxText}>3D Elevation</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View>
        <TouchableOpacity
          onPress={() => console.log('How to get this service clicked')}
        />
        <View style={styles.horizontalLine} />
        <View style={styles.dropdownSection}>
          <Text style={styles.sectionTitle}>HOW TO GET THIS SERVICE ?</Text>
          <Icon
              name={
                isAddOnDropdownOpen ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
        </View>
      </View>

      <View>
      <TouchableOpacity onPress={() => console.log('Advantages clicked')}/>
        <View style={styles.horizontalLine} />
        <View style={styles.dropdownSection}>
          <Text style={styles.sectionTitle}>ADVANTAGES</Text>
          
          <Icon
              name={
                isAddOnDropdownOpen ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
        
        </View>
      </View>

      <View style={styles.horizontalLine} />
      <View style={{marginTop: 5, marginLeft: 8}}>
        <Text>{'\n'}FREQUENTLY ASKED QUESTIONS</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => setShowDropdown1(!showDropdown1)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              What is a Concept design package?
            </Text>
            <Icon
              name={
                showDropdown1 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown1 && (
          <Text style={styles.dropdownText}>
            A concept design package requested via the DBL App means requesting
            for a 2D Layout and 3D elevation designs to be made as per your home
            building requirement by design experts.
          </Text>
        )}
        <View style={styles.line} />
        <TouchableOpacity onPress={() => setShowDropdown2(!showDropdown2)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              How do I avail a Concept design{'\n'}package ?
            </Text>
            <Icon
              name={
                showDropdown2 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown2 && (
          <Text style={styles.dropdownText}>
            You can raise a concept design package request by visiting the home
            page on the App. Select "Concept Design Package" and click on the
            "Request Service" button, fill up the mandatory details about your
            plot and continue to raise the service request.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown3(!showDropdown3)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              What is the process after raising {'\n'}a request?
            </Text>
            <Icon
              name={
                showDropdown3 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown3 && (
          <Text style={styles.dropdownText}>
            After the service is raised with DBL, you can give the detailed
            requirements via the app or request aa call from our executive to
            collect the requirements via a phone call. The DBL expert will call
            you as per the appointment scheduled by you, to collect or verify
            the relevant data to start the designing process. First the 2D
            layout will be delivered, after the layout is finalised, will the 3D
            elevation design process begin.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown4(!showDropdown4)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              What will be delivered as part of concept design package?
            </Text>
            <Icon
              name={
                showDropdown4 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown4 && (
          <Text style={styles.dropdownText}>
            You will receive 1 design with furniture layout of all floors in the
            2D layout and 1 design for 3D elevation with all four sides view.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown5(!showDropdown5)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              Will it be possible to make changes {'\n'} in the designs?
            </Text>
            <Icon
              name={
                showDropdown5 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown5 && (
          <Text style={styles.dropdownText}>
            For 2D Layout and 3D elevation delivered by DBL, you can avail up to
            reworks within 30 days of the previous delivery. Once the 2D layout
            is finished. Will we proceed with the 3D design. No changes will be
            allowed in the 2D layout after the commencement of 3D elevation
            design. In order to make changes, please call our customer care on
            1234567890. They will assist you to book an appointment with the DBL
            experts to collect the data for changes.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown6(!showDropdown6)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              What is the cost of availing a Concept {'\n'} design package?
            </Text>
            <Icon
              name={
                showDropdown6 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown6 && (
          <Text style={styles.dropdownText}>
            The cost of the Concept design package is calculated based on the
            plot specifications like Plot area and no. of floors. After filling
            the necessary details, the service cost will be calculated.
          </Text>
        )}
        <View style={styles.line} />
      </View>
      <View style={styles.Disclaimer}>
        <Text style={styles.heading2}>*Disclaimer.</Text>
        <Text style={styles.paragraph3}>
          {' '}
          DBL is a digital platform that connects individual users with
          qualified architects and engineers. DBL provides concept designs by
          engaging such qualified professionals. DBL does not provide any
          structural consultancy services, and home builders' structural
          consultancy services. Users are advised to seek a professional opinion
          from any independent practitioner for further construction needs.
        </Text>
      </View>

      <View style={{marginTop: 15, marginBottom: 10, marginLeft: 1}}>
        <Text style={{fontSize: 18, color: 'black', marginBottom: 10}}>
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
              backgroundColor: '#346EEC',
            },
          ]}
          onPress={() => navigation.navigate(packages[0].screen)}>
          <View style={styles.boxContent}>
            <View style={[styles.iconContainer, {width: 60, height: 60}]}>
              <Icon name={packages[0].icon} size={40} color="#346EEC" />
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
              backgroundColor: '#346EEC',
            },
          ]}
          onPress={() => navigation.navigate(packages[1].screen)}>
          <View style={styles.boxContent}>
            <View style={[styles.iconContainer, {width: 60, height: 60}]}>
              <Icon name={packages[1].icon} size={40} color="#346EEC" />
            </View>
            <Text style={styles.packageName}>{packages[1].name}</Text>
          </View>
        </TouchableOpacity>
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
    width: 500,
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
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
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
    paddingLeft: 1,
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
    width: 160, // Adjust width of the container
    height: 170, // Adjust height of the container
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#346EEC',
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

  boxContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust text color of the box
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
    // marginTop: 1,
    bottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: 'black', // Adjust the color as needed
    marginVertical: 5,
  },
  sectionTitle1:{
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingRight:250,

  },
});

export default ConceptDesignPackageScreen;
