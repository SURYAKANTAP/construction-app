import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({item}) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.iconRow}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon
            name="thumbs-up"
            size={20}
            color="#5B0888"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.iconText}>0 Likes</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon name="eye" size={20} color="#5B0888" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.iconText}>0 Views</Text>
      </View>
    </View>
    {/* Additional card content, if needed */}
    <Text style={styles.heading}>{item.heading}</Text>
    <Text style={styles.subtext}>{item.description}</Text>
  </View>
);

const ArticleForAll = () => {
  const data = [
    {
      id: 1,
      image: require('../image/image1.jpg'),
      heading: 'Utilizing the right',
      description: 'Description text here.',
    },
    {
      id: 2,
      image: require('../image/image2.jpg'),
      heading: 'Sample Heading 2',
      description: 'Another description text.',
    },
    {
      id: 3,
      image: require('../image/image3.jpg'),
      heading: 'Sample Heading 3',
      description: 'Yet another description text.',
    },
    {
      id: 4,
      image: require('../image/image10.jpg'),
      heading: 'Sample Heading 4',
      description: 'More description text.',
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

const cardWidth = 300;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  card: {
    width: cardWidth,
    marginRight: 20,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 15,
  },
  icon: {
    marginRight: 10,
  },
  iconText: {
    fontSize: 16,
    color: '#5B0888',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ArticleForAll;
