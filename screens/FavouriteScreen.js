import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealLists/MealList";
import { MEALS } from "../data/dummy-data";
// import { FavouritesContext } from "../store/context/favourite-context";

export default function FavouriteScreen() {
  // const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id)
  );
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no selected Favourites</Text>
      </View>
    );
  }
  return <MealList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
