import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MealsNavigator from '../navigation/MealsNaigator';
import {CategoriesScreen} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
};

export default App;
