import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [loginErrorMessage, setLoginErrorMessage]= useState("")

  const regexTocheckMobileNumbre = /^[0-9]{10}$/; //Regex to check the valid mobile numberf
  const handleContinuePress =() => {
    if (regexTocheckMobileNumbre.test(mobileNumber)) {
      navigation.navigate('OTPScreen'); // Navigate to the OTPScreen
    } 
  }


 //Handle login error 
  useEffect(() => {
    if (!regexTocheckMobileNumbre.test(mobileNumber) && mobileNumber!== "" ) {
      setLoginErrorMessage('Please enter a valid phone number');
    } else{
      setLoginErrorMessage('');
    }
  },[mobileNumber])

  const handleGoogleLogin = () => {
    // Placeholder function for Google login
    console.log('Login with Google pressed');
  };

  const handleFacebookLogin = () => {
    // Placeholder function for Facebook login
    console.log('Login with Facebook pressed');
  };
 
  //Handle button disable
  const isContinueButtonEnabled = !regexTocheckMobileNumbre.test(mobileNumber);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {/* Header Text */}
      <SafeAreaView style={styles.container}>
      <Text style={styles.simpleHeaderText}>
        Get help with home building design, services, and materials
      </Text>

      {/* Login/Register Section */}
      <View style={styles.loginRegisterContainer}>
        <Text style={styles.loginRegisterText}>Login or Register</Text>
      </View>

      {/* Mobile Number Input */}
      <View style={styles.mobileNumberContainer}>
        <View style={styles.inputWithTextContainer}>
          <Text style={styles.mobileNumberText}>Mobile Number</Text>
          <TextInput
            placeholder="Enter your mobile number"
            style={styles.mobileNumberInput}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setMobileNumber(text)}
          />
        </View>
      </View>
      <View>
         <Text style={styles.loginErrorMsg}>{loginErrorMessage}</Text>
      </View>

      <View style={styles.socialLoginContainer}>
        <Text style={{ fontWeight: '700', textAlign: 'center', marginTop: 20 }}>
          Or login with
        </Text>
        <View style={{ justifyContent: 'center' }}> 
                                    {/* remove flexDirection: 'row',  */}
          <TouchableOpacity
            onPress={handleGoogleLogin}
            style={styles.loginOptionContainer}
          >
            
            
            <Icon name="google" size={24} color="#4285F4" /> 
            <Text style={styles.signinTextGoogle}>
        Sign in with Google
      </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFacebookLogin}
            style={styles.loginOptionContainer}
          >
            

        <Icon name="facebook-square" size={24} color="#3b5998" />
        <Text style={styles.signinTextFacebook}>
        Sign in with Facebook
      </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinuePress}
        style={[
          styles.continueButton,
          { backgroundColor: isContinueButtonEnabled ? '#ccc' : '#346EEC' },
        ]}
        disabled={isContinueButtonEnabled}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  simpleHeaderText: {
    fontSize: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  loginRegisterContainer: {
    marginBottom: 30,
    marginTop: 30,
  },
  loginRegisterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mobileNumberContainer: {
    marginBottom: 6,
  },
  inputWithTextContainer: {
    position: 'relative',
  },
  mobileNumberText: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    color: '#666',
    zIndex: 1,
  },
  mobileNumberInput: {
    borderWidth: 1,
    borderColor: '#346EEC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  loginErrorMsg:{
     color: "#DF4423",
     fontSize:14
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginBottom: 170,
  },
  loginOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  signinTextGoogle:{marginLeft:10,fontWeight:'bold',color:'#4285F4'},
  signinTextFacebook:{marginLeft:10,fontWeight:'bold',color:'#3b5998'},
  logoImage: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  continueButton: {
    backgroundColor: '#5B0888',
    paddingVertical: 15,
    borderRadius: 150, //chang 5 to 150
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',//comment out // 115 to 100
    // marginLeft: '-7%', //comment out
    marginTop: 165, // Change from 220 to 165, review the flexdirection also before try to edit
    // marginBottom: 20,//comment out
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;