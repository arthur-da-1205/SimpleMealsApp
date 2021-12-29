import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    const data = itemData.item;
    console.log(data);
    return (
      <TouchableOpacity
        style={{flex: 1, margin: 15, height: 100}}
        onPress={() => {
          props.navigation.navigate('CategoryMeals', data);
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
