import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ThreeDElevation = () => {
  const images = [
    require('../image/home_slider/DBL.png'),
    require('../image/home_slider/DBL1.png'),
    require('../image/home_slider/DBL2.png'),
    require('../image/home_slider/DBL3.png'),
  ];

  const faqItems = [
    {
      question: 'What is the 3D Elevation service?',
      answer:
        'The 3D Elevation service helps you visualize the exterior design of your home.',
    },
    {
      question: 'How long does it take to receive the service?',
      answer:
        'It takes approximately 4 working days after your requirements are submitted and verified.',
    },
    {
      question: 'What are the starting prices?',
      answer: 'The starting price for the service is ₹2118/-.',
    },
    {
      question: 'What is included in the ADD-ONS?',
      answer:
        'The ADD-ONS include additional 3D design options, plain options, and night views.',
    },
    {
      question: 'How do I share my requirements?',
      answer:
        'You can share plot details and final floor plans on the app and discuss your needs with an expert.',
    },
    {
      question: 'What are the advantages of the service?',
      answer:
        'The service is cost-effective, saves time, offers high quality, and provides great support.',
    },
    {
      question: 'How do I confirm the service?',
      answer:
        'You can confirm the service and proceed with payment after discussing your requirements with an expert.',
    },
  ];

  const testimonials = [
    {
      id: '1',
      userImage: require('../image/home_slider/DBL1.png'),
      rating: 4.5,
      message:
        'The 3D Elevation service transformed our vision into a beautiful reality. The team was professional and attentive to our needs, ensuring every detail was perfectly executed.',
    },
    {
      id: '2',
      userImage: require('../image/home_slider/DBL1.png'),
      rating: 4.8,
      message:
        'I am very satisfied with the 3D Elevation service. The designs were beautiful, and the process was seamless. Highly recommended for anyone looking for quality work.',
    },
    {
      id: '3',
      userImage: require('../image/home_slider/DBL1.png'),
      rating: 4.7,
      message:
        'Excellent service from start to finish! The team listened to my needs and delivered exactly what I had envisioned. Very impressed with the quality of the final results.',
    },
    {
      id: '4',
      userImage: require('../image/home_slider/DBL1.png'),
      rating: 4.9,
      message:
        'The team was amazing! They provided me with multiple options and guided me through the entire process. The 3D elevations helped me visualize my dream home perfectly.',
    },
  ];

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAddonsDropdownVisible, setAddonsDropdownVisible] = useState(false);
  const [isHowToGetServiceDropdownVisible, setHowToGetServiceDropdownVisible] =
    useState(false);
  const [isAdvantagesDropdownVisible, setAdvantagesDropdownVisible] =
    useState(false);
  const [isCustomerTestimonialVisible, setCustomerTestimonialVisible] =
    useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedAddOn, setSelectedAddOn] = useState(null);
  const [faqDropdownVisibility, setFaqDropdownVisibility] = useState(
    Array(faqItems.length).fill(false),
  );

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleAddonsDropdown = () => {
    setAddonsDropdownVisible(!isAddonsDropdownVisible);
  };

  const toggleHowToGetServiceDropdown = () => {
    setHowToGetServiceDropdownVisible(!isHowToGetServiceDropdownVisible);
  };

  const toggleAdvantagesDropdown = () => {
    setAdvantagesDropdownVisible(!isAdvantagesDropdownVisible);
  };
  const toggleCustomerTestimonial = () => {
    setCustomerTestimonialVisible(!isCustomerTestimonialVisible);
  };

  const toggleModal = addOn => {
    setSelectedAddOn(addOn);
    setModalVisible(!isModalVisible);
  };
  const toggleFaqDropdown = index => {
    const newVisibility = [...faqDropdownVisibility];
    newVisibility[index] = !newVisibility[index];
    setFaqDropdownVisibility(newVisibility);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{backgroundColor: '#2563EB'}}>
          <SliderBox
            images={images}
            dotColor="black"
            inactiveDotColor="grey"
            autoplay={true}
            autoplayInterval={3000}
            circleloop={true}
          />
        </View>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '700'}}>
            3D Elevation
          </Text>
          <Text style={{marginTop: 10}}>
            Get conceptual 3D Elevations to visualize the exterior design of
            your home as per your requirements and budget.
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              marginTop: 7,
              fontWeight: '500',
            }}>
            Delivery Time
          </Text>
          <Text style={{marginTop: 8}}>
            Approximately 4 working days (After your requirements are submitted
            and verified)
          </Text>
          <Text style={{marginTop: 10}}>Starting</Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '600',
              color: 'black',
              marginTop: 3,
            }}>
            ₹2118/-
          </Text>
        </View>
      </View>

      <View style={styles.hrLine}></View>
      {/* Start SAMPLE DELIVERY dropdown */}
      <Pressable style={styles.dropDownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownTitle}>SAMPLE DELIVERY</Text>
        <Text style={styles.dropdownArrow}>
          {isDropdownVisible ? (
            <Icon name="up" size={20} />
          ) : (
            <Icon name="down" size={20} />
          )}
        </Text>
      </Pressable>
      {isDropdownVisible && (
        <View style={styles.dropdownContent}>
          {/* Content for SAMPLE DELIVERY */}
          <View>
            <ImageBackground
              source={require('../image/image13.jpg')}
              style={{width: 150, height: 100}}>
              <Text style={{color: '#fff'}}>PROJECT 1</Text>
            </ImageBackground>
            <TouchableOpacity style={{marginTop: 10}}>
              <Text
                style={{
                  color: 'orange',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                VIEW PROJECT {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground
              source={require('../image/image14.jpg')}
              style={{width: 150, height: 100}}>
              <Text style={{color: '#fff'}}>PROJECT 2</Text>
            </ImageBackground>
            <TouchableOpacity style={{marginTop: 10}}>
              <Text
                style={{
                  color: 'orange',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                VIEW PROJECT {'>'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.hrLine}></View>

      {/* Start ADD-ONS dropdown */}
      <Pressable style={styles.dropDownHeader} onPress={toggleAddonsDropdown}>
        <Text style={styles.dropdownTitle}>ADD-ONS</Text>
        <Text style={styles.dropdownArrow}>
          {isAddonsDropdownVisible ? (
            <Icon name="up" size={20} />
          ) : (
            <Icon name="down" size={20} />
          )}
        </Text>
      </Pressable>
      {isAddonsDropdownVisible && (
        <View style={styles.dropdownContent}>
          {/* List of ADD-ONS items */}
          <Pressable
            style={styles.addOnsItem}
            onPress={() => toggleModal('Additional 3D Design Option')}>
            <Image
              source={require('../image/3dDesign.jpg')}
              style={{height: 80, width: 100}}
            />
            <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
              Additional 3D Design Option
            </Text>
            <Text style={{fontSize: 15}}>
              Get an additional conceptual 3D El...
            </Text>
          </Pressable>
          <Pressable
            style={styles.addOnsItem}
            onPress={() => toggleModal('Plain Option')}>
            <Image
              source={require('../image/paint.jpg')}
              style={{height: 80, width: 100}}
            />
            <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
              Plain Option
            </Text>
            <Text style={{fontSize: 15}}>
              Get a color/paint option for the exterior of...
            </Text>
          </Pressable>
          <Pressable
            style={styles.addOnsItem}
            onPress={() => toggleModal('Night View')}>
            <Image
              source={require('../image/nightView.jpg')}
              style={{height: 80, width: 100}}
            />
            <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
              Night View
            </Text>
            <Text style={{fontSize: 15}}>
              Get a conceptual 3D Elevation with...
            </Text>
          </Pressable>
          <Pressable
            style={styles.addOnsItem}
            onPress={() => toggleModal('Additional 3D Design Option')}>
            <Image
              source={require('../image/3dPlan.jpg')}
              style={{height: 80, width: 100}}
            />
            <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
              Additional 3D Design Option
            </Text>
            <Text style={{fontSize: 15}}>
              Get an additional conceptual 3D El...
            </Text>
          </Pressable>
        </View>
      )}
      <View style={styles.hrLine}></View>

      {/* New HOW TO GET THIS SERVICE dropdown */}
      <Pressable
        style={styles.dropDownHeader}
        onPress={toggleHowToGetServiceDropdown}>
        <Text style={styles.dropdownTitle}>HOW TO GET THIS SERVICE</Text>
        <Text style={styles.dropdownArrow}>
          {isHowToGetServiceDropdownVisible ? (
            <Icon name="up" size={20} />
          ) : (
            <Icon name="down" size={20} />
          )}
        </Text>
      </Pressable>
      {isHowToGetServiceDropdownVisible && (
        <View style={styles.howToGetServiceContent}>
          {/* Checkpoints content */}
          <View style={styles.checkpoint}>
            <View style={styles.checkpointCircle}></View>
            <Text style={styles.checkpointText}>
              Share plot details & final floor plans on the app.
            </Text>
          </View>
          <View style={styles.checkpoint}>
            <View style={styles.checkpointCircle}></View>
            <Text style={styles.checkpointText}>
              Share details requirements on call with our expert.
            </Text>
          </View>
          <View style={styles.checkpoint}>
            <View style={styles.checkpointCircle}></View>
            <Text style={styles.checkpointText}>
              Confirm service and proceed with payment.
            </Text>
          </View>
          <View style={styles.checkpoint}>
            <View style={styles.checkpointCircle}></View>
            <Text style={styles.checkpointText}>
              Receive service updates and support from the team.
            </Text>
          </View>
        </View>
      )}
      <View style={styles.hrLine}></View>

      {/* New ADVANTAGES dropdown */}
      <Pressable
        style={styles.dropDownHeader}
        onPress={toggleAdvantagesDropdown}>
        <Text style={styles.dropdownTitle}>ADVANTAGES</Text>
        <Text style={styles.dropdownArrow}>
          {isAdvantagesDropdownVisible ? (
            <Icon name="up" size={20} />
          ) : (
            <Icon name="down" size={20} />
          )}
        </Text>
      </Pressable>
      {isAdvantagesDropdownVisible && (
        <View style={styles.advantagesContent}>
          <View style={styles.advantagesRow}>
            <View style={styles.advantageItem}>
              <Icon name="checkcircleo" size={24} color="green" />
              <Text style={styles.advantageText}>Cost effective</Text>
            </View>
            <View style={styles.advantageItem}>
              <Icon name="clockcircleo" size={24} color="blue" />
              <Text style={styles.advantageText}>Saves time</Text>
            </View>
          </View>
          <View style={styles.advantagesRow}>
            <View style={styles.advantageItem}>
              <Icon name="safety" size={24} color="red" />
              <Text style={styles.advantageText}>High quality</Text>
            </View>
            <View style={styles.advantageItem}>
              <Icon name="smileo" size={24} color="orange" />
              <Text style={styles.advantageText}>Great support</Text>
            </View>
          </View>
        </View>
      )}
      <View style={styles.hrLine}></View>

      {/* New CUSTOMER TESTIMONIAL dropdown */}
      <Pressable
        style={styles.dropDownHeader}
        onPress={toggleCustomerTestimonial}>
        <Text style={styles.dropdownTitle}>CUSTOMER TESTIMONIAL</Text>
        <Text style={styles.dropdownArrow}>
          {isCustomerTestimonialVisible ? (
            <Icon name="up" size={20} />
          ) : (
            <Icon name="down" size={20} />
          )}
        </Text>
      </Pressable>
      {isCustomerTestimonialVisible && (
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
                <Text style={styles.message}>{testimonial.message}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Modal for ADD-ONS */}
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add-On Details</Text>
            <Text style={styles.modalDescription}>
              You have selected: {selectedAddOn}
            </Text>
            <Button title="Download" onPress={() => alert('Downloading...')} />
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Icon name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/*FAQ */}

      <Text style={{fontSize: 17, margin: 10}}>FREQUENTLY ASKED QUESTIONS</Text>

      <View style={styles.questions}>
        {faqItems.map((faq, index) => (
          <View key={index}>
            {/* Each dropdown header */}
            <Pressable
              style={styles.dropDownHeader}
              onPress={() => toggleFaqDropdown(index)}>
              <Text style={styles.dropdownTitle}>{faq.question}</Text>
              <Text style={styles.dropdownArrow}>
                {faqDropdownVisibility[index] ? (
                  <Icon name="up" size={20} />
                ) : (
                  <Icon name="down" size={20} />
                )}
              </Text>
            </Pressable>
            {/* Dropdown content */}
            {faqDropdownVisibility[index] && (
              <View style={styles.dropdownContent}>
                <Text>{faq.answer}</Text>
              </View>
            )}
            {/* Horizontal line */}
            <View style={styles.hrLine}></View>
          </View>
        ))}
      </View>
      <View style={{margin:10}}>
        <Text style={{color:'black'}}>{'*'}Disclaimer:</Text>
        <Text style={{margin:2}}>
          DBL is a digital platform which connects individual home builders with
          qualified architects and engineers. DBL provides concept designs by
          engaging such qualified professionals. DBL does not provide any
          structural consultancy services, and home builders are advised to seek
          a professional opinion from any independent practitioner for further
          construction needs.
        </Text>
      </View>
      <Text style={{fontSize:17,margin:10,color:'black'}}>RECOMMENDED PACKAGES FOR YOU</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View  style={{height:70,width:70,borderRadius:35,backgroundColor:'#2563EB',justifyContent:'center'}}>
          <Image source={require('../image/homeTabImage/SolutionGrid/conceptDesign.png')} style={{height:50,width:50,alignSelf:'center'}} />
          </View>
          <Text style={{color:'black',fontWeight:'800'}}>Concept Design</Text>
        </View>
        <View style={styles.card}>
          <View  style={{height:70,width:70,borderRadius:35,backgroundColor:'#2563EB',justifyContent:'center'}}>
          <Image source={require('../image/homeTabImage/SolutionGrid/advanceConcept.png')} style={{height:50,width:50,alignSelf:'center'}} />
          </View>
          <Text style={{color:'black',fontWeight:'800',textAlign:'center'}}>Advance Concept Design</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hrLine: {
    height: 1,
    backgroundColor: 'grey',
    width: '95%',
    alignSelf: 'center',
  },
  dropDownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  dropdownTitle: {
    fontSize: 14,
    color: 'black',
  },
  dropdownArrow: {
    fontSize: 17,
    color: 'black',
  },
  dropdownContent: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    rowGap: 20,
  },
  addOnsItem: {
    height: 200,
    width: 170,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
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
  advantagesContent: {
    padding: 10,
    marginHorizontal: 8,
  },
  advantagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  advantageItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  advantageText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
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
  questions: {
    margin: 0,
  },
  cardContainer:{
    flexDirection:'row',
    margin:10,
    columnGap:15
  },
  card:{
    height:140,
    width:110,
    backgroundColor:'#fff',
    borderRadius:10,
    alignItems:'center',
    justifyContent: 'space-around',
    elevation:3,
  }
});

export default ThreeDElevation;
