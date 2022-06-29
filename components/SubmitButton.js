import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";

import { Touchable } from "./Touchable";
const windowHeight = Dimensions.get("window").height;

import defaultNumber from "../Constants/defaultNumber";

const SubmitButton = (props) => {
  return (
    <View style={styles.container}>
      <Touchable onPress={() => props.action()}>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
      </Touchable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#65B804",
    height: (windowHeight * 8.5) / 100,
    width: "95%",
    borderRadius: defaultNumber * 7.5,
    overflow: "hidden",
  },
  subContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: defaultNumber * 4,
    fontFamily: "Poppins_500Medium",
  },
});

export default SubmitButton;
