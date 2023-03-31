/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StatusBar } from 'react-native'

import Config from './src/config'
import CalendarListScreen from './src/screens/calendar-list';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={Config.Theme.COLOR_TRANSPARENT}
        barStyle={'dark-content'}
        translucent={true}
      />
      <CalendarListScreen />
    </View>
  )
}

export default App
