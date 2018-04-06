import React from 'react';
import {StyleSheet, View, Slider} from 'react-native';
import SliderView from './SliderView';
import ScrollView from './TextScrollView';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {sliderValue: 0}
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderView onValueChange={value => this.setState({sliderValue:value})}/>
        <ScrollView value={this.state.sliderValue}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
});
