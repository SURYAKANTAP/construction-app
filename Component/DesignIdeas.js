import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';


const App = () => {
  const cardsData = [
    {
      image: require('../image/images31.jpg'), // Replace with the actual path to your image
      description: [
        'Area: 558 sq.ft.',
        'No. of Rooms: 1 BHK',
        'No. of Floors: Ground Floor',
      ],
    },
    {
      image: require('../image/image19.jpg'),
      description: [
        'Area: 1120 sq.ft.',
        'No. of Rooms: 2 BHK',
        'No. of Floors: Ground Floor',
      ],
    },
    {
      image: require('../image/image20.jpg'),
      description: [
        'Area: 1176 sq.ft.',
        'No. of Rooms: 2 BHK',
        'No. of Floors: Ground Floor',
      ],
    },
  ];
  const cardsData1 = [
    {
      image: require('../image/images28.jpg'), // Replace with the actual path to your image
      description: [
        'Electric Work safety - Basic measures when building your home',
        'Here is what to consider when it comes to your wiring layout, s...',
        
      ],
     
    },
    {
      image: require('../image/image24.jpg'),
      description: [
        'Your choice among Staircases can make a statement',
        'The style of staircase significantly changes the look of you home, ...',
      
      ],
      
    },
    {
      image: require('../image/image23.jpg'),
      description: [
        "Your Children's room - Make your Kid's bedroom truly magical",
        "Here is what to keep in mind to build a kid's bedroom that your c...",
      ],
      
    },
    {
      image: require('../image/image22.jpg'),
      description: [
        'Corridor Space options - What can be done?',
        'Wondering how to utilize your corridors? Read on for some poi...',
      ],
      
    },
    {
      image: require('../image/image21.jpg'),
      description: [
        'Efficient Kitchens - Practical tips for good Kitchen construction',
        'Here are some points to keep in mind before you start planning y...',
      ],
      
    },
  ];
  return (
   
        
     
      <ScrollView>
      <View style={styles.card1}>
        <View>
          <Text style={styles.text2}>Design Ideas</Text>

          <Text style={styles.text3}>Get shortlist of 2 plans</Text>
          <Text style={styles.text4}>and 3 elevations from </Text>
          <Text style={styles.text4}>our Design Gallery</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text5}>Start</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('../image/image21.jpg')} // Change the path to your image
            style={styles.cardimage1}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{marginLeft: 20, color: 'black',fontWeight:"bold"}}>DESIGN GALLERY</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{marginRight: 20, color: '#5B0888',fontWeight:"bold"}}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {cardsData.map((card, index) => (
            <View key={index} style={styles.card}>
              <Image source={card.image} style={styles.image3} />
              {card.description.map((line, i) => (
                <Text key={i} style={styles.description1}>
                  {line}
                </Text>
              ))}
             
              
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{marginLeft: 20, color: 'black',fontWeight:"bold"}}>ARTICLES</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{marginRight: 20, color: '#5B0888',fontWeight:"bold"}}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {cardsData1.map((card, index) => (
            <View key={index} style={styles.card4}>
              <Image source={card.image} style={styles.image} />
              {card.description.map((line, i) => (
                <Text key={i} style={styles.description}>
                  {line}
                </Text>
              ))}
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              
              <View style={styles.likesContainer}>
                <FontAwesome name="thumbs-up" size={25} color="#5B0888" />
                
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name="eye" size={25} color="#5B0888" />
                
              </View>
              </View>
            </View>
            
          ))}
        </ScrollView>
      </View>
      </ScrollView>
      
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icon1:{
    paddingLeft: 20,
  },
  icon: {
    paddingLeft: 20,
  },
  textContainer: {
    flex: 1, // Take up the available space
    alignItems: 'center',
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 30,
  },
  card1: {
    backgroundColor: '#E5CFF7',
    height: 150,
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  text3: {
    color: 'black',
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 15,
  },
  cardimage1: {
    height: 70,
    width: 110,
    margin: 40,
    borderRadius: 5,
  },
  text4: {
    fontSize: 15,
    //fontWeight:'bold',
    color: 'black',
    paddingLeft: 15,
  },
  button: {
    height: 20,
    backgroundColor: 'orange',
    width: 65,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 5,
  },
  text5: {
    fontSize: 13,
    paddingLeft: 19,
    color: 'white',
    paddingBottom: 4,
  },
  scrollView: {
    flexDirection: 'row',
    margin: 20,
  },
  card: {
    width: 225,
    height: 250,
    marginRight: 17,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  card4: {
    width: 270,
    height: 320,
    marginRight: 17,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom:10,
  },
  image3: {
    width: '44%',
    height: 90,
    marginLeft:63,
    marginTop:30,
    marginBottom:25,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    paddingLeft: 10,
    paddingTop: 6,
    //textAlign: 'center',
    fontSize: 15,
    fontWeight:'bold',
    color: '#333',
  },
  description1: {
    paddingLeft: 25,
    paddingTop: 6,
    //textAlign: 'center',
    fontSize: 15,
    color: '#333',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  likesContainer: {
  
    paddingTop:10,
    marginRight:60,
    
    
  },

});

export default App;