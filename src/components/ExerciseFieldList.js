import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import ExerciseField from './ExerciseField';
import { Button, ButtonGroup } from 'react-native-elements';
import { updateWorkoutReducer } from '../Actions/ChangeWorkoutRoutine';

const mapDispatchToProps = dispatch => {
  return {
    updateWorkoutRoutine: workoutData => dispatch(updateWorkoutRoutine(workoutData))
  }
}

const mapStateToProps = state => {
  return {
    timeSlots: state.updateWorkout.workout.timeSlots
  };
};

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: "#5b8121"
  }
});

class ExerciseFieldList extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex){
    this.setState({selectedIndex: selectedIndex});
    if (selectedIndex == 0){
      this.addExercise();
    } else {
      this.addRest();
    }
  }

  addExercise(){
    console.log("add exercise");
  }

  addRest(){
    console.log("add rest");
  }

  startTimer(){

  }

  render(){
    const buttons = ['Add exercise', 'Add rest']
    const { selectedIndex } = this.state.selectedIndex;
    return (
      <View>
        <ExerciseField />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
        <Button
          buttonStyle={[styles.startButton]}
          onPress={this.startTimer}
          title="Start"
          color="white"
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseFieldList)
