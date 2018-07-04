import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets
  };
};

class Timer extends Component {
  render() {
    return (
      <View>
        <Text>
        {this.props.sets}
        </Text>
      </View>
    )
  }
}

export default connect (mapStateToProps, null)(Timer)
