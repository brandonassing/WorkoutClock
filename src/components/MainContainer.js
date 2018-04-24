import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class MainContainer extends Component {
  render(){
    return (
      <View>
        <Text>My Container</Text>
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    mainState: state.mainState
  }
}

export default connect(mapStateToProps)(MainContainer)
