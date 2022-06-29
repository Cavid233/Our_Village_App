import React from "react";
import { View, Text } from "react-native";

import { Touchable } from "./Touchable";

import { useNavigation } from "@react-navigation/native";

const ActionButton = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Touchable onPress={() => navigation.goBack()}>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>{props.text}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#65B804",
    height: "73%",
    borderRadius: 30,
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
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
});

export default ActionButton;
