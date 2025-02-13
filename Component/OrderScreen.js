import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';
import Saved from '../Component/Saved';
import Servicerequest from '../Component/Servicerequest';
import Expensetrack from '../Component/Expensetrack';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Order</Text>
    </View>
  );
};

const OrderScreen = () => {
  return (
    <Tabs.Container renderHeader={Header}>
      <Tabs.Tab name="SERVICE REQUEST">
        <Tabs.ScrollView>
          <Servicerequest />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="EXPENSE TRACKER">
        <Tabs.ScrollView>
          <Expensetrack />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="SAVED">
        <Tabs.ScrollView>
          <Saved />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    padding: 15,
  },
  tabstl: {
    fontWeight: 'bold',
    color: '#2563EB',
  },
});

export default OrderScreen;
