import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { tick } from '../Actions/CountTime';

const mapStateToProps = state => {
  return {
    timeslots: state.updateWorkout.workout.timeslots,
    sets: state.updateWorkout.workout.sets,
    count: state.updateTimer.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch(tick()),
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
    this.setState({
      timer: setInterval(this.tick, 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick() {
    this.props.tick();
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.count}
        </Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
