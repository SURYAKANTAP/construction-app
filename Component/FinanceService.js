import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ArticleForAll from './ArticleForAll';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.card1}>
          <View style={styles.card2}>
            <View>
              <Text style={styles.text2}>Avail quick,</Text>
              <Text style={styles.text10}>hassle-free loans</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text5}>APPLY NOW</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require('../image/Download.png')}
                style={styles.cardimage1}
              />
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <TouchableOpacity onPress={() => {}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.text3}>
                Documents required to apply for a loan
              </Text>
              <FontAwesome name="angle-right" size={25} color="#5B0888" style={{ paddingLeft: 8 }} />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.calculator}>
          <Text style={styles.calculatortext}>CALCULATORS</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.card4}>
            <Text style={styles.loantext}>Calculate your loan</Text>
            <Text style={styles.loantext1}>EMI</Text>
            <Image
              source={require('../image/image35.png')}
              style={styles.cardimage4}
            />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                margin: 20,
                color: 'grey',
                fontSize: 17,
              }}>
              ARTICLES
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ margin: 20, color: '#5B0888', fontWeight: 'bold' }}>
                VIEW ALL
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
        <View style={{margin:20}}>
        <ArticleForAll/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card1: {
    backgroundColor: '#E5CFF7',
    height: 175,
    margin: 20,
    borderRadius: 10,
  },
  card2: {
    flexDirection: 'row',
  },
  text2: {
    color: 'black',
    fontSize: 21,
    paddingTop: 15,
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  text10: {
    color: 'black',
    fontSize: 21,
    paddingTop: 5,
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  text3: {
    color: 'black',
    fontSize: 15,
    margin: -1,
    paddingLeft: 15,
  },
  button: {
    height: 40,
    backgroundColor: 'white',
    width: 120,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5B0888',
  },
  text5: {
    fontSize: 18,
    paddingTop: 7,
    paddingLeft: 9,
    color: '#5B0888',
    paddingBottom: 4,
  },
  cardimage1: {
    height: 90,
    width: 80,
    marginTop: 40,
    marginLeft: 70,
    borderRadius: 5,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'grey',
    marginTop: 10,
    marginHorizontal: 15,
  },
  calculator: {
    marginHorizontal: 20,
  },
  calculatortext: {
    fontSize: 17,
    color: 'grey',
  },
  card4: {
    backgroundColor: 'white',
    height: 185,
    width: 190,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardimage4: {
    height: 90, // Adjust height as needed
    width: 80, // Adjust width as needed
    marginTop: 10,
    borderRadius: 8,

  },
  loantext: {
    color: 'black',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loantext1: {
    color: 'black',
    fontSize: 20,
  },
});

export default App;
