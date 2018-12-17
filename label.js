import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';

class label extends React.Component {
  // Our component will keep track of this state

// This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>
          Sudenpentuhuone
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    scaleX: 5
  },
  greeting: {
    fontSize: 30,
  },
});

export default label;