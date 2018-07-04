import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, ExerciseFieldList } from './src/components'
import { Provider } from 'react-redux';
import Store from './src/Store';

import { createStackNavigator } from 'react-navigation';

class ExerciseScreen extends React.Component {
  static navigationOptions = {
    title: "Exercise List"
  };
  render() {
    return (
      <Provider store={Store}>
        <View>
          <ExerciseFieldList navigation={this.props.navigation}/>
        </View>
      </Provider>
    );
  }
}

class TimerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', "Page title")
    };
  };
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Text>
            Timer Screen
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
    initialRouteName: "Exercise",
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fe6100'
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
