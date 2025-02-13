import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import AuthStack from './components/AuthStack';
// import MainTabs from './components/MainTabs';
import AllScreen from './Component/AllScreen';
import StackScreen from './Component/StackScreen';

const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {userAuthenticated ? <AllScreen /> : <StackScreen />}
    </NavigationContainer>
  );
};


export default App;