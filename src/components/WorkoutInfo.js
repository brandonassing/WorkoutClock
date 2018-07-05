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
  //BUG goes out of bounds when no more timeslots; this is due to Timer.js incrementing timeslot and then checking if no more timeslots
  render() {
    return (
      <View>
        <Text>
        {this.props.currentSet + "/" + this.props.sets}
        </Text>
        <Text>
        {this.props.timeslots[this.props.currentTimeslot].name}
        </Text>
        <Text>
        {this.props.timeslots[this.props.currentTimeslot + 1].name}
        </Text>
        <Text>
        {this.props.timeslots[this.props.currentTimeslot + 1].seconds}
        </Text>
        <Text>
        {(this.props.currentTimeslot + 1) + "/" + this.props.timeslots.length}
        </Text>
      </View>
    )
  }
}

export default connect (mapStateToProps, null)(WorkoutInfo)
