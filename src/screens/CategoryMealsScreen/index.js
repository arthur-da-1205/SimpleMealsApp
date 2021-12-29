import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';

const CategoryMealsScreen = ({navigation, route}) => {
  const {id, title, color} = route.params;
  const selectedItem = CATEGORIES.find(cat => cat.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'magenta' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : '',
    });
  });

  return (
    <View style={styles.screenContainer}>
      {/* {console.log(catID)} */}
      <Text>{selectedItem.title}</Text>
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
