import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ExerciseField from './ExerciseField';
import WorkoutHeader from './WorkoutHeader';
import { Button, ButtonGroup, Icon } from 'react-native-elements';
import { addTimeslot, deleteTimeslot } from '../Actions/ChangeWorkoutRoutine';

const mapDispatchToProps = dispatch => {
  return {
    addTimeslot: workoutData => dispatch(addTimeslot(workoutData)),
    deleteTimeslot: deleteIndex => dispatch(deleteTimeslot(deleteIndex))
  };
};

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
  constructor (props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.exerciseCount = 0;
    this.startTimer = this.startTimer.bind(this);
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
    this.props.addTimeslot({
      seconds: 30,
      type: "Exercise",
      name: "Exercise " + this.exerciseCount.toString(),
      id: "_" + Math.random().toString(36).substr(2, 9)
    });
  }

  addRest(){
    this.props.addTimeslot({
      seconds: 60,
      type: "Rest",
      name: "Rest",
      id: "_" + Math.random().toString(36).substr(2, 9)
    });
  }

  startTimer(){

  }

  renderExercises(){
    console.log("render exercise field");
    return this.props.timeslots.map((item, key) =>
        <ExerciseField
          name={item.name}
          seconds={item.seconds.toString()}
          type={item.type}
          id={item.id}
          key={key}
        />
    );
  }

  render(){
    console.log('main render');
    const buttons = ['Add exercise', 'Add rest']
    const { selectedIndex } = this.state.selectedIndex;
    return (
      <ScrollView>
        <WorkoutHeader />
        {this.renderExercises()}
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
        <Button
          disabled={!Array.isArray(this.props.timeslots) || !this.props.timeslots.length}
          buttonStyle={[styles.startButton]}
          onPress={this.startTimer}
          title="Start"
          color="white"
          onPress={() => this.props.navigation.navigate('Timer', { title: "Timer" })}
        />
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseFieldList)
