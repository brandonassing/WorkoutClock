import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  inputField: {
    height: 60
  },
  exerciseInput: {
    flexGrow: 5
  },
  timeInput: {
    flexGrow: 1
  }
});

class ExerciseField extends Component {
  constructor(props) {
      super(props);
      this.state = {
        exerciseName: "Exercise 1",
        seconds: "30"
      };
    }

    render() {
      return (
        <View style={styles.container}>
        <TextInput
          style={[styles.inputField, styles.exerciseInput]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.exerciseName}
        />
        <TextInput
          style={[styles.inputField, styles.timeInput]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.seconds}
        />
        </View>
      );
    }
}

export default ExerciseField;
