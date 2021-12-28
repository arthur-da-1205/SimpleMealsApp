import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetailScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>The Meal Detail Screen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
