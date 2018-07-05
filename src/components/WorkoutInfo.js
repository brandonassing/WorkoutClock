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
        {
          this.props.currentTimeslot < this.props.timeslots.length ? (
            <Text>{this.props.timeslots[this.props.currentTimeslot].name} - {this.props.timeslots[this.props.currentTimeslot].seconds}</Text>
          ) : (
            <Text>Last timeslot</Text>
          )
        }
        <Text>
        {(this.props.currentTimeslot) + "/" + this.props.timeslots.length}
        </Text>
      </View>
    )
  }
}

export default connect (mapStateToProps, null)(WorkoutInfo)
