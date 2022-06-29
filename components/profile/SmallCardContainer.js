import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

import defaultNumber from "../../Constants/defaultNumber";

import { AntDesign } from "@expo/vector-icons";

const SmallCardContainer = (props) => {
  return (
    <View style={styles.container}>
      <Touchable onPress={() => props.action()}>
        <View style={styles.subContainer}>
          <View style={styles.smallCardView}>
            <View>
              <Text style={styles.text}>{props.text}</Text>
            </View>
            <View>
              <AntDesign
                name="right"
                size={defaultNumber * 6}
                color="#FF9900"
              />
            </View>
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "11%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: (defaultNumber * 15) / 4,
    overflow: "hidden",
    borderColor: "#D4D4D4",
    borderWidth: 0.8,
    marginVertical: 10,
  },
  subContainer: {
    alignItems: "center",
    flex: 1,
  },
  smallCardView: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: { fontWeight: "bold", fontSize: defaultNumber * 4 },
});

export default SmallCardContainer;
