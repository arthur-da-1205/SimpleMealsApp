import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from '../src/screens';

const StackNavigator = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Categories" component={CategoriesScreen} />
      <StackNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({route}) => ({title: route.params.title})}
      />
      <StackNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </StackNavigator.Navigator>
  );
};

export default MealsNavigator;
