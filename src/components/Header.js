import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Workout Timer</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

//const { headerContainer, header } = styles;

export default Header;
