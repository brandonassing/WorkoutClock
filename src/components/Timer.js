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
  }

  componentDidMount() {
    setInterval( function() {
       this.props.tick({
         type : 'TIMER_TICK'
       })
    }, 1000 );
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

export default connect (mapStateToProps, mapDispatchToProps)(Timer)
