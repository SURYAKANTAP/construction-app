import React from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';



const StylesScreen= () => {
  return (
    <View style={styles.container}>
       <ActivityIndicator size="200" color="#713ABE"  />
      <Text style={styles.text}>Fetching Designing {'\n'} Elements...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center',
  },
});

export default StylesScreen;



//after loading show data
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// const StylesScreen = () => {
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   // Simulate some async operation (e.g., fetching data) that takes time
//   //   const fetchData = async () => {
//   //     // Simulate a delay of 3 seconds
//   //     await new Promise(resolve => setTimeout(resolve, 3000));
//   //     setLoading(false); // Set loading to false after the data is fetched
//   //   };

//   //   fetchData();
//   // }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="blue" />
//         <Text> featching data</Text>
//       ) : (
//         <Text style={styles.text}>Hello, world!</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
// });

// export default StylesScreen;



//shows data
