import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { tick, resetTimer, stopTimer, incrementTimeslot, incrementSet } from '../Actions/CountTime';

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

class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      timer: null
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

  render() {
    return (
      <View>
        <Text>
          {this.props.secondsLeft}
        </Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
