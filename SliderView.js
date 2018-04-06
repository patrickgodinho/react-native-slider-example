import React from 'react';
import {Slider} from 'react-native';

export default class SliderView extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Slider
        style={{width: '100%'}}
        onValueChange={this.props.onValueChange}
        minimumValue={0}
        maximumValue={15}
        step={1}
      />
    )
  }
}