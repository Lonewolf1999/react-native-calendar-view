/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, SafeAreaView, Platform, StyleSheet } from 'react-native'

import CalendarListScreen from './src/screens/calendar-list';
import Config from './src/config'
import Utils from './src/utils';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Config.Theme.COLOR_TRANSPARENT}
        barStyle={'dark-content'}
        translucent={true}
      />
      <CalendarListScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({
      ios: 0,
      android: Utils.statusBarHeight,
    }),
    backgroundColor: Config.Theme.COLOR_WHITE,
  }
})

export default App
