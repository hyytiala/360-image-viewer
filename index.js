import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import label from './label'
import bench from './bench'

export default class kolo extends React.Component {
  // Our component will keep track of this state
  state = {
    count: 0,
  };

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
    borderWidth: 2
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('label', () => kolo);
AppRegistry.registerComponent('closet', () => label);
AppRegistry.registerComponent('bench', () => bench);
