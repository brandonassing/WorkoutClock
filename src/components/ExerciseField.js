import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import { editTimeslot } from '../Actions/ChangeWorkoutRoutine';

const mapDispatchToProps = dispatch => {
  return {
    editTimeslot: workoutData => dispatch(editTimeslot(workoutData))
  }
}

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
        name: this.props.name,
        seconds: this.props.seconds
      };
    }
    componentDidUpdate() {
      this.props.editTimeslot({
        seconds: this.state.seconds,
        type: this.props.type,
        name: this.state.name,
        index: this.props.index
      });
    }
    render() {
      return (
        <View style={styles.container}>
        <TextInput
          style={[styles.inputField, styles.exerciseInput]}
          onChangeText={(name) => this.setState({name: name})}
          value={this.state.name}
          editable={this.props.type == "Exercise"}
        />
        <TextInput
          style={[styles.inputField, styles.timeInput]}
          onChangeText={(seconds) => this.setState({seconds: seconds})}
          value={this.state.seconds}
          keyboardType = 'numeric'
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
export default connect(null, mapDispatchToProps)(ExerciseField)
