import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

import defaultNumber from "../../Constants/defaultNumber";

const KilogramBox = (props) => {
  return (
    <View
      style={{
        ...styles.kilogramBox,
        borderColor: props.selectedKg == props.kg ? "#65B804" : "gray",
        borderWidth:
          props.selectedKg == props.kg
            ? (defaultNumber * 1.5) / 4
            : (defaultNumber * 0.4) / 4,
      }}
    >
      <Touchable onPress={() => props.selectedKgHandler(props.kg)}>
        <View style={styles.subKilogramBox}>
          <Text style={styles.kilogramBoxText}>{props.kg} kg</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  kilogramBoxText: { fontSize: (defaultNumber * 14) / 4 },
  subKilogramBox: {
    paddingHorizontal: (defaultNumber * 15) / 4,
    paddingVertical: (defaultNumber * 10) / 4,
    justifyContent: "center",
    alignItems: "center",
  },
  kilogramBox: {
    borderRadius: (defaultNumber * 15) / 4,
    overflow: "hidden",
    marginRight: (defaultNumber * 8) / 4,
  },
});

export default KilogramBox;
