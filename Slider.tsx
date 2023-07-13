/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native';
import {Slider as AwesomeSlider} from 'react-native-awesome-slider';
import {useSharedValue} from 'react-native-reanimated';

type SliderProps = {
  value: number,
  max: number,
  onValueChange: (arg0: number) => void
}

function Slider({value, max, onValueChange}: SliderProps): JSX.Element {
  const progress = useSharedValue(value);
  const minVal = useSharedValue(0);
  const maxVal = useSharedValue(max);

  useEffect(() => {
    progress.value = value;
  }, [value])

  useEffect(() => {
    maxVal.value = max;
  }, [max])

  return (
    <AwesomeSlider
      style={styles.spanRow}
      progress={progress}
      minimumValue={minVal}
      maximumValue={maxVal}
      step={maxVal.value - minVal.value}
      onValueChange={onValueChange}
    />
  );
}

const styles = StyleSheet.create({
  spanRow: {
    // flex: 1,
  },
});

export default Slider;
