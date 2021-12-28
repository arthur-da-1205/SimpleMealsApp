import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>The Favourites Screen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
