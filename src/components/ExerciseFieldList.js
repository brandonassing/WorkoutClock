import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ExerciseField from './ExerciseField';
import { Button, ButtonGroup } from 'react-native-elements';
import { updateWorkoutRoutine } from '../Actions/ChangeWorkoutRoutine';

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
    this.exerciseCount = 0;
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
    this.exerciseCount++;
    this.props.updateWorkoutRoutine({
      seconds: 30,
      type: "Exercise",
      name: "Exercise " + this.exerciseCount.toString()
    });
  }

  addRest(){
    this.props.updateWorkoutRoutine({
      seconds: 60,
      type: "Rest",
      name: "Rest"
    });
  }

  startTimer(){

  }

  renderExercises(){
    return this.props.timeSlots.map((entry, index) =>
      <ExerciseField
        name={entry.name}
        seconds={entry.seconds.toString()}
        type={entry.type}
        key={index}
      />
    );
  }

  render(){
    const buttons = ['Add exercise', 'Add rest']
    const { selectedIndex } = this.state.selectedIndex;
    return (
      <ScrollView>
        {this.renderExercises()}
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
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseFieldList)
