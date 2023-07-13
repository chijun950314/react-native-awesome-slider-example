/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useMemo, useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Slider from './Slider';

const totalLeftRight = 8;

function App(): JSX.Element {
  const [progressLeft, setProgressLeft] = useState<number>(0);
  const [progressRight, setprogressRight] = useState<number>(0);

  const maxLeft = useMemo(() => totalLeftRight - progressRight, [progressRight])
  const maxRight = useMemo(() => totalLeftRight - progressLeft, [progressLeft])

  const onLeftChange = (left: number) => {
    setProgressLeft(left)
  };

  const onRightChange = (right: number) => {
    setprogressRight(right)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Total Left and Right Available: {totalLeftRight} </Text>
        <Text>Remaing for Left : {totalLeftRight - progressRight}</Text>
        <Text>Remaing for Right : {totalLeftRight - progressLeft}</Text>
      </View>
      <Slider
        value={progressLeft}
        max={maxLeft}
        onValueChange={onLeftChange}
      />
      <Slider
        value={progressRight}
        max={maxRight}
        onValueChange={onRightChange}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  spanRow: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    columnGap: 16,
    padding: 32,
  },

  infoContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default gestureHandlerRootHOC(App);
