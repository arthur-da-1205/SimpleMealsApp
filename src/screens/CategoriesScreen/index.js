import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';

const renderGridItem = itemData => {
  return (
    <View style={{flex: 1, margin: 15, height: 100}}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
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
