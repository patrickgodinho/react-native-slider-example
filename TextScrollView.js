import React from 'react';
import {Animated, Easing, ScrollView, Text, TouchableHighlight, View} from 'react-native';

const TOTAL = 50;

const renderItems = () => {
  const items = [];
  for (let i = 0; i < TOTAL; i++) {
    items.push(<Text key={i}>{i+1}</Text>)
  }
  return items.map(text => text);
};
export default props => {

  let animatedValue = new Animated.Value(0);

  animatedValue.addListener(
    () => {
      this._scrollView.scrollToEnd({animated: true});
    }
  );

  const timing = Animated.timing(animatedValue, {
    duration: TOTAL*5000,
    easing: Easing.linear,
  });

  if (props.value > 0) {
    timing.start();
  } else {
    timing.stop();
  }

  return (
    <View>
      <TouchableHighlight onPress={() => this._scrollView.scrollToEnd({animated: true})}>
        <Text>Click me</Text>
      </TouchableHighlight>
      <ScrollView
        ref={(element) => this._scrollView = element}
      >
        {renderItems()}
      </ScrollView>
    </View>
  )
}
