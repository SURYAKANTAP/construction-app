import React, { useEffect} from 'react';
import { View, Animated, StyleSheet, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoaderPage = () => {
  const animatedValues = Array(6).fill().map(() => new Animated.Value(0));
  const { width, height } = Dimensions.get('window');
  const radius = Math.min(width, height) * 0.4; // Adjust the radius based on your preference
  const navigation = useNavigation();

  const startAnimation = () => {
    Animated.parallel(
      animatedValues.map((value) =>
        Animated.loop(
          Animated.sequence([
            Animated.timing(value, {
              toValue: 1,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(value, {
              toValue: 0,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ])
        )
      )
    ).start();

    // Navigate to the login page after 2 seconds (adjust as needed)
    setTimeout(() => {
      navigation.replace('SignUpPage');
    }, 2000);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const interpolatePosition = (animatedValue, index) => {
    const angle = ((index + 1) * Math.PI * 2) / animatedValues.length;
    return {
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, radius * Math.cos(angle)],
          }),
        },
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, radius * Math.sin(angle)],
          }),
        },
      ],
    };
  };

  return (
    <View style={styles.container}>
      {animatedValues.map((value, index) => (
        <Animated.View
          key={index}
          style={[styles.bubble, interpolatePosition(value, index)]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#346EEC',
  },
  bubble: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#E5CFF7',
    position: 'absolute',
  },
});

export default LoaderPage;