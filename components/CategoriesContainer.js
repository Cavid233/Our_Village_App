import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";



import { categoriesData } from "../data/dummy_data";

import CategoryCard from "./category/CategoryCard";

const colorsArray = [
  "#E7F2E1",
  "#FAEAEA",
  "#EEEEF9",
  "#FFF0E0",
  "#F7EEF9",
  "#E0E9FF",
];

let checkColorIndex = -1;

const CategoriesContainer = (props) => {
  return (
    <View style={styles.container}>
      {categoriesData.map((item, index) => {
        checkColorIndex++;
        if (checkColorIndex === colorsArray.length) {
          checkColorIndex = 0;
        }
        return (
          <CategoryCard
            id={item.id}
            bgColor={colorsArray[checkColorIndex]}
            title={item.name}
            imgSrc={item.item_img}
            isInCategoriesScreen={props.isInCategoriesScreen}
            key={item.id.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "95%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CategoriesContainer;
