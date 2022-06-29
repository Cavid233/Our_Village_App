import { View, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

import { MaterialIcons } from "@expo/vector-icons";

import defaultNumber from "../../Constants/defaultNumber";

const CancelButton = (props) => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconView}>
        <Touchable onPress={() => props.action()} useForeground>
          <View style={{ padding: 2 }}>
            <MaterialIcons
              name="cancel"
              size={defaultNumber * 7.5}
              color="red"
            />
          </View>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconView: {
    borderRadius: defaultNumber * 7.5,
    overflow: "hidden",
  },
});

export default CancelButton;
