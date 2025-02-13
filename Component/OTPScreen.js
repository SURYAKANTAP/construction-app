import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isWhatsAppAccepted, setIsWhatsAppAccepted] = useState(false);
  const inputRefs = useRef([]);
  const [isOtpFilled, setIsOtpFilled] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsOtpFilled(otp.every(value => value !== ''));
  }, [otp]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const focusPreviousInput = index => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = index => {
    if (index > 0) {
      const newOtp = [...otp];
      newOtp[index] = ''; // Clear the current box
      setOtp(newOtp);
      focusPreviousInput(index); // Move the focus to the previous box
    } else if (index === 0) {
      const newOtp = ['', ...otp.slice(1)];
      setOtp(newOtp);
    }
  };

  const handleVerify = () => {
    const isOtpValid = otp.join('') === '1234';
    if (isOtpValid) {
      navigation.navigate('ImageSlider');
    } else {
      console.log('Invalid OTP');
      // Handle invalid OTP case
    }
  };

  // Function to toggle checkbox state when text is clicked
  const handleTextClick = checkboxType => {
    if (checkboxType === 'terms') {
      setIsTermsAccepted(prevState => !prevState);
    } else if (checkboxType === 'whatsapp') {
      setIsWhatsAppAccepted(prevState => !prevState);
    }
  };

  // Define the condition for enabling the Verify button
  const isVerifyButtonEnabled =
    isOtpFilled && isTermsAccepted && isWhatsAppAccepted;
  const animationRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center',marginTop:50}}>
        <LottieView
          ref={animationRef}
          source={require('../image/Animation - 1713183787727.json')}
          style={{width: 150, height: 140, marginTop:50}}
          autoPlay={true} // Automatically start the animation
          loop={true} // Loop the animation
        />
        <Text style={styles.otpText}>OTP Verification</Text>
        <Text style={styles.subText}>
          We have sent the OTP to
          <Text style={{fontWeight: 'bold'}}> 1234567890</Text>
        </Text>
        <View style={{flexDirection: 'row', gap: 20}}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.OTPBox}>
              <TextInput
                keyboardType="numeric"
                maxLength={1}
                caretHidden={true}
                textBreakStrategy="highQuality"
                style={styles.textInput}
                value={digit}
                onChangeText={value => handleOtpChange(index, value)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    handleBackspace(index);
                  }
                }}
                ref={ref => {
                  inputRefs.current[index] = ref;
                }}
              />
            </View>
          ))}
        </View>
        <View style={{margin: 15, flexDirection: 'row', gap: 10}}>
          <Text style={{color: 'black'}}>Didn't receive the code?</Text>
          <TouchableOpacity>
            <Text style={{color: '#2563EBED', fontWeight: 'bold'}}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Checkboxes for terms and conditions and WhatsApp notifications */}
      <View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <CheckBox
              value={isTermsAccepted}
              onValueChange={setIsTermsAccepted}
            />
            <TouchableOpacity onPress={() => handleTextClick('terms')}>
              <Text style={styles.checkboxText}>
                I accept the terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxItem}>
            <CheckBox
              value={isWhatsAppAccepted}
              onValueChange={setIsWhatsAppAccepted}
            />
            <TouchableOpacity onPress={() => handleTextClick('whatsapp')}>
              <Text style={styles.checkboxText}>
                I wish to receive notifications on WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Verify button with disabled state based on the condition */}
        <TouchableOpacity
          style={[
            styles.verify,
            {backgroundColor: isVerifyButtonEnabled ? '#2563EBED' : '#d3d3d3'},
          ]}
          onPress={handleVerify}
          disabled={!isVerifyButtonEnabled} // Disable the button when the condition is not met
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  verified: {
    width: 150,
    height: 140,
    margin: 30,
  },
  otpText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    margin: 8,
    color: 'black',
    textAlign: 'center',
  },
  OTPBox: {
    height: 50,
    borderWidth: 2,
    width: 50,
    borderRadius: 15,
    borderColor: '#d3d3d3', // Adjust border color as needed
  },
  textInput: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 2,
  },
  checkboxContainer: {
    alignItems: 'center', // Center the checkboxes and text
    marginBottom:10
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the checkboxes and text
  },
  checkboxText: {
    color: 'black',
    marginLeft: 2, // Add margin to separate text from checkbox
  },
  verify: {
    height: 50,
    width: 350,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  verifyText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default OTPScreen;
