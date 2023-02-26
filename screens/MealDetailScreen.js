import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useLayoutEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import MealSubtitle from "../components/MealDetail/MealSubtitle";
import MealLists from "../components/MealDetail/MealLists";
import IconButton from "../components/IconButton";
// import { FavouritesContext } from "../store/context/favourite-context";
import { addFavourite, removeFavourite } from "../store/redux/favouriteSlice";

export default function MealDetailScreen({ route, navigation }) {
  // const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);
  const mealIsFavourite = favouriteMealsIds.includes(mealId);
  // useEffect(() => {

  //   navigation.setOptions({
  //     title: mealsTitle.title,
  //   });
  // }, [mealId, navigation]);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      // favouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteStatusHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{
          uri: selectedMeals.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealDetail
        affordability={selectedMeals.affordability}
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <MealSubtitle text="Ingredients" />
          <MealLists data={selectedMeals.ingredients} />
          <MealSubtitle text="Steps" />
          <MealLists data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
