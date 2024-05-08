/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native'

import Config from './src/config'
import CalendarListScreen from './src/screens/calendar-list';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={Config.Theme.COLOR_TRANSPARENT}
        barStyle={'dark-content'}
        translucent={true}
      />
      <CalendarListScreen />
    </SafeAreaView>
  )
}

export default App
