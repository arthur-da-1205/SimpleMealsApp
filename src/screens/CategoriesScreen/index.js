import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Category!"
        onPress={() => {
          props.navigation.navigate('CategoryMeals');
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
