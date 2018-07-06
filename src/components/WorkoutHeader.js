import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import { editWorkout } from '../Actions/ChangeWorkoutRoutine';

const mapDispatchToProps = dispatch => {
  return {
    editWorkout: workoutInfo => dispatch(editWorkout(workoutInfo))
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

class WorkoutHeader extends Component {
  constructor(props) {
      super(props);
      this.state = {
        workoutName: "Workout 1",
        sets: "1"
      };
      //TODO prevent user from entering <= 0 
      //TODO add max input for sets and name
      //TODO change value to 1 if invalid
      this.props.editWorkout({
        workoutName: this.state.workoutName,
        sets: parseInt(this.state.sets)
      });
    }
    componentDidUpdate() {
      let setsVal = 1;
      if (this.state.sets > 0 && this.state.sets != "" && this.state.sets != undefined && this.state.sets != null) {
        setsVal = parseInt(this.state.sets);
      }
      this.props.editWorkout({
        workoutName: this.state.workoutName,
        sets: setsVal
      });
    }
    render() {
      return (
        <View style={styles.container}>
        <TextInput
          style={[styles.inputField, styles.exerciseInput]}
          onChangeText={(name) => this.setState({workoutName: name})}
          value={this.state.workoutName}
        />
        <TextInput
          style={[styles.inputField, styles.timeInput]}
          onChangeText={(sets) => this.setState({sets: sets})}
          value={this.state.sets}
          keyboardType = 'numeric'
        />
        </View>
      );
    }
}
export default connect(null, mapDispatchToProps)(WorkoutHeader)
