import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ExerciseField from './ExerciseField';
import { Button, ButtonGroup } from 'react-native-elements';
import { addTimeslot } from '../Actions/ChangeWorkoutRoutine';

const mapDispatchToProps = dispatch => {
  return {
    addTimeslot: workoutData => dispatch(addTimeslot(workoutData))
  }
}

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots
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
    this.totalCount = 0;
  }

  updateIndex(selectedIndex){
    this.totalCount++;
    this.setState({selectedIndex: selectedIndex});
    if (selectedIndex == 0){
      this.addExercise();
    } else {
      this.addRest();
    }
  }

  addExercise(){
    this.exerciseCount++;
    this.props.addTimeslot({
      seconds: 30,
      type: "Exercise",
      name: "Exercise " + this.exerciseCount.toString(),
      index: (this.totalCount - 1)
    });
  }

  addRest(){
    this.props.addTimeslot({
      seconds: 60,
      type: "Rest",
      name: "Rest",
      index: (this.totalCount - 1)
    });
  }

  startTimer(){

  }

  renderExercises(){
    //TODO find out what index/key does and if it's needed
    return this.props.timeslots.map((entry, index) =>
      <ExerciseField
        name={entry.name}
        seconds={entry.seconds.toString()}
        type={entry.type}
        key={index}
        index={entry.index}
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
