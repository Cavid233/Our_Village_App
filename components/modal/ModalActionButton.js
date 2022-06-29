import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

import defaultNumber from "../../Constants/defaultNumber";

const ModalActionButton = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: props.color,
      }}
    >
      <Touchable onPress={() => props.action()}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: "70%",
    overflow: "hidden",
    borderRadius: defaultNumber * 7.5,
  },
  subContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: defaultNumber * 3.5,
  },
});

export default ModalActionButton;
