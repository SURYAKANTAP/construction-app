import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import About from './About';
import AllScreen from './AllScreen';
import ArticlesScreen from './Articles';
import Expensetrack from './Expensetrack';
import Experts from './Experts';
import FAQsScreen from './FAQs';
import ExpertSearch from './HomeScreenInnerPage/ExpertSearch';
import MaterialSearch from './HomeScreenInnerPage/MaterialSearch';
import ImagePage from './ImagePage';
import ImageSlider from './ImageSlider';
import IssueHistoryScreen from './IssueHistory';
import LoaderPage from './LoaderPage';
import LoginScreen from './LoginScreen';
import MySitesScreen from './MySites';
import OTPScreen from './OTPScreen';
import PersonalDetails from './PersonalDetails';
import PlansScreen from './Plans';
import ReferHome from './ReferHome';
import ReferPartner from './ReferPartner';
import RegisterPage from './RegisterPage';
import ReportProblem from './ReportProblem';
import Rewards from './Rewards';
import SearchScreen from './SearchScreen';
import Settings from './Settings';
import StylesScreen from './Styles';
import Support from './Support';
import VideosScreen from './Videos';

import Alerts from './Alerts';
import Cancellation from './Cancellation';
import FAQs from './FAQs';
import IssueHistory from './IssueHistory';
import Manage from './Manage';
import PrivacyPolicy from './Privacypolicy';
import TermofUse from './Termofuse';

import Budgeting from './HomeScreenInnerPage/Budgeting';
import DBLHomeStudio from './HomeScreenInnerPage/DBLHomeStudio';
import {EMI_Calculator} from './HomeScreenInnerPage/EMI_Calculator';
import EventsCard from './HomeScreenInnerPage/EventsCard';
import {Permissions} from './HomeScreenInnerPage/Permissions';
import ServicesExperts from './HomeScreenInnerPage/ServicesExperts';
import SolarSavingsCalculator from './HomeScreenInnerPage/SolarSavingsCalculator';
import StyleQuiz from './HomeScreenInnerPage/StyleQuiz';
import StylesCard from './HomeScreenInnerPage/StylesCard';
import VaastuScore from './HomeScreenInnerPage/VaastuScore';

// solutionscreensInnerPage import
import DesignPackage from './AdvanceDesignPackage';
import AntiTermite from './AntiTermite';
import ConceptDesignPackageScreen from './ConceptDesign';
import ConstructionAdvisory from './ConstructionAdvisory';
import DesignIdeas from './DesignIdeas';
import Elevation from './Elevation';
import FinanceService from './FinanceService';
import Layout from './Layout';
import Layout2DScreen from './Layout2DScreen';
import RainwaterHarvesting from './RainwaterHarvesting';
import SolarService from './SolarService';
import SolutionsScreen from './SolutionsScreen';
import VaastuService from './VaastuService';
import VirtualReality from './VirtualReality';
import VirtualRealityScreen from './VirtualRealityScreen';
import VisualizationPackage from './VisualizationPackage';


