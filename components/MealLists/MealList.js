import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../MealItem";
import React from "react";

export default function MealList({ items }) {
  function renderMealItem(itemData) {
    //one way to go about it to navigate from the screen page,\
    // another way is to use hooks
    // function pressHandler() {
    //   navigation.navigate("MealDetails", {
    //     id: itemData.item.id,
    //   });
    // }
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
