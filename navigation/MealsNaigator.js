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
      <StackNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{headerTitle: false}}
      />
    </StackNavigator.Navigator>
  );
};

export default MealsNavigator;
