import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import defaultNumber from "../Constants/defaultNumber";

import { Touchable } from "./Touchable";

const windowHeight = Dimensions.get("window").height;

const HeaderTitleContainer = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            ...styles.title,
            fontSize: props.fontSize
              ? props.fontSize
              : (defaultNumber * 24) / 4,
          }}
        >
          {props.headerTitle}
        </Text>
      </View>
      {props.isIcon && (
        <View style={styles.arrowLeftContainer}>
          <View style={styles.iconContainer}>
            <Touchable onPress={() => navigation.goBack()}>
              <View style={styles.subIconContainer}>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  // size={24}
                  size={(defaultNumber * 24) / 4}
                  color="black"
                />
              </View>
            </Touchable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "10%",
    height: (windowHeight * 10) / 100,
    width: "100%",
  },
  arrowLeftContainer: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
  },
  titleContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
  },
  iconContainer: {
    height: (defaultNumber * 40) / 4,
    width: (defaultNumber * 40) / 4,
    borderRadius: (defaultNumber * 25) / 4,
    overflow: "hidden",
    backgroundColor: "white",
  },
  subIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins_500Medium",
  },
});

export default HeaderTitleContainer;
