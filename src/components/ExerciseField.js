import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';

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
        exerciseName: '',
        seconds: ''
      };
    }

    render() {
      return (
        <View style={styles.container}>
        <TextInput
          style={[styles.inputField, styles.exerciseInput]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.exerciseName}
          placeholder="Exercise"
          defaultValue="Exercise"
        />
        <TextInput
          style={[styles.inputField, styles.timeInput]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.seconds}
          keyboardType = 'numeric'
          placeholder="30"
          defaultValue="30"
        />
        </View>
      );
    }
}
/*<FloatingLabelInput
  style={styles.exerciseInput}
  label="Exercise"
  value={this.state.exerciseName}
  onChangeText={(exerciseName) => this.setState({exerciseName})}
/>
<FloatingLabelInput
  style={styles.timeInput}
  label="Time"
  value={this.state.seconds}
  onChangeText={(seconds) => this.setState({seconds})}
/>*/
export default ExerciseField;
