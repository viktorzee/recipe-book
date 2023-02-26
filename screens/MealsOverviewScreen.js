import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealLists/MealList";

export default function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [catId, navigation]);

  return <MealList items={displayMeals} />;
}

const styles = StyleSheet.create({});
