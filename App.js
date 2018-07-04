import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, ExerciseFieldList } from './src/components'
import { Provider } from 'react-redux';
import Store from './src/Store';

import { createStackNavigator } from 'react-navigation';

class ExerciseScreen extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <ExerciseFieldList />
        </View>
      </Provider>
    );
  }
}

class TimerScreen extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <Text>
            Hello World
          </Text>
        </View>
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Exercise: {
      screen: ExerciseScreen
    },
    Timer: {
      screen: TimerScreen
    }
  },
  {
    initialRouteName: "Exercise"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
