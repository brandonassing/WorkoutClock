import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { tick, resetTimer, stopTimer, incrementTimeslot, incrementSet } from '../Actions/CountTime';
import WorkoutInfo from './WorkoutInfo';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets,
    secondsLeft: state.updateTimer.seconds,
    currentTimeslot: state.updateTimer.currentTimeslot,
    currentSet: state.updateTimer.currentSet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch(tick()),
    resetTimer: (seconds) => dispatch(resetTimer(seconds)),
    stopTimer: (timer) => dispatch(stopTimer(timer)),
    incrementTimeslot: () => dispatch(incrementTimeslot()),
    incrementSet: () => dispatch(incrementSet())
  };
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  seconds: {
    fontSize: 125,
    fontWeight: 'bold'
  },
  timeslotName: {
    fontSize: 50
  }
};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      timer: null,
      isPaused: false
    }
  }

  componentDidMount() {
    this.props.resetTimer(this.props.timeslots[this.props.currentTimeslot - 1].seconds);
    this.setState({
      timer: setInterval(this.tick, 1000)
    });
  }

  componentWillUnmount() {
    this.props.stopTimer(this.state.timer);
  }

  tick() {
    //If time not out; set to reset at 1 so it doesn't add an extra second
    if (this.props.secondsLeft > 1) {
      this.props.tick();
    }
    else {
      //If not last timeslot
      if (this.props.currentTimeslot < this.props.timeslots.length) {
        this.props.incrementTimeslot();
        this.props.resetTimer(this.props.timeslots[this.props.currentTimeslot - 1].seconds);
      }
      else {
        if (this.props.currentSet < this.props.sets) {
          this.props.incrementSet();
          this.props.resetTimer(this.props.timeslots[this.props.currentTimeslot - 1].seconds);
        }
        else {
          clearInterval(this.state.timer);
          this.props.resetTimer(0);
        }
      }
    }
  }

  handlePress() {
    if (this.state.isPaused) {
      this.setState({
        timer: setInterval(this.tick, 1000)
      });
    }
    else {
      clearInterval(this.state.timer);
    }
    this.setState({
      isPaused: !this.state.isPaused
    });
  }

//TODO use flow text and center align
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text h1 style={styles.seconds}>
            {this.props.secondsLeft > 0 ? this.props.secondsLeft : "Done" }
          </Text>
          <Text h3 style={styles.timeslotName}>
            {this.props.timeslots[this.props.currentTimeslot - 1].name}
          </Text>
        </View>
        <WorkoutInfo />
        <Button
          disabled={this.props.secondsLeft <= 0}
          title={this.state.isPaused ? "Resume" : "Pause"}
          color="black"
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
