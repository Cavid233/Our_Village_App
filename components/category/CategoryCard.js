import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import defaultNumber from "../../Constants/defaultNumber";

import { Touchable } from "../Touchable";

import { useNavigation } from "@react-navigation/native";


const CategoryCard = (props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...styles.categoryCardContainer,
        height: props.isInCategoriesScreen ? "33%" : "45%",
        backgroundColor: props.bgColor,
      }}
    >
      <Touchable
        onPress={() =>
          navigation.navigate("SubCategoryScreen", {
            categoryName: props.title,
            categoryId: props.id,
          })
        }
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={styles.categoryCardTitleContainer}>
            <Text
              style={{
                fontSize: defaultNumber * 5.5,
                fontFamily: "Poppins_500Medium",
              }}
            >
              {props.title}
            </Text>
          </View>
          <View style={styles.categoryCardImageContainer}>
            <Image
              resizeMode={"contain"}
              style={{ height: "55%", width: "70%" }}
              source={props.imgSrc}
            />
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCardTitleContainer: {
    position: "absolute",
    flex: 1,
    top: "7%",
    left: "7%",
  },
  categoryCardImageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  categoryCardContainer: {
    width: "48%",
    marginVertical: defaultNumber * 1.5,
    backgroundColor: "blue",
    borderRadius: defaultNumber * 5,
    overflow: "hidden",
  },
});

export default CategoryCard;
