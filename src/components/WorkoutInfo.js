import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets
  };
};

class WorkoutInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeslotCount: 0,
      setCount: 0
    }
  }

  render() {
    return (
      <View>
        <Text>
        {this.state.setCount + "/" + this.props.sets}
        </Text>
        <Text>
        {this.props.timeslots[this.state.timeslotCount].name}
        </Text>
        <Text>
        {this.props.timeslots[this.state.timeslotCount].seconds}
        </Text>
        <Text>
        {(this.state.timeslotCount + 1) + "/" + this.props.timeslots.length}
        </Text>
      </View>
    )
  }
}

export default connect (mapStateToProps, null)(WorkoutInfo)
