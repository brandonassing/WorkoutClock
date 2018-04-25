import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import ExerciseField from './ExerciseField';

class ExerciseFieldList extends Component {

  render(){
    return (
      <View>
        <ExerciseField />
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    mainState: state.mainState
  }
}

export default connect(mapStateToProps)(ExerciseFieldList)
