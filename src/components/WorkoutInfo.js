import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets,
    currentTimeslot: state.updateTimer.currentTimeslot,
    currentSet: state.updateTimer.currentSet
  };
};

class WorkoutInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>
        {this.props.currentSet + "/" + this.props.sets}
        </Text>
        <Text>
        {this.props.timeslots[this.props.currentTimeslot - 1].name}
        </Text>
        <Text>
        {this.props.currentTimeslot < this.props.timeslots.length ? this.props.timeslots[this.props.currentTimeslot].name : "DONE" }
        </Text>
        <Text>
        {this.props.currentTimeslot < this.props.timeslots.length ? this.props.timeslots[this.props.currentTimeslot].seconds : "NONE"}
        </Text>
        <Text>
        {(this.props.currentTimeslot) + "/" + this.props.timeslots.length}
        </Text>
      </View>
    )
  }
}

export default connect (mapStateToProps, null)(WorkoutInfo)
