import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '1',
    name: 'Concept Design',
    screen: 'ConceptDesignPackage',
    image: require('../image/homeTabImage/SolutionGrid/conceptDesign.png'),
  },
  {
    id: '2',
    name: 'Advanced concept Design',
    screen: 'AdvancedConceptDesign',
    image: require('../image/homeTabImage/SolutionGrid/advanceConcept.png'),
  },
  {
    id: '3',
    name: 'Visualization Packages',
    screen: 'VisualizationPackage',
    image: require('../image/homeTabImage/SolutionGrid/visualization.png'),
  },
  {
    id: '4',
    name: '2D Layout Services',
    screen: 'Layout',
    image: require('../image/homeTabImage/SolutionGrid/2d.png'),
  },

  {
    id: '5',
    name: '3D Elevation Services',
    screen: 'Elevation',
    image: require('../image/homeTabImage/SolutionGrid/3d.png'),
  },
  {
    id: '6',
    name: 'Vitual Reality Experience',
    screen: 'VirtualReality',
    image: require('../image/homeTabImage/SolutionGrid/virtualReality.png'),
  },
  {
    id: '7',
    name: 'Design Ideas',
    screen: 'DesignIdeas',
    image: require('../image/homeTabImage/SolutionGrid/designIdea.png'),
  },
  {
    id: '8',
    name: 'Vaastu Services',
    screen: 'VaastuService',
    image: require('../image/homeTabImage/SolutionGrid/vasstu.png'),
  },
  {
    id: '9',
    name: 'Construction Advisory',
    screen: 'ConstructionAdvisory',
    image: require('../image/homeTabImage/SolutionGrid/constructionAdvisory.png'),
  },
  {
    id: '10',
    name: 'Anti Termite Treatment',
    screen: 'AntiTermite',
    image: require('../image/homeTabImage/SolutionGrid/antiTermite.png'),
  },
  {
    id: '11',
    name: 'Financial Service',
    screen: 'FinanceService',
    image: require('../image/homeTabImage/SolutionGrid/financial.png'),
  },
  {
    id: '12',
    name: 'Solar Service',
    screen: 'SolarService',
    image: require('../image/homeTabImage/SolutionGrid/solar.png'),
  },
];

const Grid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Explore All Our Solution
        </Text>
        <Text>Based on your current home building stages!</Text>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
              <View style={styles.grid}>
                <View style={styles.circle}>
                  <Image source={item.image} style={styles.img} />
                </View>
                <Text style={{color:'black',textAlign:'center',margin:2,fontWeight:'700'}}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  grid: {
    height: 150,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000040',
    margin: 10,
    elevation: 2
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#346EEC',
    alignSelf: 'center',
    marginTop: 5,
    justifyContent:'center'
  },
  img:{
    alignSelf:'center',
    width:50,
    height:50
  }
});
export default Grid;
