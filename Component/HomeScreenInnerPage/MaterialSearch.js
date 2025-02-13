import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ArticleForAll from '../ArticleForAll';

const Article = ({show}) => {
  return (
    <View style={styles.articleContainer}>
      <View>
      <Image source={show.image} resizeMode='contain'/>
      </View>
    </View>
  );
};

const MaterialSearch = () => {
  let name='hiii';
  const data = [
    {
      id: 1,
      image: require('../../image/image1.jpg'),
      heading: 'Sample Heading 1',
      description: 'Description text here.',
    },
    {
      id: 2,
      image: require('../../image/image2.jpg'),
      heading: 'Sample Heading 2',
      description: 'Another description text.',
    },
    {
      id: 3,
      image: require('../../image/image2.jpg'),
      heading: 'Sample Heading 2',
      description: 'Another description text.',
    },
    {
      id: 4,
      image: require('../../image/image2.jpg'),
      heading: 'Sample Heading 2',
      description: 'Another description text.',
    },
    // Add more data objects for additional cards
  ];
  return (
    <ScrollView>
    <View style={{margin: 15, flex: 1}}>
      <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>
          Let us help you find the materials to build your home
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>
            Find the best places in your {'\n'}area to buy materials for the
            {'\n'}
            construction of your home.
          </Text>
          <Image
            source={require('../../image/rawMaterials.png')}
            style={styles.rawMaterialsImage}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text3}>GET STARTED </Text>
          <Icon name="right" size={23} color="black" style={styles.arrow} />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.secondContainer}>
          <Image
            resizeMode="contain"
            source={require('../../image/DLB.png')}
            style={styles.rawMaterialsImage1}
          />
          <Text style={{fontSize: 14, color: 'black'}}>
            Browse through DBL{'\n'}Building Produts
          </Text>
          <Icon name="right" size={18} color="orange" />
        </View>
      </TouchableOpacity>

      {/* ARTICLES & VIEW ALL */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{color: 'black', fontWeight: '900', fontSize: 17}}>
          ARTICLES
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'orange', fontWeight: '900', fontSize: 17}}>
            VIEW ALL
          </Text>
        </TouchableOpacity>
      </View>
      <ArticleForAll />
      

        {/* <ScrollView horizontal>
      <View style={{flexDirection: 'row',}}>
        {data.map(item => (
          <Article key={item.id} show={item}/>
        ))}
      </View>
      </ScrollView> */}
      {/* <Image source={require('../../image/DLB.png' )} style={{height:200,width:200}}/>  */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC7C7',
    height: 210,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    margin: 10,
  },
  text1: {
    fontSize: 17,
    margin: 10,
  },
  text3: {
    fontSize: 18,
    margin: 10,
    color: 'black',
    fontWeight: '400',
  },
  arrow: {
    top: 12,
    right: 10,
  },
  rawMaterialsImage: {
    height: 90,
    width: 90,
    left: 30,
  },
  secondContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 15,
  },
  rawMaterialsImage1: {
    height: 80,
    width: 120,
    margin: 5,
  },
  articles: {
    flexDirection: 'row',
    
  },
  articleContainer: {
    // height:270,
    width: '14%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    margin:5
    // marginRight: 10,
  },
});
export default MaterialSearch;
