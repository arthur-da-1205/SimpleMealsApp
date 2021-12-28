import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoryMealsScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Detail!"
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
