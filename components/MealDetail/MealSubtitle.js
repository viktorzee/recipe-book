import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealSubtitle({ text }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
