import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const FAQs = () => {
  const [showDropdown1, setShowDropdown1] = useState(false); // State for first dropdown
  const [showDropdown2, setShowDropdown2] = useState(false); // State for second dropdown
  const [showDropdown3, setShowDropdown3] = useState(false); // State for third dropdown
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);
  const [showDropdown8, setShowDropdown8] = useState(false);
  const [showDropdown9, setShowDropdown9] = useState(false);
  const [showDropdown10, setShowDropdown10] = useState(false);
  const [showDropdown11, setShowDropdown11] = useState(false);
  const [showDropdown12, setShowDropdown12] = useState(false);
  const [showDropdown13, setShowDropdown13] = useState(false);
  const [showDropdown14, setShowDropdown14] = useState(false);
  const [showDropdown15, setShowDropdown15] = useState(false);
  const [showDropdown16, setShowDropdown16] = useState(false);
  const [showDropdown17, setShowDropdown17] = useState(false);
  const [showDropdown18, setShowDropdown18] = useState(false);

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.text}>APP ARCHITECTURE</Text>

        <TouchableOpacity onPress={() => setShowDropdown1(!showDropdown1)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              1. What does home building services mean?
            </Text>
            <Icon
              name={
                showDropdown1 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown1 && (
          <Text style={styles.dropdownText}>
            Home builder services are end-to-end solutions {'\n'}
            for home builders to build their homes. These {'\n'}
            services include information about plots, {'\n'}
            permissions, design services, experts availability, {'\n'}
            construction & finishing materials availability, {'\n'}
            information about home building tips etc.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown2(!showDropdown2)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              2. How can DBL app help me
            </Text>
            <Icon
              name={
                showDropdown2 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown2 && (
          <Text style={styles.dropdownText}>
            DBL app can help you build your home from.{'\n'} start to finish.
            The app will provide you with{'\n'} relevant regulatory information
            regarding your{'\n'}
            plot of land. The app also provides you with{'\n'} designing
            solutions like 2D/ Floor Plan, 3D and{'\n'} Elevation plans. The app
            will help you locate and{'\n'} find profiles/listings of Experts
            like Contractors,{'\n'} Engineers and Architects to build your home.
            {'\n'} The app will also provide lists of Material required{'\n'}{' '}
            for your home building. The app will inspire{'\n'} your home
            building requirements with features{'\n'} like the Design Library,
            Style Guide and many{'\n'} informative articles and videos to help
            you build{'\n'}
            your home.{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown3(!showDropdown3)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              3.What is so unique about the DBL app?
            </Text>
            <Icon
              name={
                showDropdown3 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown3 && (
          <Text style={styles.dropdownText}>
            DBL app is the only platform that provides you{'\n'} with solutions
            and services for the entire home{'\n'} building journey from start
            to finish.{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown4(!showDropdown4)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              4.Why should I download this app?
            </Text>
            <Icon
              name={
                showDropdown4 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown4 && (
          <Text style={styles.dropdownText}>
            Through the DBL app you will have solutions and{'\n'} services for
            your home building journey at the tip of your fingures.It will be an
            efficient guide and information source for all your home building
            requirements.{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown5(!showDropdown5)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              5.Whom is the app for?
            </Text>
            <Icon
              name={
                showDropdown5 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown5 && (
          <Text style={styles.dropdownText}>
            The DBL app is meant for every Individual Home{'\n'} builder and
            Home building Expert.From people{'\n'} building their homes to
            Architects,Engineers,{'\n'}Contractors and material providers for
            building homes.{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown6(!showDropdown6)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              6.What if there is low connectivity in my area?{'\n'} Can I still
              download the app?
            </Text>
            <Icon
              name={
                showDropdown6 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown6 && (
          <Text style={styles.dropdownText}>
            "Low connectivity does not affect downloading{'\n'} our app.Please
            go to Goggle Play store and{'\n'} download the app.
            Alternatively,you can access{'\n'} the DBL experience on our
            websites.Go to your{'\n'} browser and type www.dbl.com and hit{'\n'}{' '}
            enter."{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown7(!showDropdown7)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              7.What if my app keeps crashing?
            </Text>
            <Icon
              name={
                showDropdown7 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown7 && (
          <Text style={styles.dropdownText}>
            Please call our toll-free number 1800 266 8823{'\n'} to talk to our
            Customer Care Team or Send your{'\n'} query on Whatsapp 8108 36
            8823"
            {'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown8(!showDropdown8)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              8.Will the app make my phone slow?
            </Text>
            <Icon
              name={
                showDropdown8 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown8 && (
          <Text style={styles.dropdownText}>
            No,DBL apps are built on a high performance framework so that it
            does not affect your phone or any other apps.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown9(!showDropdown9)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              9.Can I refer this app to my friends and{'\n'} family?
            </Text>
            <Icon
              name={
                showDropdown9 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown9 && (
          <Text style={styles.dropdownText}>
            Yes. You can refer the DBL app to your friends{'\n'} and family.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown10(!showDropdown10)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              10.If I delete my app once and download it again,will retain my
              old account?
            </Text>
            <Icon
              name={
                showDropdown10 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown10 && (
          <Text style={styles.dropdownText}>
            Yes. Your account will be created using your{'\n'} mobile number.
            So, you can log into the app{'\n'} from any device. Uninstalling
            your app does not{'\n'}
            affect your account.{'\n'}
          </Text>
        )}
        <View style={styles.line} />
        <View>
          <Text style={styles.text}>PROBLEMS & TROUBLE SHOOTING</Text>
        </View>

        <TouchableOpacity onPress={() => setShowDropdown11(!showDropdown11)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              1.How can I call the DBL call centre?
            </Text>
            <Icon
              name={
                showDropdown11 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown11 && (
          <Text style={styles.dropdownText}>
            Please call our toll-free number 1800 266 8823 to{'\n'}
            talk to our Customer Care Team.{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown12(!showDropdown12)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              2.How to report an issue/problem to DBL?
            </Text>
            <Icon
              name={
                showDropdown12 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown12 && (
          <Text style={styles.dropdownText}>
            “You can report any of your issues related to DBL{'\n'} in multiple
            ways: 1) Call our Customer Care Team{'\n'} on our toll-free number
            1800 266 8823 2) Share{'\n'} your problem/query on Whatsapp account:
            8108{'\n'} 36 8823 2) Login to Utecbuild.com website and{'\n'} go to
            ""Support"" section and click ""Report a{'\n'} Problem'"" 3) Install
            the Utec app from Android{'\n'}
            playstore and login and go to{'\n'} ""Support"" to “Report a
            Problem"{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown13(!showDropdown13)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              3.What should I do if I am not able to login?
            </Text>
            <Icon
              name={
                showDropdown13 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown13 && (
          <Text style={styles.dropdownText}>
            “Please call our toll-free number 1800 266 8823{'\n'} to talk to our
            Customer Care Team or Send your{'\n'} query on Whatsapp 8108 36
            8823"{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown14(!showDropdown14)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              4.Do I need to create a password for DBL?
            </Text>
            <Icon
              name={
                showDropdown14 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown14 && (
          <Text style={styles.dropdownText}>
            You can log in to DBL app/website by providing{'\n'} your mobile
            number and you will receive an OTP{'\n'} SMS which contains a
            4-digit code that you need{'\n'} to enter to access DBL.{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown15(!showDropdown15)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              5.My app crashed.What next?
            </Text>
            <Icon
              name={
                showDropdown15 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown15 && (
          <Text style={styles.dropdownText}>
            "Please restart the application. If the issue still{'\n'} persists,
            kindly restart your mobile and try{'\n'} again. For more queries,
            please call our toll-free{'\n'} number 1800 266 8823 to talk to our
            Customer{'\n'} Care Team or Send your query on Whatsapp{'\n'} 8108
            36 8823"{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <View>
          <Text style={styles.text}>APP DOWNLOAD & LOGIN</Text>
        </View>

        <TouchableOpacity onPress={() => setShowDropdown16(!showDropdown16)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              1.How do I download the app?
            </Text>
            <Icon
              name={
                showDropdown16 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown16 && (
          <Text style={styles.dropdownText}>
            "Go to Google Play store on your android mobile.{'\n'}Search for
            DBL.Install the DBL app{'\n'} if you are a home builder or DBL
            Partner or you{'\n'} wish to become a DBL Partner.You can also get
            {'\n'} DBL experience through our www.dbl.com{'\n'} website"{'\n'}
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown17(!showDropdown17)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              2.Which all OS platforms support DBL app?
            </Text>
            <Icon
              name={
                showDropdown17 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown17 && (
          <Text style={styles.dropdownText}>
            Currently,Utec supports Android and Web{'\n'} versions.
          </Text>
        )}
        <View style={styles.line} />

        <TouchableOpacity onPress={() => setShowDropdown18(!showDropdown18)}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownHeaderText}>
              3.How do I login to the app?
            </Text>
            <Icon
              name={
                showDropdown18 ? 'chevron-up-outline' : 'chevron-down-outline'
              }
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        {showDropdown18 && (
          <Text style={styles.dropdownText}>
            To log in please enter your 10-digit mobile{'\n'} number.You will
            then receive an OTP.Please{'\n'} enter the OTP details to complete
            the Log in{'\n'} process and access the app.{'\n'}
          </Text>
        )}
        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    margin: 10,
  },
  text: {
    fontSize: 16,
    //color: 'black',
    padding: 10,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dropdownHeaderText: {
    fontSize: 15,
    color: 'black',
    flex: 1,
  },
  dropdownText: {
    fontSize: 15,
    color: '#aaa',
    // marginTop: 1,
    bottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: 'black', // Adjust the color as needed
    marginVertical: 5,
  },
});

export default FAQs;
