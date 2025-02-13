import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({item}) => (
  
  <View style={styles.card}>
    <Image source={item.image} resizeMode='cover' style={styles.cardImage} />
    <View style={{margin: 10}}>
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.cardIcon}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon
              name="thumbs-up"
              size={25}
              color="#5B0888"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={[styles.iconText, {marginLeft: 10}]}>0 Likes</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="eye"
            size={25}
            color="#5B0888"
            style={{marginRight: 10}}
          />

          <Text style={styles.iconText}>0 Views</Text>
        </View>
      </View>
    </View>
  </View>
);

const ArticleForAll = () => {
  const data = [
    {
      id: 1,
      image: require('../image/bricks.jpeg'),
      heading: 'Utilizing the right materials for wall construction',
      description:
        'While walls are one of the basic elements of your home, they can be constructed out...',
    },
    {
      id: 2,
      image: require('../image/electricWorkSafety.jpeg'),
      heading: 'Electric work safety - Basic measures when building your home',
      description: 'Here is what to consider when it comes to your wiring layout, switches and safety for...',
    },
    {
      id: 3,
      image: require('../image/avoidWaterStorage.jpeg'),
      heading: 'Avoid water storage woes with Smart home construction',
      description: 'Different types of water tanks are used for water storage. Read on to know more...',
    },
    {
      id: 4,
      image: require('../image/qualityGlass.jpg'),
      heading: 'How to check for good quality glass for home construction',
      description: 'As glass is now increasingly being used in home construction, we will guide you on...',
    },
  ];

  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {data.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

const cardWidth = 330;
// const cardHeight = 230;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  card: {
    width: cardWidth,
    // height:cardHeight,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:10
  },
  cardImage: {
    width: '100%',
    height: 284,
    // margin:5
  },
  heading: {
    fontSize: 18,
    color: 'black',
  },
  description: {
    fontSize: 15,
    paddingTop: 5,
  },
  cardIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  iconText: {
    color: 'black',
    fontSize: 18,
  },
});

export default ArticleForAll;
