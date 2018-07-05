import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets,
    currentTimeslot: state.updateTimer.currentTimeslot,
    currentSet: state.updateTimer.currentSet
  };
};

const styles = {
  container: {
    display: "flex",
    padding: 15,
    marginTop: 50,
    marginBottom: 20
  }
};

class WorkoutInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text h4>
          Timeslot: {(this.props.currentTimeslot) + "/" + this.props.timeslots.length}
        </Text>
        <Text h4>
          Set: {this.props.currentSet + "/" + this.props.sets}
        </Text>
        {
          this.props.currentTimeslot < this.props.timeslots.length ? (
            <Text h4>
              Next: {this.props.timeslots[this.props.currentTimeslot].name} for {this.props.timeslots[this.props.currentTimeslot].seconds} seconds
            </Text>
          ) : (
            <Text h4>This is the last activity in the set</Text>
          )
        }
      </View>
    )
  }
}

export default connect (mapStateToProps, null)(WorkoutInfo)
