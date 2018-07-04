import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { tick, resetTimer } from '../Actions/CountTime';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets,
    secondsLeft: state.updateTimer.seconds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch(tick()),
    resetTimer: (seconds) => dispatch(resetTimer(seconds))
  };
};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      timer: null,
      currentTimeslot: 0
    }
  }

  componentDidMount() {
    this.props.resetTimer(this.props.timeslots[this.state.currentTimeslot].seconds);
    this.setState({
      timer: setInterval(this.tick, 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    this.props.resetTimer(0);
  }

  //TODO maybe don't count to 0 bc it adds an extra second
  tick() {
    //If time still left
    if (this.props.secondsLeft <= 0) {
      this.setState({
        currentTimeslot: this.state.currentTimeslot + 1
      }, function () {
        //If not last timeslot
        if (this.state.currentTimeslot < this.props.timeslots.length) {
          this.props.resetTimer(this.props.timeslots[this.state.currentTimeslot].seconds);
        }
        else {
          clearInterval(this.state.timer);
          this.props.resetTimer(0);
        }
      });
    }
    else {
      this.props.tick();
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
