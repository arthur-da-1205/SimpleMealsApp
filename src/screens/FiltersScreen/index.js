import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FiltersScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>The Filters Screen</Text>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