import ThreeDElevation from './ThreeDElevation';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ImagePage">
      <Stack.Screen
        name="ImagePage"
        component={ImagePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoaderPage"
        component={LoaderPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPage"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImageSlider"
        component={ImageSlider}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Report a Problem"
        component={ReportProblem}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Issue History"
        component={IssueHistory}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ReferHomeBuiders"
        component={ReferHome}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ReferPartners"
        component={ReferPartner}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ReportProblemScreen"
        component={ReportProblem}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="FAQsScreen"
        component={FAQsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="IssueHistoryScreen"
        component={IssueHistoryScreen}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage} // Use ImageSlider component
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MaterialSearch"
        component={MaterialSearch} // Use Material component
        options={{header: () => <CustomHeaderForMaterial />}}
      />
      <Stack.Screen
        name="ExpertSearch"
        component={ExpertSearch} // Use Material component
        options={{header: () => <CustomHeaderForExpert />}}
      />

      {/* menu screen  */}
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetails} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />

      <Stack.Screen
        name="Rewards"
        component={Rewards}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Manage"
        component={Manage}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="Terms of Use"
        component={TermofUse}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="Cancellation & Refunds Policy"
        component={Cancellation}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />

      <Stack.Screen
        name="AllScreen"
        component={AllScreen} // Use ImageSlider component
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="MySites"
        component={MySitesScreen} // Use ImageSlider component
      />

      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen} // Use SearchScreen component
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PlansScreen"
        component={PlansScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="StylesScreen"
        component={StylesScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="VideosScreen"
        component={VideosScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="ArticlesScreen"
        component={ArticlesScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="MaterialsScreen"
        component={ArticlesScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="ExpertsScreen"
        component={Experts} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="DBLHomeStudio"
        component={DBLHomeStudio} // Use DBLHomeStudio component
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="EventsCard"
        component={EventsCard} // Use EventsCard component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SolarSavingsCalculator"
        component={SolarSavingsCalculator} // Use EventsCard component
      />
      <Stack.Screen
        name="Expensetrack"
        component={Expensetrack} // Use Expensetrack component
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions} // Use Permissions component
      />
      <Stack.Screen
        name="VaastuScore"
        component={VaastuScore} // Use VaastuScore component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StyleQuiz"
        component={StyleQuiz} // Use StyleQuiz component
      />
      <Stack.Screen
        name="Budgeting"
        component={Budgeting} // Use Budgeting component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ServicesExperts"
        component={ServicesExperts} // Use Budgeting component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StylesCard"
        component={StylesCard} // Use Budgeting component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EMI_Calculator"
        component={EMI_Calculator} // Use Budgeting component
        options={{headerShown: true}}
      />

      {/* Solution screen */}

      <Stack.Screen
        name="Solutions"
        component={SolutionsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConceptDesignPackage"
        component={ConceptDesignPackageScreen}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: "Concept Design Package", 
        }}
      />
      <Stack.Screen
        name="AdvancedConceptDesign"
        component={DesignPackage}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: 'Advanced Concept Design', 
        }}
      />
      <Stack.Screen
        name="VisualizationPackage"
        component={VisualizationPackage}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: 'Visualization Package',
        }}
      />
      <Stack.Screen
        name="Layout"
        component={Layout}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="Layout2DScreen"
        component={Layout2DScreen}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: "2D Layout",
          headerTitleAlign:'center',
        
        }}
      />
      <Stack.Screen
        name="Elevation"
        component={Elevation}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="ThreeDElevation"
        component={ThreeDElevation}
        options={{
          headerShown: true,
          headerTitleAlign:'center',
          headerTitle:"3D Elevation",
          headerTintColor:'#fff',
          headerStyle:{
            backgroundColor:'#2563EB'
          }
        }}
      />

      <Stack.Screen
        name="VirtualReality"
        component={VirtualReality}
        options={{
          headerShown: false, 
        }}
      />

<Stack.Screen
        name="VirtualRealityScreen"
        component={VirtualRealityScreen}
        options={{
          headerStyle: {
            backgroundColor: '#2563EB',
            
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: "Virtual Reality Experience",
          headerTitleAlign:'center',
        
        }}
      />
      <Stack.Screen
        name="AntiTermite"
        component={AntiTermite}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTitleAlign:'center',
          headerTintColor: 'white', 
          title: 'Anti Termite Treatment', 
        }}
      />
      <Stack.Screen
        name="RainwaterHarvesting"
        component={RainwaterHarvesting}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: 'Rainwater Harvesting', 
        }}
      />
      <Stack.Screen
        name="SolarService"
        component={SolarService}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          headerTitleAlign:'center',
          title: 'Solar Service', 
        }}
      />
      <Stack.Screen
        name="ConstructionAdvisory"
        component={ConstructionAdvisory}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: 'Construction Advisory', 
        }}
      />
      <Stack.Screen
        name="DesignIdeas"
        component={DesignIdeas}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: 'Design Gallery', 
        }}
      />
      <Stack.Screen
        name="FinanceService"
        component={FinanceService}
        options={{
          
          headerStyle: {
            backgroundColor: '#2563EB',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, 
          headerTintColor: 'white', 
          title: 'Finance', 
        }}
      />
      <Stack.Screen
        name="VaastuService"
        component={VaastuService}
        options={{
          headerShown: false, 
        }}
      />
      {/* // <StackScreen name="Newscreen"
      // component={Newscreen}
      // options={{headerShown:false,}}/> */}
    </Stack.Navigator>
  );
};

export default StackScreen;

const CustomHeaderForMaterial = () => {
  const navigation = useNavigation();
  return (
    
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#713ABE',
        height: 80,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <AntDesign
          name="arrowleft"
          size={27}
          color="#fff"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <View style={{marginRight: 150}}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Materials
        </Text>
      </View>
    </View>
  );
};

const CustomHeaderForExpert = () => {
  const navigation = useNavigation();
  return (
    
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#713ABE',
        height: 80,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <AntDesign
          name="arrowleft"
          size={27}
          color="#fff"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <View style={{marginRight: 155}}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Experts
        </Text>
      </View>
    </View>
  );
};
