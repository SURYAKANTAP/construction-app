import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SolutionsScreen = ({navigation}) => {
  const Design = [
    {
      id: '1',
      name: 'Concept Design Package',
      icon: 'home',
      screen: 'ConceptDesignPackage',
      image: require('../image/homeTabImage/SolutionGrid/conceptDesign.png'),
    },
    {
      id: '2',
      name: 'Advanced concept Design',
      icon: 'rocket',
      screen: 'AdvancedConceptDesign',
      image: require('../image/homeTabImage/SolutionGrid/advanceConcept.png'),
    },
    {
      id: '3',
      name: 'Visualization Packages',
      icon: 'picture-o',
      screen: 'VisualizationPackage',
      image: require('../image/homeTabImage/SolutionGrid/visualization.png'),
    },
    {
      id: '4',
      name: '2D Layout Services',
      icon: 'file-text-o',
      screen: 'Layout',
      image: require('../image/homeTabImage/SolutionGrid/2d.png'),
    },
    {
      id: '5',
      name: '3D Elevation Services',
      icon: 'cubes',
      screen: 'Elevation',
      image: require('../image/homeTabImage/SolutionGrid/3d.png'),
    },
    {
      id: '6',
      name: 'Virtual Reality Experience',
      icon: 'eye',
      screen: 'VirtualReality',
      image: require('../image/homeTabImage/SolutionGrid/virtualReality.png'),
    },
    {
      id: '7',
      name: 'Design Ideas',
      icon: 'lightbulb-o',
      screen: 'DesignIdeas',
      image: require('../image/homeTabImage/SolutionGrid/designIdea.png'),
    },
    {
      id: '8',
      name: 'Vaastu Services',
      icon: 'compass',
      screen: 'VaastuService',
      image: require('../image/homeTabImage/SolutionGrid/vasstu.png'),
    },
  ];

  const Civil = [
    {
      id: '1',
      name: 'Construction Advisory',
      icon: 'wrench',
      screen: 'ConstructionAdvisory',
      image: require('../image/homeTabImage/SolutionGrid/constructionAdvisory.png'),
    },
  ];

  const Speciality = [
    {
      id: '1',
      name: 'Anti Termite Treatment',
      icon: 'bug',
      screen: 'AntiTermite',
      image: require('../image/homeTabImage/SolutionGrid/antiTermite.png'),
    },
    {
      id: '2',
      name: 'Financial Service',
      icon: 'money',
      screen: 'FinanceService',
      image: require('../image/homeTabImage/SolutionGrid/financial.png'),
    },
    {
      id: '3',
      name: 'Rainwater Harvesting',
      icon: 'tint',
      screen: 'RainwaterHarvesting',
      image: require('../image/homeTabImage/SolutionGrid/cloud-rain.png'),
    },
    {
      id: '4',
      name: 'Solar Service',
      icon: 'sun-o',
      screen: 'SolarService',
      image: require('../image/homeTabImage/SolutionGrid/solar.png'),
    },
  ];

  const renderGrid = items => {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 8}}>
        {items.map(item => (
          <TouchableOpacity
            key={item.name}
            style={styles.gridItem}
            onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.boxContainer}>
              <View style={styles.circle}>
                {/* <Icon name={item.icon} size={35} color="#000000" style={styles.icon} /> */}
                <Image source={item.image} style={styles.icon} />
              </View>
              <Text style={{color:'black',textAlign:'center',margin:10,fontWeight:'700'}}>{item.name}</Text>
            </View>
            
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.textSolution}>Solutions</Text>
          <Text style={styles.textDesign}>Design & Planning</Text>
        </View>
        {renderGrid(Design)}
        <View style={styles.horizontalLine} />
        <View>
          <Text style={styles.civil}>Civil Construction</Text>
        </View>
        {renderGrid(Civil)}
        <View style={styles.horizontalLine} />
        <View>
          <Text style={[styles.civil, styles.speciality]}>
            Speciality Home Building Services
          </Text>
        </View>
        {renderGrid(Speciality)}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
  textSolution: {
    fontSize: 27,
    borderWidth: 0,
    height: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 32,
    backgroundColor: '#2563EB',
    color: 'white',
  },
  textDesign: {
    fontSize: 27,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  
  gridItem: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxContainer: {
    marginTop: 20,
    width: 100,
    height: 150,
    //justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 7,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 1.8,
    borderColor: '#E5CFF7',
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor: '#00000040',
    elevation: 2,

  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    top:5
  },
  icon: {
    color: '#fff',
  },
  itemText: {
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    width: 101,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 7,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 80,
    marginRight: 1.8,
    borderRightWidth: 1,
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderColor: '#00000040',
    elevation: 8,

  },
  civil: {
    marginTop: 1,
    fontSize: 27,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  speciality: {
    textAlign: 'center',
    paddingRight: 7,
  },
  horizontalLine: {
    height: 12,
    backgroundColor: '#2563EB',
    marginHorizontal: 7,
    marginVertical: 17,
  },
});

export default SolutionsScreen;
